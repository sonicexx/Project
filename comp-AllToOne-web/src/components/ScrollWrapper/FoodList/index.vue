<template>
  <div class="list-wrapper">
    <food-item v-for="item of foodList" :key="item.id" :data="item"></food-item>
  </div>
</template>

<script>
import FoodItem from './Sub';
export default {
  name: 'FoodList',
  props: {
    foodList: Array,
  },
  components: {
    FoodItem,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.list-wrapper {
  background-color: #fff;
}
</style>
