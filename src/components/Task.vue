<template>
	 <article class="task" >

      <div class="task_inner">
          <div class="task_inner-item task_type">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 5C0 2.23858 2.23858 0 5 0H19C21.7614 0 24 2.23858 24 5V19C24 21.7614 21.7614 24 19 24H5C2.23858 24 0 21.7614 0 19V5Z" :fill="typecheck"/>
                <circle cx="12" cy="12" r="6" fill="white"/>
              </svg>
          </div>

          <div class="task_inner-item task_name">            
              <router-link :to="TaskPage"  class="lnk"> {{taskData.title}} </router-link>      
          </div>

   
          <div  class="task_inner-item task_autor">
           	{{userlist[taskData.assignedId]}}
          </div>
    
          <div class="task_inner-item task_status" >
           <!-- <div class="task_status-btn status-opened"></div>-->
           <Plate :class="taskData.status"> {{Enum[taskData.status]}} </Plate>
          </div>

          <div class="task_inner-item task_priority priority-low" >{{taskData.rank}}</div>

   
          <div class="task_btn">
            <DropMenu >
              <router-link :to="TaskEdit"  class="lnk"> Редактировать </router-link>
              <router-link :to="TaskEdit"  class="lnk"> Редактировать </router-link>
              <router-link :to="TaskEdit"  class="lnk"> Редактировать </router-link>
              <router-link :to="TaskEdit"  class="lnk"> Редактировать </router-link>
            </DropMenu>
              
          </div>
          
      </div>

    </article>
</template>

<script>
import { mapGetters,mapActions } from 'vuex';
import { Enum } from '../constants/enum';
import DropMenu from './DropMenu.vue';


export default {
    data() {
        return {
            TaskPage: {
                name: "TaskPage",
                params: {
                    id: this.taskData.id
                }
            },
            TaskEdit: {
                name: "TaskEdit",
                params: {
                    id: this.taskData.id
                }
            },
            Enum: Enum,
        };
    },
    props: {
        taskData: Object,
    },
    computed: {
        ...mapGetters("tasks", ["loading", "tasks", "filter"]),
        ...mapGetters("users", ["users", "userlist"]),
        typecheck() {
            return this.taskData.type === "task" ? "#00D1FF" : "#EB4F4F";
        }
    },
    methods: {
        ...mapActions("tasks", ["setLoading", "fetchTasks"]),
        ...mapActions("users", ["fetchUsers"]),
    },
    components: { DropMenu }
}
</script>

<style lang="scss" scoped>

.task:nth-child(2n){
  background-color: #F2F2F2;
}


.task{
  width: 100%;
  height: 8.5vh;
  &_inner{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin:0 -7px;

    &-item{
      margin: 0 7px;
      box-sizing: border-box;
    }

    .task_type{
      width: 8%;
      display: flex;
      justify-content: center;
      align-items: center;

    }

    .task_name{
      width: 48%;
      display: flex;
      align-items: center;
      overflow: hidden;
      white-space: nowrap;

      & a{
        font-size: 16px;
        color: $text-color;
        text-decoration: none;
      }
    }
    .task_name:hover >  a{
      color: $primary;
      border-bottom: solid 2px $primary;
    }
    .task_autor{
      width: 15%;
      display: flex;
      align-items: center;
    }
    .task_status{
      width: 10%;
      display: flex;
      align-items: center;
    }

    .task_status-btn{
      height: 20px;
      border: solid 1px black;
      border-radius: 3px;
      padding: 0 5px;
    }

    .task_priority{
      width: 10%;
      display: flex;
      align-items: center;
      padding-left: 15px;
      background-repeat: no-repeat;
      background-position-x: 0;
      background-position-y: center;
    }

    .task_btn{
      width: 10%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
     
    }
  }
}


</style>