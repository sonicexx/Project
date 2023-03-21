<template>
  <div class="loading">
    <div class="loading-img"></div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import '~styles/mixin.scss';
.loading {
  @include vh-center;
  height: 3rem;
  .loading-img {
    width: 0.8rem;
    height: 0.8rem;
    background-image: url('../../../assets/imgs/loading.gif');
    background-position: center center;
    background-size: contain;
  }
}
</style>
