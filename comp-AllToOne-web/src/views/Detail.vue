<template>
  <div class="container">
    <common-header :title="title"></common-header>
    <detail-scroll></detail-scroll>
  </div>
</template>

<script>
import CommonHeader from 'components/Header/Common.vue';
import DetailScroll from 'components/ScrollWrapper/Detail';
export default {
  name: 'Detail',
  components: { CommonHeader, DetailScroll },
  setup() {
    const title = '详细信息';
    return { title };
  },
};
</script>

<style lang="scss"></style>
