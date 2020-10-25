### 基础用法

基础的按钮用法。

:::demo 设置 type 为对应的状态即可

```html
<m-button>默认按钮</m-button>
<m-button type="primary">普通按钮</m-button>
<m-button type="success">成功按钮</m-button>
<m-button type="info">信息按钮</m-button>
<m-button type="warning">警告按钮</m-button>
<m-button type="danger">危险按钮</m-button>
```

:::

### 圆形

常用与一个图标,多文本不推荐。
:::demo 本例包含 Icon 图标使用示例

```html
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
```

:::

### disabled

禁用状态。
:::demo 按钮不可用状态。

```html
<m-button disabled>默认按钮</m-button>
<m-button type="primary" disabled>普通按钮</m-button>
<m-button type="success" disabled>成功按钮</m-button>
<m-button type="info" disabled>信息按钮</m-button>
<m-button type="warning" disabled>警告按钮</m-button>
<m-button type="danger" disabled>危险按钮</m-button>
```

:::

### 圆角

你喜欢的圆角。
:::demo round

```html
<m-button round>默认按钮</m-button>
<m-button type="primary" round>普通按钮</m-button>
<m-button type="success" round>成功按钮</m-button>
<m-button type="info" round>信息按钮</m-button>
<m-button type="warning" round>警告按钮</m-button>
```

:::

### 文字按钮

没有边框和背景色的按钮。
:::demo text

```html
<m-button text disabled>默认按钮</m-button>
<m-button type="danger" text>默认按钮</m-button>
<m-button type="primary" text disabled>普通按钮</m-button>
```

:::

### 大小

大中小,默认大
:::demo medium 大 small 中 mini 小

```html
<m-button type="primary" size="medium">普通按钮</m-button>
<m-button type="success" size="small">成功按钮</m-button>
<m-button type="info" size="mini">信息按钮</m-button>
```

:::

### 带 Icon

内置的 icon 图标
:::demo prefix 前置插槽 suffix 后置插槽 可同时使用

```html
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
```

:::

### loading

:::demo loading 设置 `true` or `false` 即可

```html
<template>
<m-button type="primary" size="medium" :loading="isLoading">
  <template v-slot:prefix>
    <i class="m-vue m-vue-smile-filling"></i>
  </template>
 {{isLoading ? "我在转圈" :"吓你一跳"}}
</m-button>
<m-button type="primary" size="medium" @click="handleChange">
 点我切换loading状态
</m-button>
</template>
<script>
  import { ref } from "vue";
  export default {
    setup(){
      const isLoading = ref(true);

      const handleChange = ()=>{
        
         isLoading.value = !isLoading.value;

      }

      return {
        isLoading,
        handleChange
      }
    },

  };
</script>
```

:::

### 按钮组

:::demo 以按钮组的方式出现，常用于多项类似操作。

```html
<m-button-group>
  <m-button type="primary">JEX的歌好好听阿</m-button>
  <m-button type="success">成功按钮</m-button>
  <m-button type="info">信息按钮</m-button>
</m-button-group>
<br />
<m-button-group>
  <m-button type="primary">上一页</m-button>
  <m-button type="primary">下一页</m-button>
</m-button-group>
```

:::
