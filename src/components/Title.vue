
<template>
	<div class="title">
    <div class="sub-title">		
			<span class="name"> {{name}} </span>	
		</div>	
	</div>
</template>

<script>

export default {
	data() {
		return {
			
		}
	},
    props:{
        "name": String,
    }
}
</script>

<style lang="scss" scoped>
.title{
  height: 28px;
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & .sub-title{

    display: flex;
    flex-direction: row;
    align-items: center;
    & .name{
      font-weight: 300;
      font-size: 24px;
      line-height: 28px;
      color: $text-color;
      overflow: hidden;
      white-space: nowrap;
      max-width: 600px;
    }

  }
  & .buttons{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
}

</style>