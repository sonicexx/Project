<template>
  <div class="sub-title" :style="{ color: mycolor ? mycolor : '#000' }">
    <span v-if="icon" :class="['iconfont', icon ? icon : '']"></span>
    <span>{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: 'SubTitle',
  props: {
    title: {
      type: String,
      default() {
        return '一线通';
      },
    },
    mycolor: {
      type: String,
      required: false,
    },
    icon: {
      type: String,
      required: false,
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.sub-title {
  display: flex;
  align-items: center;
  height: 0.5rem;
  margin-top: 0.1rem;
  padding-left: 0.15rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;

  .iconfont {
    font-size: 0.22rem;
    margin-right: 0.06rem;
  }

  span {
    font-size: 0.18rem;
  }
}
</style>
