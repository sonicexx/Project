<template>
  <div class="list-wrapper">
    <ktv-item v-for="item of ktvList" :key="item.id" :data="item"></ktv-item>
  </div>
</template>

<script>
import KtvItem from './Sub';
export default {
  name: 'KtvList',
  props: {
    ktvList: Array,
  },
  components: { KtvItem },
};
</script>

<style lang="scss" scoped></style>
