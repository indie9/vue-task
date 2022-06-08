<template>
	
    <section class="main__wrapper">	
        <Title >
            {{currentProfile.username}} 
            <template v-slot:buttons> 
                <Button class="btn default" v-show="show"  @click="modalVisable"> Редактировать </Button>
               <router-link :to="TaskEdit" > <Button class="btn primary"> Добавить задачу</Button> </router-link>
            </template>
        </Title>		
        <section class='board'>					
            <section class="board__profile" >
                <article class="board__profile-bio" >
                    <img class="avatar" :src="currentProfile.photoUrl ? currentProfile.photoUrl : 'https://cdn-icons-png.flaticon.com/512/18/18601.png'" alt="avatar" width="186" height="186" />

                    <p class="title">О себе</p>

                    <p class="profile-info">
                        {{currentProfile.about}}
                    </p>

                </article>
                <article class="board__profile-tasks" >
                    <p class="title"> Задачи </p>
                    <div class="task_list" v-if="loading">
                        loading...
                    </div>
                    <div class="task_list" v-else-if="tasks.data[0]">
                        <Task v-for="task in tasks.data" :key="task.id" :taskData="task" :short="true"/>
                    </div>
                    <div class="task_list" v-else>
                        Пользователь свободен от задач, накидайте-ка ему что-нибдуь
                    </div>
                    <Pagination v-model="page" v-show="tasks.data[0]" />
                </article>
            </section>
        </section>

         <ModalWindow  v-show="showModal"> 
            <div class="modal_board-title"> Редактирование пользователя </div>
              <form  class='modal_board-form' id='modal_form' @submit="editProfile">
                <label htmlFor="username" class='taskPage-title'>Имя пользователя</label>
                    <Input
                      type="text"
                      class="board__input board__input--theme"
                      name="username"
                      v-model="formUser.username"
                    />
                <label htmlFor="photoUrl" class='taskPage-title'>URL фотографии</label>
                    <Input
                      type="text"
                      class="board__input board__input--theme"
                      name="photoUrl"
                      v-model="formUser.photoUrl"
                    />
                <label htmlFor="about" class='taskPage-title'>О себе</label>
                    <Textarea
                      type="text"
                      class="board__input board__input--theme"
                      name="about"
                      v-model="formUser.about"
                    > </Textarea>
              </form>
              <div class="modal_board-buttons">
                <Button class='btn primary' form='modal_form' type="submit" > Сохранить </Button>
                <Button class='btn default' type="button" @click="modalVisable"> Отмена </Button>
              </div>
        </ModalWindow>
    </section>
</template>

<script>
import { mapGetters,mapActions } from 'vuex';

export default {
    data() {
        return {  
            page: 0,
            showModal: false,
            formUser:{
                id: this.id,
                login: "",
                username: "",
                about: "",
                photoUrl: "",
                password: ""
            },
            TaskEdit: {
                name: "TaskEdit",
                params: {
                    id:"",
                    assId: this.id
                }
            }, 
      	};
    },
    watch: {
        page(val) {
            this.setFilter({
                "filter": this.filter.filter,
                "page": val,
                "limit": 8,
            });
        },
        id(){
            this.getCurrentProfile(this.id);
            this.setFilter({
                "filter": {
                    "assignedUsers":[this.id]
                },
                "page": 0,
                "limit": 8,
            });
        },
        userProfileData(){
            this.formUser ={...this.userProfileData}
            this.formUser.password = localStorage.getItem("userPass")
            this.getCurrentProfile(this.id);
        }
    },
    props: {
        id: String,
    },
    computed: {
        ...mapGetters("tasks", ["loading", "tasks", "filter"]),
        ...mapGetters("users", ["users", "userlist","usersLoading","usersFilter"]),
        ...mapGetters("userprofile", ["userProfileData", "currentProfile"]),
        show(){
            return localStorage.getItem("userId") === this.id
        }
    },
    methods: {
        ...mapActions("tasks", ["setLoading", "fetchTasks", "setFilter"]),
        ...mapActions("users", ["fetchUsers","fetchPageUsers","setUsersFilter"]),
        ...mapActions("userprofile", ["getCurrentProfile","getUserData","editUserProfile"]),
        modalVisable(){   
            this.showModal = !this.showModal;
        },
        editProfile(e){
            e.preventDefault();
            this.showModal = !this.showModal;
            this.editUserProfile(this.formUser);
        }
    },
    mounted() {
        if (localStorage.getItem("userId") === this.id){
            this.getUserData(this.id);
        }
        this.getCurrentProfile(this.id);
        this.setFilter({
                "filter": {
                    "assignedUsers":[this.id]
                },
                "page": 0,
                "limit": 8,
            });
    },
}
</script>

<style lang="scss" scoped>
.board__profile{
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    
    &-bio{
        width: 33%;
        height: 100%;
        padding-right: 20px;
        border-right: #B5B5B5 solid 2px;
        display: flex;
        flex-direction: column;
        & .avatar{
            border-radius: 50%;
            border:  solid 1px var(--primary);
        }
        & .title{
            color: #CCCCCC;
            font-size: 16px;
            margin: 20px 0 5px 0;
        }
        & .profile-info{
            
            color: #333333;
            color: $text-color;
            line-height: 19px;
            
        }   
    }
    &-tasks{
        width: 66%;
        padding-left: 20px;
        display: flex;
        flex-direction: column;
        & .title{
            color: #CCCCCC;
            font-size: 16px;
            margin: 0px 0 10px 0;        
        }
        & .task_list{         
            height: 100%;
            & .task_name{
                width: 70%;
            }
        }
    }
}
.modal_board{
    &-title{
      font-size: 20px;
      height: 67px;
      display: flex;
      align-items: center;
      padding: 0 30px;
    }
    &-form{
      display: flex;
      flex-direction: column;
      border-top: 1px solid #B5B5B5;
      border-bottom: 1px solid #B5B5B5;
      padding: 0 30px;
      height: 276px;
      & .taskPage-title{
        position: relative;
        margin: 20px 0 5px 0;
        display: flex;
        flex-direction: column;
      }

    }
    &-buttons{
      display: flex;
      flex-direction: row;
      padding: 0 30px;
      height: 64px;
      display: flex;
      align-items: center;
    }
  }
  .task_list{
  border-radius: 3px;
  border: solid 1px $inner-shadow;
  margin-bottom: auto;
}
</style>
