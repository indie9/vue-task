<template>
  <section class="main__wrapper">
    <Title>
      {{ id ? "Редактирование" : "Создание" }}
      <template v-slot:buttons>
        <Button class="btn primary" @click="addTask">
          {{ id ? "Редактировать" : "Добавить" }}
        </Button>
        <router-link to="/">
          <Button class="btn default"> Отмена </Button>
        </router-link>
      </template>
    </Title>
    <div v-if="loading">loading</div>
    <section class="board" v-else>
      <form class="board__form" id="taskFormID">
        <div class="board__form-data">
          <label for="user" class="taskPage-title">
            Исполнитель
            <Select
              name="user"
              :list="userlist"
              placeholder="Исполнитель"
              v-model="taskForm.assignedId"
            />
          </label>

          <label for="type" class="taskPage-title">
            Тип
            <Select
              name="user"
              :list="typeList"
              placeholder="Тип"
              v-model="taskForm.type"
            />
          </label>

          <label for="rank" class="taskPage-title">
            Приоритет
            <Select
              name="user"
              :list="rankList"
              placeholder="Приоритет"
              v-model="taskForm.rank"
            />
          </label>
        </div>
        <div class="board__form-info">
          <label for="title" class="taskPage-title">Название</label>
          <Input
            name="title"
            placeholder="Заголовок"
            v-model="taskForm.title"
            required
          />
          <label htmlFor="description" class="taskPage-title">Задача</label>
          <Textarea
            name="description"
            placeholder="Описание"
            v-model="taskForm.description"
            required
          >
          </Textarea>
        </div>
        <div class="board__form-comments"></div>
      </form>
    </section>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import api from "@/api";

export default {
  data() {
    return {
      typeList: { task: "Задача", bug: "Ошибка" },
      rankList: { low: "Низкий", medium: "Средний", high: "Высокий" },
      taskForm: {
        userId: localStorage.getItem("userId"),
        assignedId: "",
        title: "",
        description: "",
        type: "",
        rank: "",
      },
    };
  },
  props: {
    id: String,
    assId: String,
  },
  computed: {
    ...mapGetters("tasks", ["loading", "tasks", "currentTask"]),
    ...mapGetters("users", ["userlist"]),
  },
  methods: {
    ...mapActions("tasks", ["setLoading", "fetchTasks", "getTask"]),
    ...mapActions("users", ["fetchUsers"]),
    addTask() {
      console.log(this.taskForm);
      api.Events.addTask(this.taskForm).then(() =>
        this.$router.push({ name: "Tasks" })
      );
    },
  },
  watch: {
    currentTask() {
      this.taskForm = this.currentTask;
    },
  },
  mounted() {
    if (this.id) {
      this.getTask(this.id);
    }

    if (!this.userlist) {
      this.fetchUsers();
    }

    if (this.assId) {
      this.taskForm.assignedId = this.assId;
    }
  },
};
</script>

<style lang="scss" scoped>
.board__form {
  display: flex;
  flex-direction: row;
  height: 100%;

  &-data {
    width: 26%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    & .taskPage-title {
      width: 100%;
      position: relative;
      margin-bottom: 40px;
    }
  }
  &-info {
    width: 35%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    border-right: #b5b5b5 solid 2px;
    border-left: #b5b5b5 solid 2px;
  }
  &-comments {
    width: 40%;
    height: 100%;
    padding: 0 20px;
  }
}
</style>
