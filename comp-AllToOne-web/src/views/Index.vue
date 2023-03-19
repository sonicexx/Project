<template>
  <div class="container">
    <home-header></home-header>
  </div>
</template>

<script>
import HomeHeader from 'components/Header/Home';
export default {
  name: 'Index',
  components: { HomeHeader },
  setup() {
    return {};
  },
};
</script>

<style lang="scss"></style>
