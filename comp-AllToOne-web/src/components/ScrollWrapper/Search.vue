<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <loading v-show="isLoading"></loading>
      <div v-show="!isLoading">
        <error v-if="status === -1"></error>
        <template v-else>
          <no-data-tip v-if="noData"></no-data-tip>
          <template v-else v-for="(item, index) in searchDatas" :key="index">
            <template v-if="item.length > 0">
              <sub-title :title="keysFixed(index)"></sub-title>
              <component
                :is="index.replace(/Datas/g, '') + '-list'"
                :ListDatas="item"></component>
            </template>
          </template>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import fields from 'data/fields';
import { ref, onMounted, watch, toRefs, computed } from 'vue';
import BetterScroll from 'better-scroll';
import { useStore } from 'vuex';

import SubTitle from './Sub/SubTitle';
import FoodList from './FoodList/index';
import HotelList from './HotelList/index';
import KtvList from './KtvList/index';
import MassageList from './MassageList/index';
import ViewList from './ViewList/index';
import Error from './Sub/Error';
import Loading from './Sub/Loading';
import NoDataTip from './Sub/NoDataTip';

export default {
  name: 'SearchScrollWrapper',
  props: {
    searchDatas: Object,
    status: Number,
  },
  components: {
    SubTitle,
    FoodList,
    HotelList,
    KtvList,
    MassageList,
    ViewList,
    Error,
    Loading,
    NoDataTip,
  },
  setup(props) {
    let scroll = null;
    const wrapper = ref();
    const { searchDatas } = toRefs(props);
    const { state } = useStore();
    const isLoading = ref(false);

    const noData = ref(false);

    watch(
      () => state.isLoading,
      (n, o) => {
        isLoading.value = n;
      }
    );

    onMounted(() => {
      scroll = new BetterScroll(wrapper.value, { click: true });
    });

    function keysFixed(text) {
      const temp = text.replace(/Datas/g, '');
      return fields.find(item => item.field === temp).iconText + '结果：';
    }

    watch(
      () => searchDatas.value,
      () => {
        const temp = [];
        for (let k in searchDatas.value) {
          temp.push(...searchDatas.value[k]);
        }
        noData.value = temp.length ? false : true;

        setTimeout(() => {
          scroll.refresh();
        }, 0);
      }
    );

    return { wrapper, keysFixed, isLoading, noData };
  },
};
</script>

<style lang="scss" scoped></style>
