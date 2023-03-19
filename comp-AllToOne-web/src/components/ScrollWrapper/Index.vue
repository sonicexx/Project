<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <category-icons></category-icons>
    </div>
  </div>
</template>

<script>
import CategoryIcons from './CategoryIcons';
import BetterScroll from 'better-scroll';
import options from './bScroll-config';
import { onMounted, ref } from 'vue';
export default {
  name: 'HomeScrollWrapper',
  components: { CategoryIcons },
  setup() {
    const wrapper = ref();

    onMounted(() => {
      new BetterScroll(wrapper.value, options);
    });

    return { wrapper };
  },
};
</script>

<style lang="scss" scoped></style>
