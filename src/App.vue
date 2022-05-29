<template>
			<div id="root">
					<Header />
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
import Header1 from './components/Header.vue';
import Title from './components/Title.vue';

export default {
    data() {
        return {
          counter: 5,
					someList: ["one","two","three","four"],
					otherList: ["five","six","seven","eight"],
					inputText: "",
					selectData: "",
					dropData: [],
					Tasks: {
						name: 'Tasks',
					},
					Users: {
						name: 'Users',
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
    components: { Pagination, Header, Button, Input, Select, Dropdown, Textarea, Header1, Title }
}
</script>

<style lang="scss" scoped>


</style>
