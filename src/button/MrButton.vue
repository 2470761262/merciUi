<template>
  <button
  @click="emitClick"
  class="m-button"
  :disabled="disabled||loading"
  :class="['m-button--' + type,'m-button--'+ size,{'is-disabled':disabled || loading}]">
    <i class="m-vue m-vue-loading" v-if="loading"></i>
    <slot name="prefix" v-else>
    </slot>
    <span>
       <slot></slot>
    </span>
    <slot name="suffix"></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    click: () => true
  },
  setup (props, ctx) {
    const emitClick = () => {
      if (props.disabled || props.loading) return
      ctx.emit('click')
    }
    return {
      emitClick
    }
  }
})
</script>
