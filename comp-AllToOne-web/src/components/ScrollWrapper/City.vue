<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <current-city></current-city>
      <city-list></city-list>
    </div>
  </div>
</template>

<script>
import CurrentCity from './CityList/CurrentCity';
import CityList from './CityList/index';

import { ref, onMounted } from 'vue';
import BetterScroll from 'better-scroll';
export default {
  name: 'CityScrollWrapper',
  components: { CurrentCity, CityList },
  setup() {
    const wrapper = ref();

    onMounted(() => {
      const options = {
        scrollY: true,
        scrollX: false,
        mouseWheel: true,
        click: true,
        taps: true,
      };
      new BetterScroll(wrapper.value, options);
    });

    return { wrapper };
  },
};
</script>

<style lang="scss" scoped></style>
