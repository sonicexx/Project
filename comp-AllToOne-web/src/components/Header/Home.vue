<template>
  <header class="header">
    <city-selector></city-selector>
    <false-input></false-input>
  </header>
</template>

<script>
import CitySelector from './sub/CitySelector.vue';
import FalseInput from './sub/FalseInput.vue';
export default {
  name: 'HomeHeader',
  components: { CitySelector, FalseInput },
};
</script>

<style lang="scss" scoped>
@import '~styles/mixin.scss';
@import '~styles/variable.scss';
.header {
  @include flex-row;
  height: $headerHeight;
  background-color: $defaultBgColor;
}
</style>
