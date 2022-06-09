<template>
  <textarea :placeholder="placeholder" v-model="contentModel" />
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
textarea {
  padding: 5px;
  margin: 2px 0;
  box-shadow: inset 0px 0px 2px 1px #b5b5b5;
  border-radius: 3px;
  color: $text-color;
  height: 100%;
  width: 100%;
}
textarea::placeholder {
  color: $label-text;
}
textarea:hover {
  border: 1px solid #7b61ff;
}
textarea:focus {
  box-shadow: 0px 0px 2px 2px rgba(123, 97, 255, 0.5);
}
</style>
