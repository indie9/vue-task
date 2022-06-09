<template>
  <div class="pag_buttons">
    <Button class="btn default" @click="firstPage" :disabled="page === 0"
      >Начало</Button
    >

    <Button class="btn default" @click="prevPage" :disabled="page === 0">
      Назад</Button
    >

    <Button
      class="btn default"
      :class="{ primary: item == page + 1 }"
      v-for="item in pageList"
      :key="`${item}-page-btn`"
      @click="changePage(item)"
    >
      {{ item }}
    </Button>

    <Button
      class="btn default"
      @click="nextPage"
      :disabled="
        Math.floor(total / 8) < page + 1 || total - (page + 1) * 8 == 0
      "
    >
      Вперед
    </Button>

    <Button
      class="btn default"
      @click="endPage"
      :disabled="
        Math.floor(total / 8) < page + 1 || total - (page + 1) * 8 == 0
      "
    >
      Конец
    </Button>

    <span class="pagination-info">
      Показано {{ page * 8 + 1 }}-{{
        page * 8 + 8 > total ? total : page * 8 + 8
      }}
      из {{ total }}</span
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: this.value,
    };
  },
  computed: {
    pageList() {
      let pageList = [];
      for (let i = 0; i < Math.ceil(this.total / 8); i++) {
        pageList.push(i + 1);
      }
      return pageList;
    },
  },
  props: {
    value: Number,
    total: Number,
  },
  methods: {
    firstPage() {
      this.$emit("input", 0);
    },
    prevPage() {
      this.$emit("input", this.page - 1);
    },
    nextPage() {
      this.$emit("input", this.page + 1);
    },
    endPage() {
      this.$emit(
        "input",
        this.total % 8 == 0
          ? Math.floor(this.total / 8) - 1
          : Math.floor(this.total / 8)
      );
    },
    changePage(page) {
      this.$emit("input", page - 1);
    },
  },
};
</script>

<style lang="scss" scoped>
.disabled {
  background-color: #b5b5b5;
}

.pag_buttons {
  display: flex;
  flex-direction: row;

  margin-top: 20px;
  justify-content: flex-start;
  width: 100%;
  & .pagination-info {
    margin-left: auto;
    font-size: 14px;
    color: $label-text;
  }
}
</style>
