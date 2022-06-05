<template>
<section class="main__wrapper">	
    <Title name="Пользователи" />	
    <section class='board'>	
        <div v-if="!usersLoading">
            <div class="task_list">
                <div class="userItem" v-for="item in Object.keys(userlist) " :key="item.id"  >
                    <router-link :to="{...Profile,params:{id:item}}"  class="lnk"> {{userlist[item]}} </router-link>
                </div>
            </div>
            <Pagination />
        </div>
         <div v-else> loading</div>
    </section>
</section>
</template>

<script>
import { mapGetters,mapActions } from 'vuex';
import Plate from '../components/Plate.vue';
export default {
    data() {
        return {
            Profile: {
				name: 'Profile',
			},  
      	};
    },
    computed: {
        ...mapGetters("tasks", ["loading", "tasks", "filter"]),
        ...mapGetters("users", ["users", "userlist","usersLoading"]),
    },
    methods: {
        ...mapActions("tasks", ["setLoading", "fetchTasks", "setFilter"]),
        ...mapActions("users", ["fetchUsers"]),
    },
    mounted() {
        this.fetchUsers();
    },
}
</script>

<style lang="scss" scoped>
.task_list{
  border-radius: 3px;
  border: solid 1px var(--inner-shadow);
  margin-bottom: auto;
}
.userItem{
  width: 100%;
  height: 80px;
  background-color: #ffffff;
  font-size: 16px;
  padding: 25px;
  box-sizing: border-box;
}
.userItem:nth-child(2n){
  background-color: #F2F2F2;
}
</style>