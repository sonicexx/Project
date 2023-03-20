<template>
  <div class="detail-wrapper">
    <detail-tag icon="icon-name">
      {{ data.name }}
    </detail-tag>
    <detail-tag>
      <stars :starNum="data.star" :margin="0.08"></stars>
      <span class="score">{{ data.score }}分</span>
    </detail-tag>
    <detail-tag icon="icon-positioning">
      {{ data.address }}
    </detail-tag>
    <detail-tag icon="icon-price" textColor="#ff9d00">
      ￥<span class="price">{{ data.default_price }}</span
      >元起
    </detail-tag>
    <detail-tag icon="icon-datetime">
      {{ data.open_datetime }}
    </detail-tag>

    <detail-big-tag title="推荐菜品" icon="icon-recom">
      {{ data.recom }}
    </detail-big-tag>

    <detail-keywords :keywords="data.comment_keyword"></detail-keywords>
  </div>
</template>

<script>
import DetailTag from './Sub/Tag';
import DetailBigTag from './Sub/BigTag';
import DetailKeywords from './Sub/Keywords';
import Stars from 'components/ScrollWrapper/Sub/Stars';

export default {
  name: 'DetailFood',
  components: { DetailTag, Stars, DetailBigTag, DetailKeywords },
  props: {
    data: Object,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import '~styles/variable.scss';
.score {
  height: 0.19rem;
  line-height: 0.19rem;
  font-size: 0.16rem;
  font-weight: 600;
  color: $darkOrangeColor;
}
.price {
  font-size: 0.16rem;
  font-weight: 600;
}
</style>
