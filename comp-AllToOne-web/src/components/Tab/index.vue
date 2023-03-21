<template>
  <div class="tab">
    <tab-item
      v-for="item of cityList"
      :key="item.cityId"
      :city-info="item"></tab-item>
  </div>
</template>

<script>
import cityDatas from 'data/cities';
import TabItem from './Sub';

export default {
  name: 'Tab',
  components: { TabItem },
  setup() {
    const cityList = cityDatas;

    return { cityList };
  },
};
</script>

<style lang="scss" scoped>
@import '~styles/mixin.scss';
.tab {
  @include flex-row;
  height: 0.44rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
}
</style>
