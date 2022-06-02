<template>
	<div class="dropdown" >
        <p class="dropdown-btn" @click="drop" >
            <span> &#9776;</span>
        </p>
        <div class="dropdown-content" v-show="isActive"  >
            <slot></slot>
        </div>
    </div>
</template>

<script>

export default {
	data() {
		return {
			isActive: false,
		}
	},
    methods: {
        drop(){
            this.isActive = !this.isActive;
        }
    }
	
}
</script>
    
<style lang="scss" scoped>
 .dropdown-content {
        position: absolute;
        left: -100px;
        top:  22px;
        overflow: hidden;
        width: 120px;
        z-index: 1;
        background-color: white;
        box-shadow: 0px 0px 2px 2px rgba(123, 97, 255, 0.5);
        border-radius: 5px;
        font-size: 12px;
        line-height: 14px;
        &-item {
          color: $text-color;
          font-size: 12px;
          padding: 0 5px;
          background-color: white;
          text-decoration: none;
          text-align: left;
          display: block;
          font-size: 12px;
          line-height: 20px;
          width: 100%;
        }

        &-item:hover {background-color: #E6E1FF}
        &-item:active {
          color: white;
          background-color: #7B61FF}
      }
        .dropdown {
        position: relative;
        display: inline-block;
      }

       .dropdown-btn{
        color: $primary;
        font-weight: 600;
        width: 20px;
        height: 20px;
        border-radius: 3px;
        text-align: center;
      }
       .dropdown-btn:hover,
       .dropdown-active{
        background-color: $primary;
        color: white;
      }
</style>