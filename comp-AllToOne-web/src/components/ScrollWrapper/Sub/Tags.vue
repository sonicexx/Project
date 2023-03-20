<template>
  <ul class="tags-wrapper">
    <li v-for="item of tagsList" :key="item" class="item">{{ item }}</li>
  </ul>
</template>

<script>
export default {
  name: 'Tags',
  props: {
    tagsList: Array,
  },
};
</script>

<style lang="scss" scoped>
@import '~styles/mixin.scss';
.tags-wrapper {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  height: 100%;
  font-size: 0.14rem;
  overflow: hidden;
  .item {
    white-space: nowrap;
    margin-right: 0.08rem;
    background-color: rgb(255, 242, 220);
    padding-inline: 0.02rem;
    border-radius: 0.01rem;
    color: rgb(185, 158, 21);
  }
}
</style>
