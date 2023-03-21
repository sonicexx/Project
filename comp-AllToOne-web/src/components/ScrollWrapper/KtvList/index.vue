<template>
  <div class="list-wrapper">
    <ktv-item v-for="item of ListDatas" :key="item.id" :data="item"></ktv-item>
  </div>
</template>

<script>
import KtvItem from './Sub';
export default {
  name: 'KtvList',
  props: {
    ListDatas: Array,
  },
  components: { KtvItem },
};
</script>

<style lang="scss" scoped></style>
