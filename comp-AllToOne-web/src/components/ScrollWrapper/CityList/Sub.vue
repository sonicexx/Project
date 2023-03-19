<template>
  <div class="city-item" @click="selectCity(cityInfo)">
    <span class="city">{{ cityInfo.cityName }}</span>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
export default {
  name: 'CityListSub',
  props: {
    cityInfo: Object,
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    function selectCity(info) {
      store.commit('selectCity', info);
      router.push({
        name: 'home',
      });
    }
    return { selectCity };
  },
};
</script>

<style lang="scss" scoped>
@import '~styles/mixin.scss';
.city-item {
  @include flex-row;
  align-items: center;
  height: 0.5rem;
  padding-left: 0.15rem;
  border-bottom: 1px solid #ddd;
  font-size: 0.16rem;
  background-color: #fff;
}
</style>
