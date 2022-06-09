<template>
  <button v-on="$listeners">
    <slot> </slot>
  </button>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.btn {
  width: fit-content;
  height: 24px;
  border: 1px solid #333333;
  box-sizing: border-box;
  border-radius: 5px;
  display: block;
  text-decoration: none;
  padding: 0 10px;
  margin: 0 5px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}

.default {
  background-color: #f4f4f4;
}
.default:hover {
  background-color: #e1e1e1;
}
.default:active {
  background-color: #cfcfcf;
}

.primary {
  background-color: #7b61ff;
  color: white;
  border: none;
}
.primary:hover {
  background-color: #8a73ff;
}
.primary:active {
  background-color: #715be3;
}

.success {
  background-color: #5ee48c;
  color: white;
  border: none;
}
.success:hover {
  background-color: #80f0a6;
}
.success:active {
  background-color: #4bd379;
}

.error {
  background-color: #ff6161;
  color: white;
  border: none;
}
.error:hover {
  background-color: #ff8080;
}
.error:active {
  background-color: #d65d5d;
}

.btn:disabled {
  background-color: #b5b5b5;
  color: $label-text;
}
</style>
