<template>
  <div class="swiper-wrap">
    <swiper :modules="modules" :pagination="{ clickable: true }">
      <swiper-slide v-for="(item, index) of picDatas" :key="index" :pic="item">
        <img class="swiper-img" :src="item" />
      </swiper-slide>
    </swiper>
    <div class="swiper-pagination" slot="pagination"></div>
  </div>
</template>

<script>
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'styles/swiper.min.css';
import 'styles/swiper.pagination.css';
export default {
  name: 'DetailSwiper',
  props: {
    picDatas: Array,
  },
  components: { Swiper, SwiperSlide },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>

<style lang="scss">
@import '~styles/variable.scss';

.swiper-pagination-bullet-active {
  background-color: $defaultGreen;
}
.swiper .swiper-slide {
  height: 2rem;
}
.swiper-img {
  width: 100%;
  height: 100%;
}
</style>
