<template>
  <router-link :to="{ name: 'home' }">home</router-link>
  <router-link :to="{ name: 'about' }">about</router-link>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss"></style>
