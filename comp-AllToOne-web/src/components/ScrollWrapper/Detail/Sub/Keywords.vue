<template>
  <div class="keywords-cover">
    <sub-title
      title="关键评论词"
      icon="icon-recom"
      mycolor="#06c1ae"></sub-title>
    <ul class="keyword-wrapper">
      <li class="keyword" v-for="(item, index) of keywords" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
import SubTitle from 'components/ScrollWrapper/Sub/SubTitle';
export default {
  name: 'DetailKeywords',
  props: {
    keywords: {
      type: Array,
      default() {
        return ['加载中...'];
      },
    },
  },
  components: { SubTitle },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import '~styles/variable.scss';
@import '~styles/mixin.scss';
.keyword-wrapper {
  display: flex;
  flex-wrap: wrap;
  padding: 0.1rem 0.15rem;
  border-bottom: 1px solid #ddd;
  background-color: #fff;
  gap: 0.06rem;

  .keyword {
    padding: 0.04rem;
    border: 1px solid $defaultGreen;
    border-radius: 4px;
    color: $defaultGreen;
    font-size: 0.16rem;
  }
}
</style>
