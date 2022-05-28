<template>
	<div class="testWrap">
	
		
		
			Ввод {{inputText}}
		<Input placeholder="Some text" v-model="inputText" />
			
		
		<Textarea placeholder="Some text in Area" height="300px" />
		
	</div>
</template>

<script>
import Pagination from '../components/Pagination.vue';
import Header from '../components/Header.vue';
import Button from '../components/Button.vue';
import Input from '../components/Input.vue';
import Select from '../components/Select.vue';
import Dropdown from '../components/Dropdown.vue';
import Textarea from '../components/Textarea.vue';

export default {
    data() {
        return {
            counter: 5,
			someList: ["one","two","three","four"],
			otherList: ["five","six","seven","eight"],
			inputText: "",
			selectData: "",
			dropData: [],
        };
    },
    computed: {
        text() {
            return "count: " + this.counter;
        }
    },
	watch:{
		
	},
    mounted() {
    },
    methods: {
        getDate() {
            return new Date();
        },
    },
    components: { Pagination, Header, Button, Input, Select, Dropdown, Textarea }
}
</script>

<style lang="scss" scoped>
	.testWrap{
		display: flex;
		flex-direction: column;
		height: 300px;
		width: 450px;
		margin: auto;
		margin-top: 50px;
		justify-content: space-between;
	}
</style>
