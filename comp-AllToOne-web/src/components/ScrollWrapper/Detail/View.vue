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
    <detail-tag icon="icon-tip">
      {{ data.tip }}
    </detail-tag>

    <detail-big-tag title="详情介绍" icon="icon-intro" :font_size="0.14">
      {{ data.intro }}
    </detail-big-tag>

    <detail-big-tag title="购票信息" icon="icon-intro">
      {{ data.ticket_info }}
    </detail-big-tag>
  </div>
</template>

<script>
import DetailTag from './Sub/Tag';
import DetailBigTag from './Sub/BigTag';
import Stars from 'components/ScrollWrapper/Sub/Stars';

export default {
  name: 'DetailView',
  components: { DetailTag, Stars, DetailBigTag },
  props: {
    data: Object,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
