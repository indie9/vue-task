<template>
  <div class="modal_window">
    <div class="modal_board">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.modal_window {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background: rgba(181, 181, 181, 0.35);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & .modal_board {
    margin: auto;
    width: 430px;
    height: 405px;
    z-index: 99;
    background-color: white;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
  }
}
</style>
