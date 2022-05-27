<template>
	<button > {{inner}} </button>
</template>

<script>

export default {
	data() {
		return {
			
		}
	},
    props:{
        "inner": String,
    }
}
</script>

<style lang="scss" scoped>
.btn{
  width:fit-content;
  height: 24px;
  border: 1px solid #333333;
  box-sizing: border-box;
  border-radius: 5px;
  display: block ;
  text-decoration: none;
  padding: 0 10px;
  margin: 0 5px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}

.default{
  background-color: #F4F4F4;
}
.default:hover{
  background-color: #E1E1E1;
}
.default:active{
  background-color: #CFCFCF;
}

.primary{
  background-color: #7B61FF;
  color: white;
  border: none;
}
.primary:hover{
  background-color: #8A73FF;
}
.primary:active{
  background-color: #715BE3;
}

.success{
  background-color: #5EE48C;
  color: white;
  border: none;
}
.success:hover{
  background-color: #80F0A6;
}
.success:active{
  background-color: #4BD379;
}

.error{
  background-color: #FF6161;
  color: white;
  border: none;
}
.error:hover{
  background-color: #FF8080;
}
.error:active{
  background-color: #D65D5D;
}

.disabled{
  background-color: #B5B5B5;
}


</style>