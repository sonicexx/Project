<template>
  <div class="container">
    <home-header></home-header>
    <home-scroll></home-scroll>
  </div>
</template>

<script>
import HomeHeader from 'components/Header/Home';
import HomeScroll from 'components/ScrollWrapper/Index';
export default {
  name: 'Index',
  components: { HomeHeader, HomeScroll },
  setup() {
    return {};
  },
};
</script>

<style lang="scss"></style>
