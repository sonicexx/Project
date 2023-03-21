<template>
  <div class="list-wrapper">
    <massage-item
      v-for="item of ListDatas"
      :key="item.id"
      :data="item"></massage-item>
  </div>
</template>

<script>
import MassageItem from './Sub';
export default {
  name: 'MassageList',
  props: {
    ListDatas: Array,
  },
  components: { MassageItem },
};
</script>

<style lang="scss" scoped></style>
