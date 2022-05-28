<template>
	<div class="testWrap">
		<div style="display: flex;">
			<Button class="btn primary" inner="button" />
			<Button class="btn error" inner="button" />
			<Button class="btn default" inner="button" />
			<Button class="btn success" inner="button" />
		</div>
		<Pagination />
		
		
		<router-view> </router-view>
		{{id}}
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
import Button1 from '../components/Button.vue';

export default {
    data() {
        return {
            counter: 5,
						someList: ["one","two","three","four"],
						otherList: ["five","six","seven","eight"],
						inputText: "",
						selectData: "",
						dropData: [],
						ThirdPage: {
							path: '/ThirdPage',
						},
						Four: {
							name: 'Four',
						},
      	};
    },
		props:{ 
			id: String
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
				subLink() {
						this.$router.push(this.Four)
				}
    },
    components: { Pagination, Header, Button, Input, Select, Dropdown, Textarea, Button1 }
}
</script>

<style lang="scss" scoped>
	.testWrap{
		background-color: $primary;
		display: flex;
		flex-direction: column;
		height: 300px;
		width: 450px;
		margin: auto;
		margin-top: 50px;
		justify-content: space-between;
	}
</style>
