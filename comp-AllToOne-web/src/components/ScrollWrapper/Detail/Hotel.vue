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

    <detail-big-tag title="商家服务" icon="icon-service">
      <p class="parking">停车场：{{ data.service.parking ? '有' : '无' }}</p>
      <p class="wifi">WIFI：{{ data.service.wifi ? '有' : '无' }}</p>
    </detail-big-tag>
  </div>
</template>

<script>
import DetailTag from './Sub/Tag';
import DetailBigTag from './Sub/BigTag';
import Stars from 'components/ScrollWrapper/Sub/Stars';
export default {
  name: 'DetailHotel',
  components: { DetailTag, Stars, DetailBigTag },
  props: {
    data: Object,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
p {
  text-indent: 0;
}
.parking {
  margin-bottom: 0.04rem;
}
</style>
