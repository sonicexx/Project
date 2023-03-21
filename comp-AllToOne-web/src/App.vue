<template>
  <router-view v-slot="{ Component }">
    <keep-alive :include="['Index', 'Detail', 'List']">
      <component :is="Component"></component>
    </keep-alive>
  </router-view>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
html,
body,
#app,
.container {
  height: 100%;
}
</style>
