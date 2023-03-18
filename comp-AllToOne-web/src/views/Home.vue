<template>
  <div>Home</div>
</template>

<script>
import { useStore } from 'vuex';
export default {
  name: 'Home',
  setup() {
    const store = useStore();
    return {
      state: store.state,
    };
  },
};
</script>

<style lang="scss"></style>
