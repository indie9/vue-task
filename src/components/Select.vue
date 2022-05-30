<template>
	<div class="selectMultiselect">
        <div class="selectMultiselect-selectBox" @click="showselectCheckboxes">
          <select>
            <option disabled selected>{{selectIner}}</option>
          </select>
          <div class="selectMultiselect-overSelect"></div>
        </div>
        <div class="selectCheckboxes" style="display: none" >
            <div class="checkbox" v-for="item in list" :key="item">
                <input
                  class="custom-checkbox"
                  type="radio"
                  :name="inner"
                  :id="item"
				  :value="item" 
				  v-model="selectedInput"
                />
                <label :for="item" :name="item">
                  {{item}}
                </label>
            </div>    
        </div>
      </div>
</template>

<script>

export default {
	data() {
		return {
			selectIner:"",
			selectedInput: ""
		}
	},
	props: {
		"list": Array,
		"inner": String,
	},
	model: {
		prop: 'selectData',
		event: 'changeSelect'
	},
 	mounted() {
    	this.selectIner = this.inner; 
  	},
	watch:{
		selectedInput(val){
			this.$emit('changeSelect', val);
		}
	},
  	methods: {
    	showselectCheckboxes() {
			let checkbox = document.getElementsByClassName(`selectCheckboxes`)[0];
			let multisel = document.getElementsByClassName(`selectMultiselect`)[0];

			if (checkbox.style.display === "none"){
				multisel.classList.toggle('active-checkbox');
				checkbox.style.display = "flex"
			} else {
				multisel.classList.toggle('active-checkbox');
				checkbox.style.display = "none";
			}
		},
    changeInner(e) {
      this.selectIner = e.target.innerHTML
    },
  }
}
</script>

<style lang="scss" scoped>


.selectMultiselect {
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
	.selectCheckboxes {
	display: none;
	flex-direction: column;
	background-color: white;
	width: 100%;

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
.custom-checkbox+label{
    width:100%;
    line-height: 24px;
    padding-left: 10px;
    
}
	

	.custom-checkbox:checked+label{
		background: #7B61FF;
		color: white;
	}

	.custom-checkbox+label:hover {
		background-color: #E6E1FF;
		color: black;

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
	.selectMultiselect:hover {
	border: 1px solid $primary;
	box-shadow: 0px 0px 2px 2px rgba(123, 97, 255, 0.5);
	border-radius: 3px;
	}
	.selectMultiselect:hover > .selectMultiselect-selectBox select{
	border: 1px solid $primary;
	border-radius: 3px;
	color: var(--text-color);
	font-weight: 400;
	}

</style>