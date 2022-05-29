<template>
	 <article class="task" >

      <div class="task_inner">

          <div class="task_inner-item task_type">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 5C0 2.23858 2.23858 0 5 0H19C21.7614 0 24 2.23858 24 5V19C24 21.7614 21.7614 24 19 24H5C2.23858 24 0 21.7614 0 19V5Z" fill="#00D1FF"/>
                <circle cx="12" cy="12" r="6" fill="white"/>
              </svg>
          </div>

          <div class="task_inner-item task_name">            
              <router-link :to="TaskPage"  class="lnk"> {{taskData.text}} </router-link>      
          </div>

   
          <div  class="task_inner-item task_autor">
           	{{taskData.id}}
          </div>
    
          <div class="task_inner-item task_status" >
            <div class="task_status-btn status-opened">{status}</div>
          </div>

          <div class="task_inner-item task_priority priority-low">{rank}</div>

   
          <div class="task_btn">
              <router-link :to="TaskEdit"  class="lnk"> Редактировать </router-link> 
          </div>
          
      </div>

    </article>
</template>

<script>

export default {
    data() {
        return { 
					TaskPage: {
						name: 'TaskPage',
            params: {
              id: this.taskData.id
            }
					},
					TaskEdit: {
						name: 'TaskEdit',
             params: {
              id: this.taskData.id
            }
					}, 
      	};
    },
    props: {
      taskData: Object,
    }
}
</script>

<style lang="scss" scoped>

.task:nth-child(2n){
  background-color: #F2F2F2;
}


.task{
  width: 100%;
  height: 8.5vh;
  &_inner{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin:0 -7px;

    &-item{
      margin: 0 7px;
      box-sizing: border-box;
    }

    .task_type{
      width: 8%;
      display: flex;
      justify-content: center;
      align-items: center;

    }

    .task_name{
      width: 48%;
      display: flex;
      align-items: center;
      overflow: hidden;
      white-space: nowrap;

      & a{
        font-size: 16px;
        color: var(--text-color);
        text-decoration: none;
      }
    }
    .task_name:hover >  a{
      color: var(--primary);
      border-bottom: solid 2px var(--primary);
    }
    .task_autor{
      width: 15%;
      display: flex;
      align-items: center;
    }
    .task_status{
      width: 10%;
      display: flex;
      align-items: center;
    }

    .task_status-btn{
      height: 20px;
      border: solid 1px black;
      border-radius: 3px;
      padding: 0 5px;
    }

    .task_priority{
      width: 10%;
      display: flex;
      align-items: center;
      padding-left: 15px;
      background-repeat: no-repeat;
      background-position-x: 0;
      background-position-y: center;
    }

    .task_btn{
      width: 10%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      & .dropdown {
        position: relative;
        display: inline-block;
      }

      & .dropdown-btn{
        color: var(--primary);
        font-weight: 600;
        width: 20px;
        height: 20px;
        border-radius: 3px;
        text-align: center;
      }
      & .dropdown-btn:hover,
      & .dropdown-active{
        background-color: var(--primary);
        color: white;
      }

      & .dropdown-content {
        display: none;
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
          color: var(--text-color);
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
      & .visable{
        display: block;
      }
    }
  }
}


</style>