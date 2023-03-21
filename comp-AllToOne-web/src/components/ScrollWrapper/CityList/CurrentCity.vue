<template>
  <div class="current-city">
    <span>当前城市：</span>
    <span class="iconfont icon-positioning"></span>
    <router-link :to="{ name: path }" custom v-slot="{ navigate }">
      <span class="city" @click="navigate">{{ cityName }}</span>
    </router-link>
  </div>
</template>

<script>
import { useStore } from 'vuex';
export default {
  name: 'CurrentCity',
  setup() {
    const store = useStore();

    const path = 'home';
    return {
      cityName: store.state.cityInfo.cityName,
      path,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '~styles/mixin.scss';
@import '~styles/variable.scss';
.current-city {
  @include flex-row;
  align-items: center;
  height: 0.5rem;
  padding-left: 0.15rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  font-size: 0.16rem;
  .iconfont {
    margin-right: 0.04rem;
    vertical-align: 0.005rem;
    color: $defaultBgColor;
  }
}
</style>
