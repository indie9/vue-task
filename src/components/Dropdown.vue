<template>
	<div class="multiselect" :class="{'active-checkbox': isActive}">
        <div class="multiselect-selectBox" @click="show">
          <select :class="{'multiselec-active': isActive}">
            <option disabled selected> Выбрано: {{checkedInput.length}}</option>
          </select> 
          <div class="multiselect-overSelect"></div>
        </div>
        <div class="checkboxes" v-show="isActive" >
            <Checkbox v-for="item in Object.keys(list)" :key="item" @change="check" v-model="checkedInput" :item="item"> {{list[item]}} </Checkbox>
        </div>
      </div>
</template>

<script>


export default {
    data() {
        return {
            count: 0,
            checkedInput: [],
			isActive: false,
        };
    },
	computed: {
	},
    props: {
        "list": Object,
        "inner": String,
		id: String,
    },
    watch: {
        checkedInput(val) {
            this.$emit("input", val);
        }
    },
    methods: {
		check(ev){
			ev.target.checked 
			?
			this.checkedInput.push(ev.target.value)
			:
			this.checkedInput = this.checkedInput.filter(item => item != ev.target.value)
		},
		show() {
			
			this.isActive=!this.isActive;
		},
    },
    
}
</script>

<style lang="scss" scoped>
	
.multiselect {
	width: 100%;
	overflow: hidden;
	padding: 2px 0;
	box-sizing: content-box;
	background-color: #fff;

	&-selectBox {
		position: relative;
	}

	&-selectBox select {
		display: block;
		width: 98%;
		margin: auto;
		height: 24px;
		box-shadow: inset 0px 0px 2px 1px #B5B5B5;
		border-radius: 3px;
		color: #CCCCCC
	}

	&-overSelect {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
	}
	}
	.checkboxes {

		display: flex;
		flex-direction: column;
		background-color: white;
		width: 98%;
		margin: auto;
		padding: 5px;
		
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



	.active-checkbox{

	border: 1px solid $primary;
	box-shadow: 0px 0px 2px 2px rgba(123, 97, 255, 0.5);
	border-radius: 3px;
	}
	.multiselect:hover {
	border: 1px solid $primary;
	box-shadow: 0px 0px 2px 2px rgba(123, 97, 255, 0.5);
	border-radius: 3px;
	}
	.multiselect:hover > .multiselect-selectBox select{
	border: 1px solid $primary;
	border-radius: 3px;
	color: $text-color;
	font-weight: 400;
	}
	.multiselec-active{
		border: 1px solid $primary;
		border-radius: 3px;
		color: $text-color;
		font-weight: 400;
	}

</style>