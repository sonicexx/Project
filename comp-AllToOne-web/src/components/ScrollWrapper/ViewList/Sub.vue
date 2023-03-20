<template>
  <div class="view-item">
    <router-link
      :to="{ name: 'detail', query: { field: 'view', id: data.id } }">
      <div class="img">
        <img class="view-img" :src="data.img" :alt="data.name" />
      </div>
      <div class="info">
        <h1 class="title">{{ data.name }}</h1>
        <p class="stars">
          <stars :starNum="+data.star"></stars>
          <span class="score">{{ data.score }}分</span>
        </p>
        <p class="others">
          <span class="price">￥{{ data.default_price }} 起</span>
          <span class="item">{{ data.city_name }}</span>
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
import Stars from 'components/ScrollWrapper/Sub/Stars.vue';
export default {
  name: 'ViewItem',
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
.view-item {
  width: 50%;
  padding: 0.1rem;
  box-sizing: border-box;
  .img {
    width: 100%;
    height: 1.1rem;
    overflow: hidden;
    .view-img {
      width: 100%;
      min-height: 1.1rem;
    }
  }
  .info {
    .title {
      @include ellipse;
      height: 0.3rem;
      font-size: 0.16rem;
      line-height: 0.3rem;
      color: #000;
    }
    .stars {
      @include stars;
      height: 0.3rem;
      margin-block: 0.05rem;
    }

    .others {
      display: flex;
      justify-content: space-between;
      height: 0.3rem;
      line-height: 0.3rem;

      .item {
        font-size: 0.14rem;
      }
      .price {
        font-size: 0.2rem;
        color: $defaultGreen;
        vertical-align: -0.01rem;
      }
    }
  }
}
</style>
