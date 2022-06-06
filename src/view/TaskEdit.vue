<template>
 <section class="main__wrapper">	
    <Title >
      {{id ? "Редактирование" : "Создание"}}    
      <template v-slot:buttons>
        
          <Button class="btn primary"  @click="addTask" > 
            {{id ? "Редактировать" : "Добавить" }}
          </Button>
          <router-link to="/">
              <Button class="btn default" > Отмена </Button> 
          </router-link>   
 
      </template>
    </Title>	
    <div v-if="loading">loading</div>
    <section class='board' v-else>	
	    <form class="board__form" id="taskFormID">
            <div class="board__form-data">
                  <label for="user" class='taskPage-title'>Исполнитель</label>
                  
                  <Select name="user" :list="userlist" placeholder="Исполнитель" :checked="id ? currentTask.assignedId : assId ? assId : ''"  v-model="taskForm.assignedId" /> 

                  <label for="type" class='taskPage-title'>Тип</label>

                  <Select name="user" :list="typeList" placeholder="Тип" :checked="id ? currentTask.type : ''" v-model="taskForm.type" /> 


                  <label for="rank" class='taskPage-title'>Приоритет</label>

                  <Select name="user" :list="rankList" placeholder="Приоритет" :checked="id ? currentTask.rank : ''"  v-model="taskForm.rank" /> 


            </div>
            <div class="board__form-info">
                  <label for="title" class='taskPage-title'>Название</label>
                  <Input
                    name="title"
                    placeholder="Заголовок"
                    v-model="taskForm.title"
                    required
                  />
                  <label htmlFor="description" class='taskPage-title'>Задача</label>
                  <textarea
                    name="description"
                    placeholder="Описание"
                    v-model="taskForm.description"
                    required
                  > </textarea>

            </div>
            <div class="board__form-comments"></div>
          </form>
   
    </section>
  </section>
</template>

<script>
import { mapGetters,mapActions } from 'vuex';
import api from '@/api';

export default {
    data() {
        return {
          typeList: {task: "Задача",bug: "Ошибка"},
          rankList: {low: "Низкий",medium: "Средний",high: "Высокий"},
          taskForm:{
                "userId": localStorage.getItem('userId'),
                "assignedId": "",
                "title": "",
                "description": "",
                "type": "",
                "rank": ""
          }
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
        addTask(){
          	api.Events.addTask(this.taskForm)
            .then(() => this.$router.push({ name: 'Tasks'}))
        },
        
    },
    watch:{
      currentTask() {
        this.taskForm = this.currentTask
      }
    },
    mounted() {
        if (this.id) { this.getTask(this.id) }
        
        if (this.userlist) { this.fetchUsers() }
        
    },

}
</script>

<style lang="scss" scoped>
.board__form{
    display: flex;
    flex-direction: row;
    height: 100%;
    & select{
      padding: 2px;
      height: 24px;
      border: 1px solid #7B61FF;
      box-sizing: border-box;
      box-shadow: inset 0px 0px 2px 1px #B5B5B5;
      border-radius: 3px;
      margin: 5px 0 20px 0;
    }

    & input{
      height: 24px;
      border: 1px solid #7B61FF;
      box-sizing: border-box;
      box-shadow: inset 0px 0px 2px 1px #B5B5B5;
      border-radius: 3px;
      padding: 5px;
      margin: 5px 0 20px 0;
    }
    & textarea{
      height: 100%;
      border: 1px solid #7B61FF;
      box-sizing: border-box;
      box-shadow: inset 0px 0px 2px 1px #B5B5B5;
      border-radius: 3px;
      padding: 5px;
      margin: 5px 0 0 0;
    }

    &-data{
      width: 26%;
      height: 100%;
      display: flex;
      flex-direction: column;
      padding: 0 20px;
    }
    &-info{
      width: 35%;
      height: 100%;
      display: flex;
      flex-direction: column;
      padding: 0 20px;
      border-right: #B5B5B5 solid 2px;
      border-left: #B5B5B5 solid 2px;
    }
    &-comments{
      width: 40%;
      height: 100%;
      padding: 0 20px;
    }
}

</style>