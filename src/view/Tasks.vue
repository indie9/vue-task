<template>
    <section class="main__wrapper">	
    <Title name="Задачи" />	
    <section class='board'>	
            <div v-if="loading">
                loading
            </div>
            <div v-else> 
                
                <Task v-for="task in tasks.data" :key="task.id" :taskData="task"/>
                
            </div>
        </section>
    </section>
</template>

<script>
import { mapGetters,mapActions } from 'vuex';


export default {
    data() {
        return {};
    },
    computed: {
        ...mapGetters('tasks',["loading", "tasks", "filter"]),
        ...mapGetters('users',["users", "userlist"]),
    },
    watch: {},
    mounted() {
        this.fetchTasks({
                "filter": {},
                "page": 0,
                "limit": 8,
            });
        this.fetchUsers()
        
       
    },
    methods: {
        ...mapActions('tasks',["setLoading", "fetchTasks"]),
        ...mapActions('users',["fetchUsers"]),
    },
   
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