<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <template v-if="error">
        <error :errorShow="error"></error>
      </template>
      <template v-else>
        <detail-swiper :picDatas="detailData.pics"></detail-swiper>
        <component :is="'detail-' + field" :data="detailData"></component>
      </template>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll';
import { useRoute } from 'vue-router';
import { DetailModel } from 'models/detail';
import { onMounted, onActivated, ref } from 'vue';
import { jsonToArr, strToArr, replaceToSpace } from 'utils/tools';

import DetailSwiper from 'components/ScrollWrapper/Sub/Swiper.vue';
import DetailFood from './Detail/Food';
import DetailHotel from './Detail/Hotel';
import DetailMassage from './Detail/Massage';
import DetailKtv from './Detail/Ktv';
import DetailView from './Detail/View';

import Error from './Sub/Error.vue';

export default {
  name: 'DetailScrollWrapper',
  components: {
    DetailFood,
    DetailHotel,
    DetailMassage,
    DetailKtv,
    DetailView,
    DetailSwiper,
    Error,
  },
  setup() {
    const route = useRoute();

    const detailData = ref({});
    const error = ref(true);

    const field = ref('');
    let currentField = '';
    let currentId = '';

    const wrapper = ref();

    let scoll = null;
    onMounted(async () => {
      scoll = new BetterScroll(wrapper.value, { click: true });
      setTimeout(() => {
        scoll.refresh();
      }, 0);
    });

    onActivated(async () => {
      if (currentField !== route.query.field || currentId !== route.query.id) {
        currentField = route.query.field;
        field.value = currentField;
        currentId = route.query.id;
        console.log('%cdetail update', 'font-size:20px; color:orange');
        await _getDatas();
        scoll.refresh();
        return;
      }
      console.log('%cdetail activated', 'font-size:20px; color:orange');
    });

    function _getDatas() {
      const detailModel = new DetailModel();
      return detailModel
        .getDetailDatas(currentField, currentId)
        .then(({ status, data }) => {
          if (status === 0) {
            // 数据处理
            const tempData = data;
            tempData.pics && (tempData.pics = jsonToArr(tempData.pics));
            tempData.service &&
              (tempData.service = jsonToArr(tempData.service));
            tempData.comment_keyword &&
              (tempData.comment_keyword = strToArr(tempData.comment_keyword));
            tempData.recom && (tempData.recom = replaceToSpace(tempData.recom));
            detailData.value = tempData;
            console.log(detailData.value);

            error.value = false;
          } else {
            error.value = true;
          }
        });
    }

    return {
      wrapper,
      detailData,
      field,
      error,
    };
  },
};
</script>

<style lang="scss" scoped></style>
