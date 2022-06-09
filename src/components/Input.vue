<template>
  <input type="text" :placeholder="placeholder" v-model="contentModel" />
</template>

<script>
export default {
  data() {
    return {
      content: this.value,
    };
  },
  computed: {
    contentModel: {
      get() {
        return this.content;
      },
      set(val) {
        this.content = val;
        this.$emit("input", val);
      },
    },
  },
  props: {
    placeholder: String,
    value: String,
  },
  watch: {
    value() {
      this.content = this.value;
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  padding-left: 5px;
  margin: 2px 0;
  box-shadow: inset 0px 0px 2px 1px #b5b5b5;
  border-radius: 3px;
  height: 24px;
  min-height: 24px;
  color: $text-color;
}
input::placeholder {
  color: $label-text;
}
input:hover {
  border: 1px solid #7b61ff;
}
input:focus {
  box-shadow: 0px 0px 2px 2px rgba(123, 97, 255, 0.5);
}
</style>
