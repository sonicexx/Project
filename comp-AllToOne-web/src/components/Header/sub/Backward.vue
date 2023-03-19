<template>
  <div class="back-ward" @click="onRouteBack">
    <span class="iconfont icon-header-arrow-left"></span>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
  name: 'BackWard',
  setup() {
    const router = useRouter();
    const onRouteBack = () => {
      console.log('back');
      router.go(-1);
    };

    return { onRouteBack };
  },
};
</script>

<style lang="scss" scoped>
@import '~styles/variable.scss';
@import '~styles/mixin.scss';
.back-ward {
  position: absolute;
  top: 0;
  left: 0;
  @include vh-center;
  width: $headerHeight;
  height: $headerHeight;
  .iconfont {
    font-size: 20px;
  }
}
</style>
