<template>
  <div class="list-wrapper">
    <hotel-item v-for="item of ListDatas" :key="item.id" :data="item">
    </hotel-item>
  </div>
</template>

<script>
import HotelItem from './Sub';
export default {
  name: 'HotelList',
  props: {
    ListDatas: Array,
  },
  components: { HotelItem },
};
</script>

<style lang="scss" scoped>
.list-wrapper {
  border-bottom: 1px solid #ddd;
  background-color: #fff;
}
</style>
