<template>
	
    <section class="main__wrapper">	
        <Title >
            {{currentProfile.username}} 
            <template v-slot:buttons>
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
                    <Task v-for="task in tasks.data" :key="task.id" :taskData="task" :short="true"/>
                    <Pagination v-model="page"/>
                </article>
            </section>
        </section>
    </section>
</template>

<script>
import { mapGetters,mapActions } from 'vuex';

export default {
    data() {
        return {  
            page: 0,
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
    },
    props: {
        id: String,
    },
    computed: {
        ...mapGetters("tasks", ["loading", "tasks", "filter"]),
        ...mapGetters("users", ["users", "userlist","usersLoading","usersFilter"]),
        ...mapGetters("userprofile", ["userProfileData", "currentProfile"]),
    },
    methods: {
        ...mapActions("tasks", ["setLoading", "fetchTasks", "setFilter"]),
        ...mapActions("users", ["fetchUsers","fetchPageUsers","setUsersFilter"]),
        ...mapActions("userprofile", ["getCurrentProfile","getUserData"]),
    },
    mounted() { 
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
            white-space:pre-wrap;
            color: #333333;
            color: var(--text-color);
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
</style>
