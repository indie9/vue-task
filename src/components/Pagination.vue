<template>
	<div class="pag_buttons">
		<Button class='btn default' inner="Начало" />

		<Button class='btn default' inner="Назад" />

		<Button class='btn primary' inner="5" />

		<Button class='btn default' inner="Вперед" />

		<Button class='btn default' inner="Конец" />
		
   		<span class="pagination-info"> Показано 8 из 28</span>

  </div>
</template>

<script>
import Button from './Button.vue'

export default {
    data() {
        return {};
    },
    components: { Button }
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
			color: var(--label-text);
		}
	}
</style>