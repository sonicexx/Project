<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <list-tab></list-tab>
      <template v-if="!isRrr">
        <loading v-show="isLoading"></loading>
        <component
          v-show="!isLoading"
          :ListDatas="listDatas"
          :is="field + '-list'"></component>
      </template>
      <error v-else></error>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll';
import { onMounted, ref, onActivated, toRefs, watch } from 'vue';
import { useStore } from 'vuex';
import { ListModel } from 'models/list';
import { formatJSON } from 'utils/tools';

import ListTab from 'components/Tab/index';
import ViewList from './ViewList/index';
import FoodList from './FoodList/index';
import HotelList from './HotelList/index';
import MassageList from './MassageList/index';
import KtvList from './KtvList/index';
import Loading from './Sub/Loading';
import Error from './Sub/Error';

export default {
  name: 'ListScrollWrapper',
  components: {
    ListTab,
    ViewList,
    FoodList,
    HotelList,
    MassageList,
    KtvList,
    Loading,
    Error,
  },
  setup() {
    const wrapper = ref();
    const listDatas = ref([]);
    const store = useStore();
    const { field } = toRefs(store.state);

    const isLoading = ref(true);
    const isRrr = ref(false);

    let currentField = store.state.field;
    let currentCityId = store.state.cityInfo.cityId;
    // const tempListData = store.state.DataPool.listData;
    const tempListData = [];

    let scroll = null;

    watch(
      () => store.state.cityInfo.cityId,
      async () => {
        currentCityId = store.state.cityInfo.cityId;
        currentField = store.state.field;
        await getListDatas();
        scroll.refresh();
      }
    );

    onMounted(async () => {
      scroll = new BetterScroll(wrapper.value, { click: true });
      await getListDatas();
      setTimeout(() => {
        scroll.refresh();
      }, 0);
    });

    onActivated(async () => {
      if (
        currentCityId !== store.state.cityInfo.cityId ||
        currentField !== store.state.field
      ) {
        console.log('List update');
        currentCityId = store.state.cityInfo.cityId;
        currentField = store.state.field;
        await getListDatas();
        scroll.refresh();
        return;
      }
      scroll.refresh();
      console.log('List activated');
    });

    function getListDatas() {
      const temp = tempListData.find(
        item => item.field === currentField && item.cityId === currentCityId
      );
      if (temp) {
        console.log('list pool');
        const { data } = tempListData.find(
          item => item.field === currentField && item.cityId === currentCityId
        );
        listDatas.value = data;
        // console.log(listDatas.value);
        return;
      }

      console.log('list request');
      isLoading.value = true;
      const listModel = new ListModel();
      return listModel
        .getListDatas(currentField, currentCityId)
        .then(({ data, status }) => {
          if (status === 0) {
            // console.log(data);
            isLoading.value = false;
            const tempData = formatJSON(data, 'keyword');
            listDatas.value = tempData;
            const temp = tempListData.find(
              item =>
                item.field === currentField && item.cityId === currentCityId
            );
            if (temp) return;
            tempListData.push({
              field: currentField,
              cityId: currentCityId,
              data,
            });
          } else {
            isRrr.value = true;
          }
        });
    }

    return { listDatas, wrapper, field, isLoading, isRrr };
  },
};
</script>

<style lang="scss" scoped></style>
