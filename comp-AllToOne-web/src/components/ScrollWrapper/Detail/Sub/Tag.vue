<template>
  <div class="name-bd">
    <span class="iconfont" :class="icon"></span>
    <span class="name-text" :style="{ color: textColor }">
      <slot>加载中...</slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'DetailTag',
  props: {
    icon: {
      type: String,
      default() {
        return 'icon-smile';
      },
    },
    textColor: {
      type: String,
      default() {
        return '#333';
      },
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.name-bd {
  display: flex;
  align-items: center;
  min-height: 0.44rem;
  border-bottom: 1px solid #ddd;
  padding: 0.08rem 0.15rem;
  background-color: #fff;
  line-height: 0.18rem;
  box-sizing: border-box;

  .iconfont {
    font-size: 0.18rem;
    color: #8e8e8e;
  }
  .name-text {
    display: flex;
    align-items: center;
    font-size: 0.14rem;
    margin-left: 0.1rem;
  }
}
</style>
