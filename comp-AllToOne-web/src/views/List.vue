<template>
  <div class="container">
    <common-header :title="category + '列表'"></common-header>
  </div>
</template>

<script>
import CommonHeader from 'components/Header/Common.vue';
export default {
  name: 'List',
  components: { CommonHeader },
  props: {
    category: {
      type: String,
      default() {
        return '😶';
      },
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss"></style>
