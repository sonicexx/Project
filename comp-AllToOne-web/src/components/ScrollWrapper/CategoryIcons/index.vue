<template>
  <div class="icons-wrapper">
    <category-icon-sub
      v-for="item of fieldList"
      :key="item.id"
      :bgColor="item.bgColor"
      :field="item.field"
      :icon="item.icon"
      :icon-text="item.iconText"></category-icon-sub>
  </div>
</template>

<script>
import fields from 'data/fields';
import CategoryIconSub from './Sub';
export default {
  name: 'CategoryIcons',
  components: { CategoryIconSub },
  setup() {
    const fieldList = fields;

    return { fieldList };
  },
};
</script>

<style lang="scss" scoped>
@import '~styles/mixin.scss';
.icons-wrapper {
  @include flex-row;
  flex-wrap: wrap;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
}
</style>
