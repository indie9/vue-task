<template>
    <section class="main__wrapper">	
        <Title >
            
            Задачи 
            
            <template v-slot:subTitle>
              <Plate class="inProgress" > Открыто </Plate>
            </template>
            <template v-slot:buttons>
               <router-link to="/" > <Button class="btn primary"> Добавить</Button> </router-link>
            </template>
        </Title>	

        <div v-if="loading">
            loading
        </div>

        <section class='board' v-else>	     
            <Sorting />
            <Task v-for="task in tasks.data" :key="task.id" :taskData="task"/>
            <Pagination v-model="page"/>
        </section>

    </section>
</template>

<script>
import { mapGetters,mapActions } from 'vuex';
import Plate from '../components/Plate.vue';



export default {
    data() {
        return {
            page: 0,
        };
    },
    computed: {
        ...mapGetters("tasks", ["loading", "tasks", "filter"]),
        ...mapGetters("users", ["users", "userlist"]),
    },
    watch: {
        page(val) {
            console.log("page", val);
            this.setFilter({
                "filter": this.filter.filter,
                "page": val,
                "limit": 8,
            });
        },
    },
    mounted() {
        this.page = this.filter.page;
        this.fetchTasks({
            "filter": this.filter.filter,
            "page": this.filter.page,
            "limit": 8,
        });
        this.fetchUsers();
    },
    methods: {
        ...mapActions("tasks", ["setLoading", "fetchTasks", "setFilter"]),
        ...mapActions("users", ["fetchUsers"]),
    },
    components: { Plate }
}
</script>

<style lang="scss" scoped>
.main__wrapper{
  width: 100%;
  height: 93vh;
  background-color: #E3E3E3;
  padding: 30px 80px 0px 80px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.board{
  background-color: #ffffff;
  height: 82vh;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 3px #B5B5B5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>