<template>
  <textarea :placeholder="placeholder" v-model="content"/>
</template>

<script>

export default {
	data() {
		return {
       content: this.value,
		}
	},
  props:{
    "placeholder": String,
		"width": {
			type: String,
			default: "100%"
		},
		"height":{
			type: String,
			default: "100%"
		},
    "value": String,
  },
  watch:{
    content(){
      this.$emit('input', this.content)
    }
  },
}
</script>

<style lang="scss" scoped>
  textarea{
	
    padding-left: 5px;
    margin: 2px 0;
    box-shadow: inset 0px 0px 2px 1px #B5B5B5;
    border-radius: 3px;
    color: $text-color;
  }
  textarea::placeholder {
    color: $label-text;
  }
  textarea:hover{
    border: 1px solid #7B61FF;
  }
  textarea:focus{
    box-shadow: 0px 0px 2px 2px rgba(123, 97, 255, 0.5);
  }
</style>