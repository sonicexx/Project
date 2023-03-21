<template>
  <div class="no-data-tip">
    <span class="text">
      {{ text }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'NoDataTip',
  setup() {
    const text = '- 没有搜索结果 -';
    return { text };
  },
};
</script>

<style lang="scss" scoped>
@import '~styles/mixin.scss';
.no-data-tip {
  @include vh-center;
  height: 3rem;
  .text {
    font-size: 0.16rem;
    color: #999;
  }
}
</style>
