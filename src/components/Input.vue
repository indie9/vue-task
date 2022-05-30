<template>
  <input :placeholder="placeholder" v-model="inputValue"/>
</template>

<script>

export default {
	data() {
		return {
      inputValue: ""
		}
	},
  props:{
    "placeholder": String,
  },
  model: {
		prop: 'inputText',
		event: 'onInput'
	},
  watch:{
    inputValue(val) {
			this.$emit('onInput', val)
		},
  },
  methods:{
    
  },
  mounted() {
    this.inputValue = this.inputText
  },
}
</script>

<style lang="scss" scoped>
  input{
    padding-left: 5px;
    margin: 2px 0;
    box-shadow: inset 0px 0px 2px 1px #B5B5B5;
    border-radius: 3px;
    height: 24px;
    color: $text-color;
  }
  input::placeholder {
    color: $label-text;
  }
  input:hover{
    border: 1px solid #7B61FF;
  }
  input:focus{
    box-shadow: 0px 0px 2px 2px rgba(123, 97, 255, 0.5);
  }
</style>