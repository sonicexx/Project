<template>
  <div class="stars">
    <span
      class="iconfont icon-star"
      v-for="item of 5"
      :key="item"
      :style="{ color: item <= +starNum ? '#f5c164' : '' }"></span>
  </div>
</template>

<script>
export default {
  name: 'Stars',
  props: {
    starNum: [String, Number],
  },
};
</script>

<style lang="scss" scoped>
.iconfont {
  color: #ccc;
}
</style>
