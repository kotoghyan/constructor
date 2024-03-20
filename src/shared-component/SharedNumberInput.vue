<template>
  <div
    class="shared-number-input-root"
    :style="{width: width}"
  >
    <span class="shared-number-input-label">{{ label }}</span>
    <div class="shared-number-input-container">
      <input
        type="number"
        :value="localValue"
        class="shared-number-input"
        @input="handlerChange"
      />
      <div class="d-flex flex-column ga-1">
        <img
          class="shared-number-input-arrowUp"
          src="/src/assets/icons/arrowDown.svg"
          alt="arrowUp"
          @click="handleArrowUp"
        />
        <img
          class="shared-number-input-arrowDown"
          src="/src/assets/icons/arrowDown.svg"
          alt="arrowDown"
          @click="handleArrowDown"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SharedNumberInput",

  data() {
    return {
      localValue: 0
    }
  },

  props: {
    label: {
      type: String,
      required: false,
      default: ''
    },

    value: {
      type: Number,
      required: true
    },

    width: {
      type: String,
      required: false,
      default: '100%'
    },

    property: {
      type: String,
      required: false,
      default: ''
    }
  },

  methods: {
    handleArrowUp(event) {
      this.localValue += 1
      this.$emit('handleChangeCount', event.target.value)
    },

    handleArrowDown(event) {
      if (this.localValue <= 0) return
      this.localValue -= 1
      this.$emit('handleChangeCount', event.target.value)
    },

    handlerChange(event) {
      if (!this.validateNumberInput(event.target.value)) return
      if (event.target.value < 0) {
        this.localValue = 0
        this.$emit('handleChangeCount', event.target.value)
      }
    },

    validateNumberInput (val) {
      let digitRegex = /^\d+$/;
      return digitRegex.test(val);
    }
  }
}
</script>

<style scoped>
.shared-number-input-label {
  font-size: 14px;
  font-weight: var(--font-w-medium);
  line-height: 20px;
  letter-spacing: 0;
  text-align: left;
}

.shared-number-input-container {
  display: flex;
  padding: 10px 12px;
  border: 1px solid rgba(232, 233, 234, 1);
  height: 40px;
  border-radius: 8px;
  margin-top: 4px;
}

.shared-number-input {
  width: 100%;
  height: 100%;
  border: none;
  background: none;
  font-size: 14px;
  font-weight: var(--font-w-regular);
  line-height: 20px;
  letter-spacing: 0;
  text-align: left;
  padding: 0;
  margin: 0;
  outline: none;
}

.shared-number-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.shared-number-input:focus-visible {
  outline: none;
}

.shared-number-input-arrowUp {
  transform: rotate(180deg);
  cursor: pointer;
  user-select: none;
  width: 12px;
  height: 12px;
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.3s;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
}

.shared-number-input-arrowDown {
  cursor: pointer;
  user-select: none;
  width: 12px;
  height: 12px;
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.3s;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
}
</style>
