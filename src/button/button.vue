<template>
  <button
  @click="emitClick"
  class="m-button"
  :disabled="disabled||loading"
  :class="styles">
    <i class="m-vue m-vue-loading" v-if="loading"></i>
    <slot name="prefix" v-else>
    </slot>
    <span v-if="isDefault">
       <slot></slot>
    </span>
    <slot name="suffix"></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'MButton',
  props: {
    text: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'medium'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    click: (event:MouseEvent) => event
  },
  setup (props, ctx) {
    // 是否传递默认插槽
    const isDefault = !!ctx.slots.default

    const emitClick = (e:MouseEvent) => {
      if (props.disabled || props.loading) return

      ctx.emit('click', e)
    }

    const styles = computed(() => {
      const pu = [
        { 'is-disabled': props.disabled || props.loading },
        { 'is-circle': props.circle },
        { 'is-round': props.round }
      ]
      return [...props.text ? [`m-button--text_${props.type}`] : [
      `m-button--${props.type}`,
      `m-button--${props.size}`

      ], ...pu]
    })

    return {
      emitClick,
      isDefault,
      styles
    }
  }
})
</script>
