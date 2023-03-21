<template>
  <div class="list-wrapper">
    <food-item
      v-for="item of ListDatas"
      :key="item.id"
      :data="item"></food-item>
  </div>
</template>

<script>
import FoodItem from './Sub';
export default {
  name: 'FoodList',
  props: {
    ListDatas: Array,
  },
  components: {
    FoodItem,
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
.list-wrapper {
  background-color: #fff;
}
</style>
