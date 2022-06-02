<template>
	<div class="plate" > 
        <slot> </slot> 
    </div>
</template>

<script>

export default {
	data() {
		return {
			
		}
	}
  
}
</script>

<style lang="scss" scoped>
.plate{
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

.opened{
  background-color: #CCCCCC;
}
.inProgress{
  background-color: #FFC700;
}
.testing{
  background-color: #FFC700;
}
.complete {
  background-color: #4BD379;
}

.low{
  color: #3CA961;
  //background-image: url('~@/assets/icons/hightpr.png') format('png');
}
.medium{
  color: #E9B500;
} 
.high{
  color: #D14343;
 
}

</style>