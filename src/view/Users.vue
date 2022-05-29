<template>
<section class="main__wrapper">	
    <Title name="Пользователи" />	
    <section class='board'>	
        <div>
            <div class="task_list">
                <div class="userItem" v-for="item in usersData" :key="item.id"  >
                    <router-link :to="{...Profile,params:{id:item.id}}"  class="lnk"> {{item.name}} </router-link>
                </div>
            </div>
            <Pagination />
        </div>
    
    </section>
</section>
</template>

<script>

export default {
    data() {
        return {
            usersData: [
            {
                id: "1111111",
                name: "Вупсень"
            },
            {
                id: "2222222",
                name: "Пупсень"
            },
            {
                id: "3333333",
                name: "Лунтик"
            },
            ],
            Profile: {
				name: 'Profile',
			},  
      	};
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