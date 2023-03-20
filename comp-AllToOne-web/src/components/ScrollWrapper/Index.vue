<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <category-icons></category-icons>
      <sub-title :title="homeTitle.viewDatas"></sub-title>
      <view-list :viewList="homeDatas.viewDatas"></view-list>

      <sub-title :title="homeTitle.foodDatas"></sub-title>
      <food-list :foodList="homeDatas.foodDatas"></food-list>

      <sub-title :title="homeTitle.hotelDatas"></sub-title>
      <hotel-list :hotelList="homeDatas.hotelDatas"></hotel-list>

      <sub-title :title="homeTitle.massageDatas"></sub-title>
      <massage-list :massageList="homeDatas.massageDatas"></massage-list>

      <sub-title :title="homeTitle.ktvDatas"></sub-title>
      <ktv-list :ktvList="homeDatas.ktvDatas"></ktv-list>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll';
import options from 'js/bScroll-config';
import { onMounted, ref, reactive, onActivated, onDeactivated } from 'vue';
import { useStore } from 'vuex';
import { IndexModel } from 'models/index';
import { homeDataCopy } from 'utils/tools';

import CategoryIcons from './CategoryIcons';
import SubTitle from 'components/ScrollWrapper/Sub/SubTitle.vue';
import ViewList from './ViewList/index';
import FoodList from './FoodList/index';
import HotelList from './HotelList/index';
import MassageList from './MassageList/index';
import KtvList from './KtvList/index';

export default {
  name: 'HomeScrollWrapper',
  components: {
    CategoryIcons,
    SubTitle,
    ViewList,
    FoodList,
    HotelList,
    MassageList,
    KtvList,
  },
  setup() {
    const store = useStore();
    const wrapper = ref();
    let currentCityId = 0;
    const homeTitle = {
      foodDatas: '推荐美食',
      hotelDatas: '推荐酒店',
      ktvDatas: '推荐KTV',
      viewDatas: '推荐景点',
      massageDatas: '推荐按摩',
    };

    const homeDatas = reactive({
      foodDatas: [],
      hotelDatas: [],
      ktvDatas: [],
      viewDatas: [],
      massageDatas: [],
    });

    onActivated(() => {
      if (currentCityId !== store.state.cityInfo.cityId) {
        console.log('home update');
        currentCityId = store.state.cityInfo.cityId;
        getHomeDatas(currentCityId);
        return;
      }
      console.log('home activated');
    });
    onDeactivated(() => {
      // console.log('de');
    });

    onMounted(async () => {
      console.log('mounted');
      await getHomeDatas(store.state.cityId);

      const scroll = new BetterScroll(wrapper.value, options);

      setTimeout(() => {
        scroll.refresh();
      }, 0);
    });

    function getHomeDatas(cityId) {
      const currentHomeDatas =
        store.state.DataPool[store.state.cityInfo.cityId];
      if (currentHomeDatas) {
        console.log('--------pool');
        homeDataCopy(homeDatas, currentHomeDatas);
        return;
      }
      const indexModel = new IndexModel();
      return indexModel.getHomeDatas(cityId).then(res => {
        console.log('--------request');
        if (res && res.status === 0) {
          homeDataCopy(homeDatas, res.data);
          store.state.DataPool[store.state.cityInfo.cityId] = res.data;
        }
      });
    }

    return { wrapper, homeTitle, homeDatas };
  },
};
</script>

<style lang="scss" scoped></style>
