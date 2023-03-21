<template>
  <div class="food-item">
    <router-link
      :to="{
        name: 'detail',
        query: { field: 'food', id: data.id },
      }">
      <div class="img">
        <img :src="data.img" :alt="data.name" />
      </div>
      <div class="info">
        <h1 class="title">{{ data.name }}</h1>
        <p class="stars">
          <stars :starNum="+data.star"></stars>
          <span class="price">￥{{ data.default_price }}/人</span>
        </p>
        <p class="keyword">
          <tags :tagsList="data.keyword"></tags>
        </p>
        <p class="address">
          <span class="field">{{ data.field }}</span>
          <span class="area">{{ data.area }}</span>
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
import Stars from 'components/ScrollWrapper/Sub/Stars.vue';
import Tags from 'components/ScrollWrapper/Sub/Tags.vue';

import { toRefs } from 'vue';
export default {
  name: 'FoodItem',
  props: {
    data: Object,
  },
  components: { Stars, Tags },
  setup(props) {
    const { data } = toRefs(props);
    for (let k in data.value) {
      if (k === 'keyword') {
        if (typeof data.value[k] === 'string') {
          data.value[k] = data.value[k].split(',');
        }
      }
    }
    return { data };
  },
};
</script>

<style lang="scss" scoped>
@import '~styles/mixin.scss';
@import '~styles/variable.scss';
.food-item {
  a {
    @include list-item-row;
  }
  .info {
    flex: 1;
    width: 2rem;
    .title {
      @include ellipse;
      font-size: 0.18rem;
      color: #000;
    }
    .stars {
      @include stars;
      height: 0.32rem;
      line-height: 0.32rem;
      .price {
        margin-left: 0.05rem;
      }
    }
    .keyword {
      margin-bottom: 0.05rem;
      height: 0.28rem;
    }
    .address {
      display: flex;
      justify-content: space-between;
      font-size: 0.14rem;
    }
  }
}
</style>
