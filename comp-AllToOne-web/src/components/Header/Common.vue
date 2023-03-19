<template>
  <div class="header">
    <backward></backward>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
import Backward from './sub/Backward.vue';
export default {
  name: 'CommonHeader',
  components: { Backward },
  props: {
    title: {
      type: String,
      default() {
        return '一线生活通';
      },
    },
  },
  setup(props) {
    const { title } = props;

    return {
      title,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '~styles/mixin.scss';
@import '~styles/variable.scss';
.header {
  position: relative;
  @include vh-center;
  height: $headerHeight;
  background-color: $defaultBgColor;
  h1 {
    font-size: 0.18rem;
  }
}
</style>
