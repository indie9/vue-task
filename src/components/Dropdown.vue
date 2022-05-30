<template>
	<div class="multiselect">
        <div class="multiselect-selectBox" @click="showCheckboxes">
          <select>
            <option disabled selected>{{checkedInput}}</option>
          </select>
          <div class="multiselect-overSelect"></div>
        </div>
        <div class="checkboxes" style="display: none" >
            <Checkbox v-for="item in list" :key="item" @change="check" v-model="checkedInput" :item="item"> {{item}} </Checkbox>
        </div>
      </div>
</template>

<script>
import Checkbox from './Checkbox.vue';

export default {
    data() {
        return {
            count: 0,
            checkedInput: []
        };
    },
    props: {
        "list": Array,
        "inner": String,
    },
    model: {
        prop: "checkedData",
        event: "changeDrop"
    },
    watch: {
        checkedInput(val) {
            this.$emit("changeDrop", val);
        }
    },
    methods: {
		check(){
			console.log(this.checkedInput);
			this.$emit("changeDrop", val);
		},
        showCheckboxes() {
            let checkbox = document.getElementsByClassName(`checkboxes`)[0];
            let multisel = document.getElementsByClassName(`multiselect`)[0];
            if (checkbox.style.display === "none") {
                multisel.classList.toggle("active-checkbox");
                checkbox.style.display = "flex";
            }
            else {
                multisel.classList.toggle("active-checkbox");
                checkbox.style.display = "none";
            }
        },
    },
    components: { Checkbox }
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
	display: none;
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

</style>