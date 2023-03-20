<template>
  <div class="big-tag">
    <sub-title :title="title" :icon="icon" mycolor="#06c1ae"></sub-title>
    <div class="text-cover" :style="{ fontSize: font_size + 'rem' }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import SubTitle from 'components/ScrollWrapper/Sub/SubTitle';
export default {
  name: 'DetailBigTag',
  components: { SubTitle },
  props: {
    title: {
      type: String,
      default() {
        return '加载中...';
      },
    },
    icon: {
      type: String,
      default() {
        return 'icon-smile';
      },
    },
    font_size: {
      type: Number,
      default() {
        return 0.16;
      },
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.text-cover {
  border-bottom: 1px solid #ddd;
  padding: 0.1rem 0.15rem;
  text-indent: 2em;
  line-height: 1.2em;
  word-spacing: 0.2em;
  background-color: #fff;
}
</style>
