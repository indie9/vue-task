<template>
	<div class="checkbox" >
        <input
					class="custom-checkbox"
					type="checkbox"
					:id="`${item}-checkbox`"
					:value="item"
					v-model="content"
					@change="sayHi"		
            />
        <label :for="`${item}-checkbox`" @click="sayHi">
            <slot></slot>
        </label>
    </div>    
</template>

<script>

export default {
	data() {
		return {
			content: this.valueList,
		}
	},
	model: {
		prop: 'valueList',
		event: 'change'
  	},
	props: {
		item: String,
		valueList: Array
	},
	watch:{
		content(){
			this.$emit('change', this.content)
		},
		valueList(){
			this.content = this.valueList
		}	
	},
	mounted() {
	
	},
	methods: {
		sayHi(e){
			console.log('hello mthfck',e.target)
			//this.content.push(this.item)
		}
	}
	
}
</script>

<style lang="scss" scoped>
	label::before {
		content: 'X';
		display: inline-block;
		margin-right: 0.5em;
		width: 24px;
		height: 24px;
		font-size: 16px;
		line-height: 24px;
		font-weight: 700;
		background: #FFFFFF;
		border: 1px solid $text-color;
		border-radius: 5px;
		padding-left: 5px;
		color: #FFFFFF;
		box-sizing: border-box;
		padding-bottom: 0;

	}
	.checkbox{
	display: flex;
	flex-direction: row-reverse;
	justify-content: flex-end;
	align-items: center;
	height: 24px;
	margin: 2px 0 2px 0;
	border: 1x solid $primary;
	}
	.custom-checkbox{
	position: absolute;
	z-index: -1;
	opacity: 0;
	line-height: 24px;
	margin: 0;
	padding: 0;
	}

	.custom-checkbox+label {
	display: block;
	align-items: center;
	user-select: none;
	width: 100%;
	color: $text-color;
	font-size: 14px;
	margin: 0;
	padding: 0;
	line-height: 24px;
	white-space: nowrap;
	}

	.custom-checkbox:checked+label::before {
		background: #7B61FF;
	}

	.custom-checkbox+label:hover {
	background-color: #E6E1FF;

	}
	.custom-checkbox+label:active {

	background-color: #7B61FF;
	color: white;
	}
</style>