<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <component :is="'detail-' + field"></component>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll';
import { useRoute } from 'vue-router';
import { DetailModel } from 'models/detail';
import { onMounted, onActivated, ref } from 'vue';

import DetailFood from './Detail/Food';
import DetailHotel from './Detail/Hotel';
import DetailMassage from './Detail/Massage';
import DetailKtv from './Detail/Ktv';
import DetailView from './Detail/View';

export default {
  name: 'DetailScrollWrapper',
  components: { DetailFood, DetailHotel, DetailMassage, DetailKtv, DetailView },
  setup() {
    const route = useRoute();

    const detailData = ref({});

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
            detailData.value = data;
            console.log(detailData.value);
          }
        });
    }

    return {
      wrapper,
      detailData,
      field,
    };
  },
};
</script>

<style lang="scss" scoped></style>
