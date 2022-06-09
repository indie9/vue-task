<template>
  <section class="main__wrapper">
    <Title> Пользователи </Title>
    <section class="board" v-if="!usersLoading">
      <div class="task_list">
        <div class="userItem" v-for="item in users.data" :key="item.id">
          <router-link
            :to="{ ...Profile, params: { id: item.id } }"
            class="lnk"
          >
            {{ userlist[item.id] }}
          </router-link>
        </div>
      </div>
      <Pagination v-model="page" :total="users.total" />
    </section>
    <div v-else>loading</div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      Profile: {
        name: "Profile",
      },
      page: 0,
    };
  },
  watch: {
    page(val) {
      this.setUsersFilter({
        filter: this.usersFilter.filter,
        page: val,
        limit: 8,
      });
    },
  },
  computed: {
    ...mapGetters("tasks", ["loading", "tasks", "filter"]),
    ...mapGetters("users", [
      "users",
      "userlist",
      "usersLoading",
      "usersFilter",
    ]),
  },
  methods: {
    ...mapActions("tasks", ["setLoading", "fetchTasks", "setFilter"]),
    ...mapActions("users", ["fetchUsers", "fetchPageUsers", "setUsersFilter"]),
  },
  mounted() {
    this.fetchUsers();
    console.log(this.usersFilter);
    this.fetchPageUsers({
      filter: {},
      page: 0,
      limit: 8,
    });
  },
};
</script>

<style lang="scss" scoped>
.task_list {
  border-radius: 3px;
  border: solid 1px var(--inner-shadow);
  margin-bottom: auto;
}
.userItem {
  width: 100%;
  height: 80px;
  background-color: #ffffff;
  font-size: 16px;
  padding: 25px;
  box-sizing: border-box;
}
.userItem:nth-child(2n) {
  background-color: #f2f2f2;
}
.task_list {
  border-radius: 3px;
  border: solid 1px $inner-shadow;
  margin-bottom: auto;
}
</style>
