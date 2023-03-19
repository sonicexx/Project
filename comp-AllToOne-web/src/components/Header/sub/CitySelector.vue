<template>
  <div class="city">
    <router-link :to="{ name: 'city' }" custom v-slot="{ navigate }">
      <span @click="navigate" class="city-name">{{ cityName }}</span>
      <span class="iconfont icon-header-arrow"></span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CitySelector',
  setup() {
    const cityName = '全部';
    return { cityName };
  },
};
</script>

<style lang="scss" scoped>
@import '~styles/mixin.scss';
@import '~styles/variable.scss';
.city {
  width: 0.6rem;
  height: $headerHeight;

  @include vh-center;
  .city-name {
    font-size: 0.16rem;
    font-weight: bold;
  }
  .iconfont {
    font-size: 0.08rem;
    margin-left: 0.03rem;
  }
}
</style>
