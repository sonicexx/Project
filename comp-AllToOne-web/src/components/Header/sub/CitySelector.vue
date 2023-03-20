<template>
  <div class="city">
    <router-link :to="{ name: 'city' }" custom v-slot="{ navigate }">
      <span @click="navigate" class="city-name">{{ currentCityName }}</span>
      <span class="iconfont icon-header-arrow"></span>
    </router-link>
  </div>
</template>

<script>
import { onActivated, ref } from 'vue';
import { useStore } from 'vuex';
export default {
  name: 'CitySelector',
  setup() {
    const store = useStore();
    const currentCityName = ref(store.state.cityInfo.cityName);
    onActivated(() => {
      if (currentCityName.value !== store.state.cityInfo.cityName) {
        currentCityName.value = store.state.cityInfo.cityName;
      }
    });
    return { currentCityName };
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
