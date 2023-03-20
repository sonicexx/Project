<template>
  <div class="list-wrapper">
    <massage-item
      v-for="item of massageList"
      :key="item.id"
      :data="item"></massage-item>
  </div>
</template>

<script>
import MassageItem from './Sub';
export default {
  name: 'MassageList',
  props: {
    massageList: Array,
  },
  components: { MassageItem },
};
</script>

<style lang="scss" scoped></style>
