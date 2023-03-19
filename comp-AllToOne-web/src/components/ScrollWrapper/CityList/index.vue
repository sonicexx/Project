<template>
  <div class="List-Wrapper">
    <city-list-sub
      v-for="item in cityList"
      :key="item.cityId"
      :city-info="item"></city-list-sub>
  </div>
</template>

<script>
import CityListSub from './Sub';
import cityDatas from 'data/cities';
export default {
  name: 'CityList',
  components: { CityListSub },
  setup() {
    const cityList = cityDatas;
    return {
      cityList,
    };
  },
};
</script>

<style lang="scss" scoped></style>
