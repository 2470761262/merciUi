<style lang="less" scpoed>
.content{
  padding: 0px 20px;
  .cell-row{
    margin-top: 30px;
    h3{
      margin-bottom: 20px;
      font-weight: 400;
    color: #1f2f3d;
    }
  }
}
</style>
<template>
  <div class="content">
    <div class="cell-row">
      <h3>样式</h3>
      <m-button>默认按钮</m-button>
      <m-button type="primary" @click="showMessage">普通按钮</m-button>
      <m-button type="success">成功按钮</m-button>
      <m-button type="info">信息按钮</m-button>
      <m-button type="warning">警告按钮</m-button>
      <m-button type="danger">危险按钮</m-button>
    </div>
    <div class="cell-row">
      <h3>大小</h3>
      <m-button type="primary" size="medium">普通按钮</m-button>
      <m-button type="success" size="small">成功按钮</m-button>
      <m-button type="info" size="mini">信息按钮</m-button>
    </div>
    <div class="cell-row">
      <h3>带Icon</h3>
      <m-button size="medium">
        <template v-slot:prefix>
          <i class="m-vue m-vue-close"></i>
        </template>
        普通按钮
      </m-button>
      <m-button type="success" size="small">
        <template v-slot:suffix>
          <i class="m-vue m-vue-play"></i>
        </template>
        成功按钮
      </m-button>
      <m-button type="info" size="mini">
        信息按钮
        <template v-slot:suffix>
          <i class="m-vue m-vue-operation"></i>
        </template>
      </m-button>
    </div>
    <div class="cell-row">
      <h3>loading</h3>
      <m-button type="primary" size="medium" :loading="true">
        <template v-slot:prefix>
          <i class="m-vue m-vue-close"></i>
        </template>
        在加载中...
      </m-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import MButton from '../../../src/button/MrButton.vue'

export default defineComponent({
  name: 'MButtonTest',
  components: {
    MButton
  },
  setup () {
    const showMessage = () => {
      // eslint-disable-next-line no-alert
      alert('触发点击')
    }

    return {
      showMessage
    }
  }
})
</script>
