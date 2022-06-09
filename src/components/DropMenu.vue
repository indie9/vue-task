<template>
    <div class="dropdown" v-click-outside="hide">
      <div @click="drop" >
        <slot name="link"></slot>
      </div>
      <div class="dropdown-content" v-show="isActive" @click="hide" >
        <slot></slot>
      </div>
    </div>



        
    
</template>

<script>
import ClickOutside from 'vue-click-outside'

export default {
	data() {
		return {
			isActive: false,
      
		}
	},
  methods: {
      drop(){
        this.isActive = !this.isActive;
      },
      hide() {
				this.isActive=false;
			},
  },
  directives: {
    ClickOutside
  }
	
}
</script>
    
<style lang="scss" scoped>
 .dropdown-content {
        position: absolute;
        
        right: 5%;
        top:  110%;
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

       
</style>