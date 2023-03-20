<template>
  <div class="container">
    <common-header :title="category + '列表'"></common-header>
    <list-scroll-wrapper></list-scroll-wrapper>
  </div>
</template>

<script>
import CommonHeader from 'components/Header/Common.vue';
import ListScrollWrapper from 'components/ScrollWrapper/List';
export default {
  name: 'List',
  components: { CommonHeader, ListScrollWrapper },
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
