<template>
  <div class="container">
    Index
    <router-link :to="{ name: 'detail' }">to detail</router-link>
    <router-link :to="{ name: 'city' }">to city</router-link>
    <router-link :to="{ name: 'search' }">to search</router-link>
    <router-link :to="{ name: 'list' }">to list</router-link>
  </div>
</template>

<script>
export default {
  name: 'Index',
  setup() {
    return {};
  },
};
</script>

<style lang="scss"></style>
