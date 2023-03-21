<template>
  <div class="container">
    <common-header :title="title + '列表'"></common-header>
    <list-scroll-wrapper></list-scroll-wrapper>
  </div>
</template>

<script>
import fields from 'data/fields';
import { useStore } from 'vuex';
import CommonHeader from 'components/Header/Common.vue';
import ListScrollWrapper from 'components/ScrollWrapper/List';
import { ref, watch } from 'vue';
export default {
  name: 'List',
  components: { CommonHeader, ListScrollWrapper },
  setup() {
    const { state } = useStore();

    const title = ref('一线通');

    fields.forEach(item => {
      if (item.field === state.field) {
        title.value = item.iconText;
      }
    });

    watch(
      () => state.field,
      (n, o) => {
        fields.forEach(item => {
          if (item.field === n) {
            title.value = item.iconText;
          }
        });
      }
    );

    return { title };
  },
};
</script>

<style lang="scss"></style>
