<template>
  <div class="container">
    <common-header :title="title"></common-header>
  </div>
</template>

<script>
import CommonHeader from 'components/Header/Common.vue';
export default {
  name: 'Search',
  components: { CommonHeader },
  setup() {
    const title = '商家搜索';
    return { title };
  },
};
</script>

<style lang="scss"></style>
