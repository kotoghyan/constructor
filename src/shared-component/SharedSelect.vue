<template>
  <div>
    <span class="shared-select-label">
      {{ label }}
    </span>
    <div
      v-click-outside="handleClickOutside"
      class="shared-checkout-shared-methods-select-wrapper"
      :style="{'width': width}"
    >
      <div
        class="shared-checkout-shared-methods-select-container"
        :class="{ open: open, disabledSelect: disabled }"
        @click.self="handleToggleOpen"
      >
        <div
          class="d-flex shared-selected-item-text shared-checkout-shared-methods-select-input-container"
        >
        <span
          v-if="item"
          class="shared-checkout-shared-methods-select-input-text">
          {{ item }}
        </span>
          <span
            v-else-if="!item && placeholder"
            class="shared-checkout-shared-methods-select-input-text-placeholder"
          >
          {{ placeholder }}
        </span>
        </div>
        <div class="shared-checkout-shared-methods-select-icons-container">
          <button
            class="shared-checkout-shared-methods-select-buttons"
            @click="removeText"
          >
            <img
              v-if="deleteButton && item"
              name="closeCircleFilled24"
              class="shared-checkout-shared-methods-select-close-circle"
            />
          </button>
          <button
            class="shared-checkout-shared-methods-select-buttons"
            @click="handleToggleOpen"
          >
            <img
              src="/src/assets/icons/arrowDown.svg"
              class="shared-checkout-shared-methods-select-arrow-down"
            />
          </button>
        </div>
      </div>

      <div
        class="items"
        :class="{ selectHide: !open }"
      >
        <div
          v-for="option of options"
          :key="option.value"
          class="d-flex align-center justify-space-between shared-selected-item-text"
          @click="selectOptions(option)"
        >
          {{ option.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SharedSelect',

  props: {
    options: {
      type: Array,
      required: true
    },

    item: {
      type: String,
      required: true
    },

    default: {
      type: [String, Number],
      required: false,
      default: null
    },

    disabled: {
      type: Boolean,
      required: false,
      default: false
    },

    deleteButton: {
      type: Boolean,
      required: false,
      default: false
    },

    width: {
      type: String,
      required: false,
      default: '100%'
    },

    label: {
      type: String,
      required: false,
      default: ''
    },

    placeholder: {
      type: String,
      required: false,
      default: ''
    },

    property: {
      type: String,
      required: false,
      default: ''
    }
  },

  data() {
    return {
      open: false
    }
  },

  methods: {
    handleToggleOpen() {
      if (this.disabled) {
        return
      }
      this.open = !this.open
    },

    handleClickOutside() {
      this.open = false
    },

    selectOptions(option) {
      this.$emit('handleSelect', option, this.property)
      this.open = false
    },

    removeText() {
      this.$emit('handleSelect', null)
    }
  }
}
</script>

<style scoped lang="scss">
.shared-checkout-shared-methods-select-wrapper {
  position: relative;
  text-align: left;
  outline: none;
  height: 40px;
}

.shared-checkout-shared-methods-select-wrapper
.shared-checkout-shared-methods-select-container {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  border: 1px solid rgba(232, 233, 234, 1);
  background: white;
  padding: 10px 12px;
  cursor: pointer;
  user-select: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
  font-size: 14px;
  font-style: normal;
  font-weight: var(--font-w-regular);
  line-height: 20px;
  color: var(--default-text-color);
  letter-spacing: 0;
  text-align: left;
  z-index: 999;
}

.shared-checkout-shared-methods-select-wrapper .items {
  width: 100%;
  max-height: 194px;
  border-radius: 4px;
  overflow-x: hidden;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 1;
  margin-top: 4px;
  border: 1px solid rgba(16, 24, 40, 0.1);
  box-shadow: 0 4px 10px rgba(33, 69, 98, 0.08);
}

.items::-webkit-scrollbar {
  width: 4px;
}

.shared-selected-item-text {
  color: var(--default-text-color);;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  background: #FFFFFF;
}

.shared-checkout-shared-methods-select-input-text-placeholder {
  font-size: 14px;
  font-weight: var(--font-w-regular);
  line-height: 20px;
  letter-spacing: 0;
  text-align: left;
  color: rgba(120, 123, 132, 1);
}

.shared-checkout-shared-methods-select-input-container {
  overflow: hidden;
}

.shared-checkout-shared-methods-select-wrapper .items div {
  color: var(--default-text-color);
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  padding: 16px 0 16px 16px;
  cursor: pointer;
  user-select: none;
}

.selectHide {
  display: none;
}

.disabledSelect {
  background: rgba(200, 200, 200, 0.2) !important;
  border: 1px solid rgba(147, 147, 147, 0.5) !important;
  cursor: default !important;
}

.disabledSelectText {
  color: #a9abb6;
}

.shared-period-option-sale {
  border-radius: 6px;
  color: var(--default-text-color);
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  padding: 3px 6px;
}

.shared-checkout-shared-methods-select-arrow-down {
  width: 10px;
  height: 5px;
  color: var(--default-text-color);
}

.shared-checkout-shared-methods-select-close-circle {
  width: 20px;
  height: 20px;
  fill: var(--default-text-color);
}

.shared-checkout-shared-methods-select-buttons {
  margin: auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.shared-checkout-shared-methods-select-icons-container {
  display: flex;
  gap: 8px;
  margin: auto 0;
}

.shared-checkout-shared-methods-select-input-text {
  width: 100%;
  flex: 1;
}

.shared-select-label {
  font-size: 14px;
  font-weight: var(--font-w-medium);
  line-height: 20px;
  letter-spacing: 0;
  text-align: left;
}
</style>
