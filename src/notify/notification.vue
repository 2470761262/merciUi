<style lang="less" scoped>
.m-fade-enter-from {
  &.right {
    right: 0;
    transform: translateX(100%);
  }
  &.left {
    left: 0;
    transform: translateX(-100%);
  }
}
.m-fade-leave-active {
  opacity: 0;
}
</style>

<template>
  <transition name="m-fade" appear>
    <div class="m-notification" :class="direction" :style="posiStyle" v-show="visible">
      <i class="m-vue m-vue-success"></i>
      <div class="m-notification-middle">
        <h3 class="m-notification-title">{{ title }}</h3>
        <div class="el-notification__content">
          <slot>
            {{ message }}
          </slot>
        </div>
      </div>
      <i class="m-vue m-vue-close"></i>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'

const position = [
  {
    p: 'bottom-right',
    s: { right: '20px' }
  },
  {
    p: 'bottom-left',
    s: { left: '20px' }
  },
  {
    p: 'top-left',
    s: { left: '20px' }
  },
  {
    p: 'top-right',
    s: { right: '20px' }
  }
]

export default defineComponent({
  name: 'Mnotification',
  props: {
    position: {
      type: String,
      default: 'top-right'
    },
    title: {
      type: String,
      default: '提示'
    },
    message: {
      type: String,
      default: ''
    },
    zIndex: {
      type: Number,
      default: 1
    },
    offset: {
      type: Number,
      default: 20
    }
  },
  setup (props, ctx) {
    // const instance :any = getCurrentInstance()
    // instance.appContext.app.unmount()

    const posiStyle = computed(() => {
      const posiMsg = position.filter((v) => v.p === props.position)
      Object.assign(posiMsg ? posiMsg[0].s : position[4].s, {
        zIndex: props.zIndex
      })
      if (props.position.includes('top')) {
        (posiMsg[0].s as any).top = `${props.offset}px`
      } else {
        (posiMsg[0].s as any).bottom = `${props.offset}px`
      }
      return posiMsg[0].s
    })

    const direction = computed(() => props.position.split('-')[1])

    const visible = ref(true)

    setTimeout(() => {
      visible.value = false
    }, 2000)

    return {
      posiStyle,
      visible,
      direction
    }
  }
})
</script>
