<template>
    <section class="main__wrapper">	
    <Title name="Задачи" />	
    <section class='board'>	
            <div v-if="load">
                loading
            </div>
            <div v-else> 
                 
                <Task v-for="item in tasksList" :key="item.id" :taskData="item" />
                Выбрао {{dropData}} 
                <Dropdown :list="otherList" inner="listname"  v-model="dropData"/>
                <Select :list="someList" groupName="names" > </Select>
                <Button @click="chngLoading" class="btn primary"> change </Button>
                {{loading}}
                {{events}}
                
            </div>
        </section>
    </section>
</template>

<script>
import { mapGetters,mapActions } from 'vuex';
import Button from '../components/Button.vue';
export default {
    data() {
        return {
            tasksList: [
                {
                    id: "111111",
                    text: "1task1"
                },
                {
                    id: "222222",
                    text: "2task2"
                },
                {
                    id: "333333",
                    text: "3task3"
                },
            ],
            otherList: ["five", "six", "seven", "eight"],
            someList: ["one", "two", "three", "four"],
            dropData: [],
            load: true,
        };
    },
    computed: {
        ...mapGetters(["loading","events"]), 
    },
    watch:{
        events() {
            this.load = false
           
        }
    },
    mounted() {
        this.fetchEvents();
        
    },
    methods:{
        ...mapActions(["setLoading","fetchEvents"]),
        chngLoading() {
           this.setLoading(!this.loading)
        }
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