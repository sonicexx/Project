<template>
  <div class="container">
    <common-header :title="title"></common-header>
  </div>
</template>

<script>
import CommonHeader from 'components/Header/Common.vue';
export default {
  name: 'Detail',
  components: { CommonHeader },
  setup() {
    const title = '详细信息';
    return { title };
  },
};
</script>

<style lang="scss"></style>
