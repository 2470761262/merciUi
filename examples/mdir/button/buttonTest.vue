<style lang="less" scpoed>
.content {
  padding: 0px 20px;
  h2 {
    font-size: 28px;
    color: #1f2f3d;
    font-weight: 400;
  }
  h6 {
    font-size: 14px;
    color: #5e6d82;
    margin: 10px 0;
    font-weight: 400;
  }
  .cell-row {
    margin-top: 50px;
    h3 {
      margin-bottom: 15px;
      font-weight: 400;
      color: #1f2f3d;
    }
    h6 {
      margin-bottom: 20px;
    }
  }
}
</style>
<template>
  <div class="content">
    <h2>Button 按钮</h2>
    <h6>常用的操作按钮</h6>
    <div class="cell-row">
      <h3>基础用法</h3>
      <h6>基础的按钮用法。</h6>
      <m-button>默认按钮</m-button>
      <m-button type="primary" @click="showMessage"
        >点我触发console.log</m-button
      >
      <m-button type="success">成功按钮</m-button>
      <m-button type="info">信息按钮</m-button>
      <m-button type="warning">警告按钮</m-button>
      <m-button type="danger">危险按钮</m-button>
    </div>
    <div class="cell-row">
      <h3>圆形</h3>
      <h6>常用与一个图标,多文本不推荐。</h6>
      <m-button circle>
        <template v-slot:prefix>
          <i class="m-vue m-vue-check-item"></i>
        </template>
      </m-button>
      <m-button type="success" circle>
        <template v-slot:prefix>
          <i class="m-vue m-vue-chart-pie"></i>
        </template>
      </m-button>
      <m-button type="info" circle>
        <template v-slot:prefix>
          <i class="m-vue m-vue-favorite"></i>
        </template>
      </m-button>
      <m-button type="warning" circle>
        <template v-slot:prefix>
          <i class="m-vue m-vue-zoom-out"></i>
        </template>
      </m-button>
      <m-button type="danger" circle>
        <template v-slot:prefix>
          <i class="m-vue m-vue-browse"></i>
        </template>
      </m-button>
    </div>
    <div class="cell-row">
      <h3>禁用状态</h3>
      <h6>按钮不可用状态。</h6>
      <m-button disabled>默认按钮</m-button>
      <m-button type="primary" disabled>普通按钮</m-button>
      <m-button type="success" disabled>成功按钮</m-button>
      <m-button type="info" disabled>信息按钮</m-button>
      <m-button type="warning" disabled>警告按钮</m-button>
      <m-button type="danger" disabled>危险按钮</m-button>
    </div>
    <div class="cell-row">
      <h3>圆角</h3>
      <h6>你喜欢的圆角。</h6>
      <m-button round>默认按钮</m-button>
      <m-button type="primary" round>普通按钮</m-button>
      <m-button type="success" round>成功按钮</m-button>
      <m-button type="info" round>信息按钮</m-button>
      <m-button type="warning" round>警告按钮</m-button>
    </div>
    <div class="cell-row">
      <h3>文字按钮</h3>
      <h6>没有边框和背景色的按钮。</h6>
      <m-button text disabled>默认按钮</m-button>
      <m-button type="danger" text>默认按钮</m-button>
      <m-button type="primary" text disabled>普通按钮</m-button>
    </div>
    <div class="cell-row">
      <h3>大小</h3>
      <h6>大中小,默认大</h6>
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
      <h3>加载中</h3>
      <h6>点击按钮后进行数据加载操作，在按钮上显示加载状态。</h6>
      <m-button type="primary" size="medium" :loading="isLoading">
        <template v-slot:prefix>
          <i class="m-vue m-vue-smile-filling"></i>
        </template>
       {{ isLoading ? "在加载中..." : "吓你一跳"}}
      </m-button>
      <m-button type="info" @click="changeLoading">点我切换loading状态</m-button>
    </div>
    <div class="cell-row">
      <h3>按钮组</h3>
      <h6>以按钮组的方式出现，常用于多项类似操作。</h6>
      <m-button-group>
        <m-button type="primary">JEX的歌好好听阿</m-button>
        <m-button type="success">成功按钮</m-button>
        <m-button type="info">信息按钮</m-button>
      </m-button-group>
      <br>
      <m-button-group>
        <m-button type="primary">上一页</m-button>
        <m-button type="primary">下一页</m-button>
      </m-button-group>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import MButton from '../../../src/button/button.vue'
import MButtonGroup from '../../../src/button/buttonGroup.vue'

export default defineComponent({
  name: 'MButtonTest',
  components: {
    MButton,
    MButtonGroup
  },
  setup () {
    const showMessage = (e: MouseEvent) => {
      console.log(e, '触发点击')
    }
    const isLoading = ref(true)

    const changeLoading = () => {
      isLoading.value = !isLoading.value
    }
    return {
      showMessage,
      isLoading,
      changeLoading
    }
  }
})
</script>
