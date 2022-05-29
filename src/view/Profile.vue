<template>
	
    <section class="main__wrapper">	
        <Title name="Имя пользователя" />	
        <section class='board'>					
            <section class="board__profile" >
                <article class="board__profile-bio" >
                    <img class="avatar" src='https://cdn-icons-png.flaticon.com/512/18/18601.png' alt="avatar" width="186" height="186" />

                    <p class="title">О себе</p>

                    <p class="profile-info">
                    {{id}}
                    </p>

                </article>
                <article class="board__profile-tasks" >
                    <p class="title"> Задачи </p>
                    TaskBoard 
                </article>
            </section>
        </section>
    </section>
</template>

<script>

export default {
    data() {
        return {  
      	};
    },
    props: {
        id: String,
    }
}
</script>

<style lang="scss" scoped>
.board__profile{
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    
    &-bio{
        width: 33%;
        height: 100%;
        padding-right: 20px;
        border-right: #B5B5B5 solid 2px;
        display: flex;
        flex-direction: column;
        & .avatar{
            border-radius: 50%;
            border:  solid 1px var(--primary);
        }
        & .title{
            color: #CCCCCC;
            font-size: 16px;
            margin: 20px 0 5px 0;
        }
        & .profile-info{
            white-space:pre-wrap;
            color: #333333;
            color: var(--text-color);
            line-height: 19px;
        }   
    }
    &-tasks{
        width: 66%;
        padding-left: 20px;
        display: flex;
        flex-direction: column;
        & .title{
            color: #CCCCCC;
            font-size: 16px;
            margin: 0px 0 10px 0;        
        }
        & .task_list{         
            height: 100%;
            & .task_name{
                width: 70%;
            }
        }
    }
}
</style>
