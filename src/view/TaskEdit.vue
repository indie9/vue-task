<template>
 <section class="main__wrapper">	
    <Title name="Редактирование" />	
    <section class='board'>	
	    <form class="board__form" id="taskFormID">
            <div class="board__form-data">
                  <label for="user" class='taskPage-title'>Исполнитель</label>

                  <select name="assignedId" >
                    <option disabled selected>Исполнитель</option>
                    <option disabled >Исполнитель</option>
                    <option disabled >Исполнитель</option>
                    <option disabled >Исполнитель</option>

                  </select>

                  <label for="type" class='taskPage-title'>Тип</label>

                  <select name="type" >
                    <option disabled selected>Тип</option>
                    <option > Задача</option>
                    <option > Ошибка</option>
                  </select>


                  <label for="rank" class='taskPage-title'>Приоритет</label>

                  <select name="rank" >
                    <option disabled selected>Приоритет</option>
                    <option > Низкий</option>
                    <option > Средний</option>
                    <option > Высокий</option>

                  </select>


            </div>
            <div class="board__form-info">
                  <label for="title" class='taskPage-title'>Название</label>
                  <input
                    type="text"
                    class="board__input board__input--theme"
                    name="title"
                    required
                  />
                  <label htmlFor="description" class='taskPage-title'>Задача</label>
                  <textarea
                    type="text"
                    class="board__input board__input--theme"
                    name="description"
                    required
                  > </textarea>

            </div>
            <div class="board__form-comments"></div>
          </form>
   
    </section>
  </section>
</template>

<script>

export default {
    data() {
        return {  
      	};
    },
}
</script>

<style lang="scss" scoped>
.board__form{
    display: flex;
    flex-direction: row;
    height: 100%;
    & select{
      padding: 2px;
      height: 24px;
      border: 1px solid #7B61FF;
      box-sizing: border-box;
      box-shadow: inset 0px 0px 2px 1px #B5B5B5;
      border-radius: 3px;
      margin: 5px 0 20px 0;
    }

    & input{
      height: 24px;
      border: 1px solid #7B61FF;
      box-sizing: border-box;
      box-shadow: inset 0px 0px 2px 1px #B5B5B5;
      border-radius: 3px;
      padding: 5px;
      margin: 5px 0 20px 0;
    }
    & textarea{
      height: 100%;
      border: 1px solid #7B61FF;
      box-sizing: border-box;
      box-shadow: inset 0px 0px 2px 1px #B5B5B5;
      border-radius: 3px;
      padding: 5px;
      margin: 5px 0 0 0;
    }

    &-data{
      width: 26%;
      height: 100%;
      display: flex;
      flex-direction: column;
      padding: 0 20px;
    }
    &-info{
      width: 35%;
      height: 100%;
      display: flex;
      flex-direction: column;
      padding: 0 20px;
      border-right: #B5B5B5 solid 2px;
      border-left: #B5B5B5 solid 2px;
    }
    &-comments{
      width: 40%;
      height: 100%;
      padding: 0 20px;
    }
}

</style>