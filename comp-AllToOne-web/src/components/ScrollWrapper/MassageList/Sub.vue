<template>
  <div class="massage-item">
    <router-link
      :to="{ name: 'detail', query: { field: 'massage', id: data.id } }">
      <div class="img">
        <img :src="data.img" :alt="data.name" />
      </div>
      <div class="info">
        <h1 class="title">{{ data.name }}</h1>
        <p class="item-score">
          <stars :starNum="data.star"></stars>
          <span class="score">{{ data.score }}分</span>
        </p>
        <p class="item-price">
          <span class="price-cover"
            >￥<span class="price">{{ data.default_price }}</span> 元</span
          >
          <span class="city-name">{{ data.city_name }}</span>
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
import Stars from 'components/ScrollWrapper/Sub/Stars';
export default {
  name: 'MassageItem',
  props: {
    data: Object,
  },
  components: { Stars },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import '~styles/mixin.scss';
@import '~styles/variable.scss';
.massage-item {
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

    .item-score {
      @include stars;
      height: 0.5rem;
    }

    .item-price {
      display: flex;
      justify-content: space-between;
      align-items: end;
      margin-top: 0.12rem;
      font-size: 0.16rem;

      .price {
        font-size: 0.22rem;
        color: $defaultBgColor;
      }
    }
  }
}
</style>
