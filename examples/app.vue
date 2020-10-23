
 <style  lang="less" scoped>
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  img {
    width: 10vw;
  }
  p {
    color: @primary;
    font-size: 40px;
  }
}
</style>
<template>
  <div class="content">
    <img src="https://cn.vuejs.org/images/logo.png">
    <p>{{hello}}</p>
  </div>
</template>

<script lang="ts">
import { toRaw, defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  setup () {
    const hello = toRaw('Merci Vue3 ui')

    return {
      hello
    }
  }
})
</script>
