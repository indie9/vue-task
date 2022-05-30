<template>
    <section class="main__wrapper">	
    <Title name="Задачи" />	
    <section class='board'>	

            <div> 
                <Task v-for="item in tasksList" :key="item.id" :taskData="item" />
                <Dropdown :list="otherList" inner="listname"/>
                <Checkbox item="tort" @change="chek">totek</Checkbox>
            </div>
        </section>
    </section>
</template>

<script>
import Task from '../components/Task.vue';
import Button from '../components/Button.vue';
import Dropdown from '../components/Dropdown.vue';
import Checkbox from '../components/Checkbox.vue';

export default {
    data() {
        return {
            tasksList: [
                {
                    id:"111111",
                    text: "1task1"
                },
                {
                    id:"222222",
                    text: "2task2"
                },
                {
                    id:"333333",
                    text: "3task3"
                },
            ],
            otherList: ["five","six","seven","eight"],
        };
    },
    components: { Task, Button, Dropdown, Checkbox },
    methods:{
        chek(e){
            e.target.checked
            ?
            console.log(e.target.value)
            :
            console.log("ryr")
        }
    }
    
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