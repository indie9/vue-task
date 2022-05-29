<template>
  <section class="main__wrapper">	
    <Title name="Имя задачи" />	
    <section class='board'>	
   
        <section class="taskPage">
            <div class="taskPage-data">

                <p class='taskPage-title'>Исполнитель</p>
                <p>assignedId</p>

                <p class='taskPage-title'>Автор задачи</p>
                <p>userId</p>

                <p class='taskPage-title'>Тип запроса</p>
                <p>type</p>

                <p class='taskPage-title'>Приоритет</p>
                <p>rank</p>

                <p class='taskPage-title'>Дата начала</p>
                <p>dateOfCreation</p>

                <p class='taskPage-title'>Дата изменения</p>
                <p>dateOfUpdate</p>

                <p class='taskPage-title'>Затрачено времени</p>

                <p>
                " День "," Час "," Минута "
                  

                </p>

                <button class='btn primary' >Сделать запись о работе</button>

            </div>

            <div class="taskPage-info">
                <p class='taskPage-title'>Описание</p>
                <p  class="taskPage-info-text">Task id :  {{id}}</p>
            </div>

            <form class="taskPage-comments" >
                <p class='taskPage-title'>Коментарии </p>
                <textarea
                class='taskPage-textArea'
                
                placeholder="Текст комментария"
                required
                />
                <button type="submit" class='btn success'> Добавить комментарий</button>
                
                <div class="comments-list">
                  
                    <div class="comment-item" key={item.id} >
                      <p class='comment-title'> <button type="button" class='btn error'>Удалить</button></p>
                      <p class='comment-body'>{item.text}</p>
                    </div>
                

                </div>
                

            </form>
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
        id: String
    }
}
</script>

<style lang="scss" scoped>
.taskPage{
  background-color: #ffffff;
  height: 100%;
  height:  100%;
  display: flex;
  flex-direction: row;

  &-data{
    width: 26%;
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    & button{
      max-width: 250px;
    }
  }
  &-info{
    display: flex;
    flex-direction: column;
    width: 35%;
    padding: 0 20px;
    border-right: #B5B5B5 solid 2px;
    border-left: #B5B5B5 solid 2px;
    &-text{
    overflow-y: auto;
    }
  }
  &-comments{
    width: 40%;
    padding: 0 20px;
  }
  &-title{
    color: var(--label-text);
    margin: 0 0 5px 0;
  }
  &-textArea{
    width: 100%;
    height: 100px;
    background: #FFFFFF;
    box-shadow: inset 0px 0px 2px 1px #B5B5B5;
    border-radius: 3px;
    padding: 5px;
  }
  &-textArea::placeholder{
    color: var(--label-text);
  }
  &-textArea:hover{
    border: 1px solid #7B61FF;
    box-shadow: inset 0px 0px 2px 1px #B5B5B5;
  }
  &-textArea:focus{
    border: 1px solid #7B61FF;
    box-shadow: 0px 0px 2px 2px rgba(123, 97, 255, 0.5);
  }
  & p{
    margin: 0 0 20px 0;
  }
  & .comments-list{
    height: 60vh;
    overflow-y: auto;
    & .comment-item{
      display: flex;
      flex-direction: column;
      margin: 20px 0 20px 0;
    }
    & .comment-title{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      font-size: 16px;
      color: $label-text;
      margin-bottom: 5px;
    }
    & .comment-body{
      font-size: 16px;
      color: $text-color;
    }
  }
}

</style>