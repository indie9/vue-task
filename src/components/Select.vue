<template>
  <div class="selectMultiselect" :class="{ 'active-checkbox': isActive }">
    <div
      class="selectMultiselect-selectBox"
      @click="show"
      v-click-outside="hide"
    >
      <select :class="{ activeSelect: selectedInput }">
        <option disabled selected>
          {{ selectedInput ? list[selectedInput] : placeholder }}
        </option>
      </select>
      <div class="selectMultiselect-overSelect"></div>
    </div>
    <div class="selectCheckboxes" v-show="isActive">
      <div class="checkbox" v-for="item in Object.keys(list)" :key="item">
        <input
          class="custom-checkbox"
          type="radio"
          :name="placeholder"
          :id="`${item}-checkbox`"
          :value="item"
          v-model="selectedInputModel"
        />
        <label :for="`${item}-checkbox`" :name="placeholder">
          {{ list[item] }}
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";

export default {
  data() {
    return {
      selectedInput: this.selectedInputItem || "",
      isActive: false,
    };
  },
  model: {
    prop: "selectedInputItem",
    event: "change",
  },
  computed: {
    selectedInputModel: {
      get() {
        return this.selectedInput;
      },
      set(val) {
        this.selectedInput = val;
        this.$emit("change", val);
      },
    },
  },
  props: {
    list: Object,
    checked: String,
    placeholder: String,
    selectedInputItem: String,
  },
  mounted() {},
  watch: {
    selectedInputItem() {
      this.selectedInput = this.selectedInputItem;
    },
  },
  methods: {
    show() {
      this.isActive = !this.isActive;
    },
    hide() {
      this.isActive = false;
    },
  },
  directives: {
    ClickOutside,
  },
};
</script>

<style lang="scss" scoped>
.selectMultiselect {
  width: 100%;
  overflow: hidden;
  padding: 2px 0;
  box-sizing: content-box;
  background-color: #fff;
  position: absolute;

  &-selectBox {
    position: relative;
  }

  &-selectBox select {
    display: block;
    width: 98%;
    margin: auto;
    height: 24px;
    box-shadow: inset 0px 0px 2px 1px #b5b5b5;
    border-radius: 3px;
    color: #cccccc;
  }
  & .activeSelect {
    color: $text-color;
    font-weight: 700;
  }
  &-overSelect {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1;
  }
}
.selectCheckboxes {
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 100%;
  height: 100%;
  z-index: 999;
}
.checkbox {
  background-color: white;
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: center;
  height: 24px;
  border: 1x solid $primary;
  z-index: 99;
}
.custom-checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
  line-height: 24px;
  margin: 0;
  padding: 0;
}
.custom-checkbox + label {
  background-color: white;
  width: 100%;
  line-height: 24px;
  padding-left: 10px;
  z-index: 1;
}

.custom-checkbox:checked + label {
  background: #7b61ff;
  color: white;
}

.custom-checkbox + label:hover {
  background-color: #e6e1ff;
  color: black;
}
.custom-checkbox + label:active {
  background-color: #7b61ff;
  color: white;
}

.active-checkbox {
  border: 1px solid $primary;
  box-shadow: 0px 0px 2px 2px rgba(123, 97, 255, 0.5);
  border-radius: 3px;
  z-index: 99;
}
.selectMultiselect:hover {
  border: 1px solid $primary;
  box-shadow: 0px 0px 2px 2px rgba(123, 97, 255, 0.5);
  border-radius: 3px;
}
.selectMultiselect:hover > .selectMultiselect-selectBox select {
  border: 1px solid $primary;
  border-radius: 3px;
  color: var(--text-color);
  font-weight: 400;
}
</style>
