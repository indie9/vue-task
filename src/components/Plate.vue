<template>
  <div class="plate">
    <slot> </slot>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.plate {
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

.opened {
  background-color: #cccccc;
}
.inProgress {
  background-color: #ffc700;
}
.testing {
  background-color: #ffc700;
}
.complete {
  background-color: #4bd379;
}

.low {
  color: #3ca961;
}
.medium {
  color: #e9b500;
}
.high {
  color: #d14343;
}
</style>
