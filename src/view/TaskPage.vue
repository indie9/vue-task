<template>
  <section class="main__wrapper">
    <Title>
      {{ currentTask.title }}
      <template v-slot:subTitle>
        <Plate :class="currentTask.status"> {{ currentTask.status }} </Plate>
      </template>
      <template v-slot:buttons>
        <Button
          class="btn default"
          @click="status('opened')"
          v-show="currentTask.status !== 'opened'"
        >
          Переоткрыть
        </Button>
        <Button
          class="btn default"
          @click="status('inProgress')"
          v-show="currentTask.status === 'opened'"
        >
          Взять в работу</Button
        >
        <Button
          class="btn default"
          @click="status('complete')"
          v-show="currentTask.status !== 'complete'"
        >
          Готово
        </Button>
        <Button
          class="btn default"
          @click="status('testing')"
          v-show="currentTask.status === 'inProgress'"
        >
          На тестирование</Button
        >
        <router-link :to="TaskEdit" class="lnk dropdown-content-item">
          <Button class="btn primary"> Редактировать </Button>
        </router-link>
        <Button class="btn error" @click="deleteTask"> Удалить </Button>
      </template>
    </Title>
    <section class="board">
      <div v-if="loading || commentsLoading">loading</div>
      <section class="taskPage" v-else>
        <div class="taskPage-data">
          <p class="taskPage-title">Исполнитель</p>
          <p>{{ userlist[currentTask.assignedId] }}</p>

          <p class="taskPage-title">Автор задачи</p>
          <p>{{ userlist[currentTask.userId] }}</p>

          <p class="taskPage-title">Тип запроса</p>
          <p>{{ Enum[currentTask.type] }}</p>

          <p class="taskPage-title">Приоритет</p>
          <p>{{ Enum[currentTask.rank] }}</p>

          <p class="taskPage-title">Дата начала</p>
          <p>{{ moment(currentTask.dateOfCreation) }}</p>

          <p class="taskPage-title">Дата изменения</p>
          <p>{{ moment(currentTask.dateOfUpdate) }}</p>

          <p class="taskPage-title">Затрачено времени</p>

          <p v-if="currentTask.timeInMinutes">
            {{
              Math.floor(currentTask.timeInMinutes / 1440)
                ? getNoun(
                    Math.floor(currentTask.timeInMinutes / 1440),
                    " День ",
                    " Дня ",
                    " Дней "
                  )
                : ""
            }}
            {{
              Math.floor((currentTask.timeInMinutes % 1440) / 60)
                ? getNoun(
                    Math.floor((currentTask.timeInMinutes % 1440) / 60),
                    " Час ",
                    " Часа ",
                    " Часов "
                  )
                : ""
            }}
            {{
              Math.floor(currentTask.timeInMinutes % 60)
                ? getNoun(
                    Math.floor(currentTask.timeInMinutes % 60),
                    " Минута ",
                    " Минуты ",
                    " Минут "
                  )
                : ""
            }}
          </p>
          <p v-else>{{ "Никто не приступал к работе" }}</p>
          <Button class="btn primary" @click="modalVisable"
            >Сделать запись о работе</Button
          >
        </div>

        <div class="taskPage-info">
          <p class="taskPage-title">Описание</p>
          <p class="taskPage-info-text">{{ currentTask.description }}</p>
        </div>

        <form class="taskPage-comments">
          <p class="taskPage-title">Коментарии ({{ comments.length }})</p>
          <Textarea
            class="taskPage-textArea"
            placeholder="Текст комментария"
            required
            v-model="commentText"
          />
          <Button class="btn success" @click="addComment">
            Добавить комментарий</Button
          >

          <div class="comments-list">
            <div
              class="comment-item"
              v-for="coment in comments"
              :key="coment.id"
            >
              <p class="comment-title">
                {{ userlist[coment.userId] }}
                <Button
                  type="button"
                  class="btn error"
                  v-show="loginFlag == coment.userId"
                  @click="deleteComment(coment.id)"
                  >Удалить</Button
                >
              </p>
              <p class="comment-body">{{ coment.text }}</p>
            </div>
          </div>
        </form>
      </section>
    </section>
    <ModalWindow v-show="showModal">
      <div class="modal_board-title">Запись о работе</div>
      <form class="modal_board-form" id="modal_form" @submit="editTime">
        <label for="time" class="taskPage-title"
          >Затраченое время
          <Input
            type="number"
            class="board__input board__input--theme"
            name="time"
            placeholder="Время"
            required
            v-model="formTime.timeInMinutes"
          />
        </label>
        <label for="username" class="taskPage-title" id="forselect"
          >Единица измерения
          <Select
            class="board__input board__input--theme"
            name="username"
            placeholder="Единица измерения"
            :list="timeList"
            required
            :style="{ top: '14px', position: 'absolute' }"
            v-model="formTime.multiply"
          >
          </Select>
        </label>
        <label for="about" class="taskPage-title"
          >Коментарий
          <Textarea
            type="text"
            class="board__input board__input--theme"
            name="about"
            placeholder="Ваш коментарий"
            v-model="formTime.comment"
            required
          >
          </Textarea>
        </label>
      </form>
      <div class="modal_board-buttons">
        <Button class="btn primary" form="modal_form" type="submit">
          Сохранить
        </Button>
        <Button class="btn default" type="button" @click="modalVisable">
          Отмена
        </Button>
      </div>
    </ModalWindow>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { Enum } from "../constants/enum";
import moment from "moment";
import "moment/locale/ru";
import api from "@/api";
import ModalWindow from "../components/ModalWindow.vue";

export default {
  data() {
    return {
      Enum: Enum,
      commentText: "",
      showModal: false,
      timeList: {
        1: "Минута",
        60: "Час",
        1440: "День",
      },
      formTime: {
        timeInMinutes: "0",
        comment: "",
        currentUser: localStorage.getItem("userId"),
        multiply: "1",
      },
      TaskEdit: {
        name: "TaskEdit",
        params: {
          id: this.id,
        },
      },
      Tasks: {
        name: "Tasks",
      },
    };
  },
  props: {
    id: String,
  },
  computed: {
    ...mapGetters("tasks", ["loading", "tasks", "filter", "currentTask"]),
    ...mapGetters("users", ["users", "userlist"]),
    ...mapGetters("comments", ["comments", "commentsLoading"]),
    loginFlag() {
      return localStorage.getItem("userId");
    },
  },
  methods: {
    ...mapActions("tasks", ["setLoading", "fetchTasks", "getTask"]),
    ...mapActions("users", ["fetchUsers"]),
    ...mapActions("comments", ["fetchComments"]),
    moment(date) {
      return moment(date).format("DD.MM.YYYY h:mm");
    },
    addComment() {
      if (this.commentText) {
        api.Events.addComment({
          taskId: this.id,
          userId: localStorage.getItem("userId"),
          text: this.commentText,
        }).then(() => this.fetchComments(this.id));
      }
      this.commentText = "";
    },
    deleteComment(id) {
      api.Events.removeComment(id).then(() => this.fetchComments(this.id));
    },
    getNoun(number, one, two, five) {
      let n = Math.abs(number);
      n %= 100;
      if (n >= 5 && n <= 20) {
        return number + five;
      }
      n %= 10;
      if (n === 1) {
        return number + one;
      }
      if (n >= 2 && n <= 4) {
        return number + two;
      }
      return number + five;
    },
    modalVisable() {
      this.showModal = !this.showModal;
    },
    editTime(e) {
      e.preventDefault();
      api.Events.addTime(this.id, {
        timeInMinutes: this.formTime.timeInMinutes * this.formTime.multiply,
        comment: this.formTime.comment,
        currentUser: localStorage.getItem("userId"),
      }).then(() => {
        this.formTime.timeInMinutes = "0";
        this.formTime.comment = "";
        this.formTime.multiply = "1";
        this.getTask(this.id);
        this.fetchComments(this.id);
      });
      this.showModal = false;
    },
    deleteTask() {
      api.Events.deleteTask(this.currentTask.id).then(() =>
        this.$router.push("/")
      );
    },
    status(value) {
      api.Events.changeStatus(this.currentTask.id, value).then(() =>
        this.getTask(this.id)
      );
    },
  },
  watch: {},
  mounted() {
    this.getTask(this.id);
    this.fetchComments(this.id);
    this.fetchUsers();
  },
  components: { ModalWindow },
};
</script>

<style lang="scss" scoped>
.taskPage {
  background-color: #ffffff;
  height: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;

  &-data {
    width: 26%;
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    & button {
      max-width: 250px;
    }
  }
  &-info {
    display: flex;
    flex-direction: column;
    width: 35%;
    padding: 0 20px;
    border-right: #b5b5b5 solid 2px;
    border-left: #b5b5b5 solid 2px;
    &-text {
      height: 100%;
      overflow-y: auto;
    }
  }
  &-comments {
    width: 40%;
    padding: 0 20px;
  }
  &-title {
    color: $label-text;
    margin: 0 0 5px 0;
  }
  &-textArea {
    width: 100%;
    height: 100px;
    background: #ffffff;
    box-shadow: inset 0px 0px 2px 1px #b5b5b5;
    border-radius: 3px;
    padding: 5px;
  }
  &-textArea::placeholder {
    color: $label-text;
  }
  &-textArea:hover {
    border: 1px solid #7b61ff;
    box-shadow: inset 0px 0px 2px 1px #b5b5b5;
  }
  &-textArea:focus {
    border: 1px solid #7b61ff;
    box-shadow: 0px 0px 2px 2px rgba(123, 97, 255, 0.5);
  }
  & p {
    margin: 0 0 20px 0;
  }
  & .comments-list {
    height: 60vh;
    overflow-y: auto;
    & .comment-item {
      display: flex;
      flex-direction: column;
      margin: 20px 0 20px 0;
    }
    & .comment-title {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      font-size: 16px;
      color: $label-text;
      margin-bottom: 5px;
    }
    & .comment-body {
      font-size: 16px;
      color: $text-color;
    }
  }
}
.modal_board {
  &-title {
    font-size: 20px;
    height: 67px;
    display: flex;
    align-items: center;
    padding: 0 30px;
  }
  &-form {
    display: flex;
    flex-direction: column;
    border-top: 1px solid #b5b5b5;
    border-bottom: 1px solid #b5b5b5;
    padding: 0 30px;
    height: 276px;
    & .taskPage-title {
      position: relative;
      margin: 20px 0 5px 0;
      display: flex;
      flex-direction: column;
    }
  }
  &-buttons {
    display: flex;
    flex-direction: row;
    padding: 0 30px;
    height: 64px;
    display: flex;
    align-items: center;
  }
}
#forselect {
  margin: 20px 0 30px 0;
}
</style>
