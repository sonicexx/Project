<template>
  <div class="container">
    <common-header :title="title"></common-header>
  </div>
</template>

<script>
import CommonHeader from 'components/Header/Common.vue';
export default {
  name: 'List',
  components: { CommonHeader },
  setup() {
    const title = '列表';
    return { title };
  },
};
</script>

<style lang="scss"></style>
