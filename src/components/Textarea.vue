<template>
  <textarea :placeholder="placeholder" :width="width" :height="height"/>
</template>

<script>

export default {
	data() {
		return {
      
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
    }
}
</script>

<style lang="scss" scoped>
  textarea{
	height: 300px;
    padding-left: 5px;
    margin: 2px 0;
    box-shadow: inset 0px 0px 2px 1px #B5B5B5;
    border-radius: 3px;
    color: var(--teaxt-color);
  }
  textarea::placeholder {
    color: var(--label-text);
  }
  textarea:hover{
    border: 1px solid #7B61FF;
  }
  textarea:focus{
    box-shadow: 0px 0px 2px 2px rgba(123, 97, 255, 0.5);
  }
</style>