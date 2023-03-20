<template>
  <div class="list-wrapper">
    <view-item v-for="item of viewList" :key="item.id" :data="item"></view-item>
  </div>
</template>

<script>
import ViewItem from './Sub';
export default {
  name: 'ViewList',
  components: { ViewItem },
  props: {
    viewList: Array,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import '~styles/mixin.scss';
@import '~styles/variable.scss';
.list-wrapper {
  @include flex-row;
  flex-wrap: wrap;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
}
</style>
