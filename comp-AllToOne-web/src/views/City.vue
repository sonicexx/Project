<template>
  <div class="container">
    <common-header :title="title"></common-header>
    <city-scroll></city-scroll>
  </div>
</template>

<script>
import CommonHeader from 'components/Header/Common.vue';
import CityScroll from 'components/ScrollWrapper/City.vue';

export default {
  name: 'City',
  components: { CommonHeader, CityScroll },
  setup() {
    const title = '城市选择';
    return { title };
  },
};
</script>

<style lang="scss"></style>
