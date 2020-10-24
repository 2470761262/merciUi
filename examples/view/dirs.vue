<template>
  <div>
    <!-- 按钮展示 -->
    <m-button-text></m-button-text>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MButtonText from '../mdir/button/MButtonTest.vue'

export default defineComponent({
  components: {
    MButtonText
  },
  setup () {
    return {}
  }
})
</script>

<style scoped>

</style>
