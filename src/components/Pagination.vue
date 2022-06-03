<template>
	<div class="pag_buttons">
		<Button class='btn default' @click="firstPage">Начало</Button>

		<Button class='btn default' @click="prevPage"> Назад</Button>

		<Button class='btn primary' > {{page}} </Button>

		<Button class='btn default' @click="nextPage"> Вперед </Button>

		<Button class='btn default' @click="endPage"> Конец </Button>
		
   		<span class="pagination-info"> Показано 8 из 28</span>

  </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex';

export default {
    data() {
        return {
			
		};
    },
	computed:{
		page(){
			return this.$attrs.value
		},
		...mapGetters("tasks",  ["tasks" ])
	},
	methods: {
		firstPage(){
			this.$emit('input', 0)
		},
		prevPage(){
			this.$emit('input',this.page-1)
		},
		nextPage(){
			this.$emit('input',this.page+1)
		},
		endPage(){
			this.$emit('input', Math.floor(this.tasks.total/8))
		},
	}
}
</script>

<style lang="scss" scoped>
	
	.disabled{
		background-color: #B5B5B5;
	}

	.pag_buttons{
		display: flex;
		flex-direction: row;

		margin-top: 20px;
		justify-content: flex-start;
		width: 100%;
		& .pagination-info{
			margin-left: auto;
			font-size: 14px;
			color: $label-text;
		}
	}
</style>