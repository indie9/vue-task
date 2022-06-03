<template>
<form class="sorting_list" @submit="submitForm" @reset="resetForm" >

            <div class="sorting_item sort-type">
               <Dropdown  :list="typeList" v-model="form.type"/>
            </div>

            <Input
              type = "text"
              placeholder = "Задача"
              class = "sorting_item sort-name"
              v-model="form.query"
            />

            <div class="sorting_item sort-autor">
            <Dropdown :list="userlist" v-model="form.assignedUsers"/> 
            </div>

            <div class="sorting_item sort-status">
            <Dropdown :list="statusList" v-model="form.status"/>
            </div>

            <div class="sorting_item sort-priority">
            <Dropdown :list="rankList" v-model="form.rank"/>
            </div>

            <Button class="btn primary sort-btn"  type="submit"> Применить </Button>
            <Button class="btn error sort-btn-rest"  type="reset"> &#8635; </Button>
          </form>
</template>

<script>
import { mapGetters,mapActions } from 'vuex';
export default {
	data() {
		return {
            typeList: {task: "Задача",bug: "Ошибка"},
            rankList: {low: "Низкий",medium: "Средний",high: "Высокий"},
            statusList:{opened: "Открыто",inProgress: "В работе",testing: "Тестиоваие",complete: "Сделано"},
            form:{
                type:[],
                query: "" , 
                assignedUsers:[],
                status:[],
                rank:[]
            }
		}
	},

	
	computed: {
	    ...mapGetters("users", ["users", "userlist"]),
		
	},
	mounted() {
		
	},
	methods: {
        ...mapActions("tasks", ["setLoading", "fetchTasks","setFilter"]),
        submitForm(e){
            e.preventDefault();
            this.setFilter({
                "filter": this.form,
                "page": 0,
                "limit": 8,
            })
        },
        resetForm(e){
            e.preventDefault();
            this.fetchTasks({
                "filter": {},
                "page": 0,
                "limit": 8,
            });
        }
	},
}
</script>

<style lang="scss" scoped>
    .sorting_list{
  width: 100%;
  margin-bottom: 20px;
  height: 25px;
  display: flex;
  flex-direction: row;
  margin: 0 -7px 20px -7px;

  & .sorting_item{
    margin: 0 7px;
    height: 100%;
    border-color: #CFCFCF;
    border-radius: 3px;
    width: 100%;
    color: var(--label-text);
    box-sizing: border-box;
    position: relative;
  }


  & .sort-type{
    width: 8%;
  }

  & .sort-name{
    width: 47%;
    padding-left: 5px;
    margin: 2px 0;
    box-shadow: inset 0px 0px 2px 1px #B5B5B5;
    border-radius: 3px;
    height: 24px;
    color: var(--teaxt-color);
  }
  & .sort-name::placeholder {
    color: var(--label-text);
  }

  & .sort-name:hover{
    border: 1px solid #7B61FF;
  }
  & .sort-name:focus{
    box-shadow: 0px 0px 2px 2px rgba(123, 97, 255, 0.5);
  }

  & .sort-autor{
    width: 15%;

  }
  & .sort-status{
    width: 10%;

  }
  & .sort-priority{
    width: 10%;

  }
  & .sort-btn{
      width: 7%;
  }
  & .sort-btn-rest{
    width: 2%;
  }
}

</style>
