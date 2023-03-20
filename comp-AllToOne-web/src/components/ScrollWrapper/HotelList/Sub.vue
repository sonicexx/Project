<template>
  <div class="hotel-item">
    <router-link
      :to="{ name: 'detail', query: { field: 'hotel', id: data.id } }">
      <div class="img">
        <img :src="data.img" :alt="data.name" />
      </div>
      <div class="info">
        <h1 class="title">{{ data.name }}</h1>
        <p class="score">{{ data.score }}分</p>
        <p class="area">{{ data.area }}</p>
        <p class="item">
          <span class="price-cover"
            >￥<span class="price">{{ data.default_price }}</span> 起</span
          >
          <span class="city_name">{{ data.city_name }}</span>
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HotelItem',
  props: {
    data: Object,
  },
};
</script>

<style lang="scss" scoped>
@import '~styles/mixin.scss';
@import '~styles/variable.scss';
.hotel-item {
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

    .score {
      height: 0.4rem;
      line-height: 0.4rem;
      font-size: 0.18rem;
      margin-left: 0;
    }

    .area {
      @include ellipse;
      margin-bottom: 0.1rem;
      font-size: 0.14rem;
      color: #ccc;
    }

    .item {
      display: flex;
      justify-content: space-between;
      font-size: 0.14rem;
      .price-cover {
        color: $defaultGreen;
      }
      .price {
        font-size: 0.2rem;
      }
    }
  }
}
</style>
