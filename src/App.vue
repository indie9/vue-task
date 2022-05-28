<template>
	<div class="testWrap">
			<div class="linkbtn">
				<router-link :to="FirstPage" class="lnk"> FirstPage </router-link>
				<router-link :to="FirstPageID" class="lnk"> FirstPageID </router-link>
				<router-link :to="SecondPage" class="lnk"> SecondPage </router-link>
				<router-link :to="ThirdPage" class="lnk"> ThirdPage </router-link>
			</div>
			<button class="btn primary" inner="sub link" @click="subLink" > but sub</button>
			<router-view></router-view>
	</div>
</template>

<script>
import Pagination from './components/Pagination.vue';
import Header from './components/Header.vue';
import Button from './components/Button.vue';
import Input from './components/Input.vue';
import Select from './components/Select.vue';
import Dropdown from './components/Dropdown.vue';
import Textarea from './components/Textarea.vue';

export default {
    data() {
        return {
          counter: 5,
					someList: ["one","two","three","four"],
					otherList: ["five","six","seven","eight"],
					inputText: "",
					selectData: "",
					dropData: [],
					FirstPage: {
						name: 'FirstPage',
						params: {
							id: '123123123'
						},
					},
					FirstPageID: {
						name: 'FirstPage',
						params: {
							id: '456456'
						},
					},
					SecondPage: {
						path: '/SecondPage',
					},
					ThirdPage: {
						path: '/ThirdPage',
					},
					Four: {
						name: 'Four',
					},
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
			this.$router.push({
					name: 'Four',
				})
    },
    methods: {
        getDate() {
            return new Date();
        },
				subLink() {
						this.$router.push({
							name: 'Four',
						})
				}
    },
    components: { Pagination, Header, Button, Input, Select, Dropdown, Textarea }
}
</script>

<style lang="scss" scoped>
	.testWrap{
		display: flex;
		flex-direction: column;
		height: 800px;
		width: 450px;
		margin: auto;
		margin-top: 50px;
		justify-content: space-between;
	}
	.linkbtn{
		display: flex;
		flex-direction: row;
		width: 300px;
		justify-content: space-between;
	}
	.lnk{
		cursor: pointer;
		color: blue;
	}
</style>
