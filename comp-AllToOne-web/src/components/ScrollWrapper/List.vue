<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      {{ listDatas }}
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'ListScrollWrapper',
  setup() {
    const listDatas = ref([]);

    return { listDatas };
  },
};
</script>

<style lang="scss" scoped></style>
