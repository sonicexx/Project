<template>
  <div
    class="tab-item"
    :class="{ current: cityInfo.cityId === cityId }"
    @click="selectCity(cityInfo)">
    {{ cityInfo.cityName }}
  </div>
</template>

<script>
import { toRefs } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'TabItem',
  props: {
    cityInfo: Object,
  },
  setup(props) {
    const {
      state: { cityInfo },
      commit,
    } = useStore();
    let { cityId } = toRefs(cityInfo);

    function selectCity(cityInfo) {
      commit('selectCity', cityInfo);
    }

    return { cityId, selectCity };
  },
};
</script>

<style lang="scss" scoped>
@import '~styles/variable.scss';
@import '~styles/mixin.scss';
.tab-item {
  @include vh-center;
  flex: 1;
  height: 100%;
  font-size: 0.16rem;
  box-sizing: border-box;
  border-bottom: 2px solid transparent;
  &.current {
    color: $defaultGreen;
    border-color: $defaultGreen;
  }
}
</style>
