<template>
  <div class="container">
    <common-header :title="title"></common-header>
    <search-input @on-search="onSearch"></search-input>
    <search-scroll-wrapper
      :search-datas="searchDatas"
      :status="mystatus"></search-scroll-wrapper>
  </div>
</template>

<script>
import CommonHeader from 'components/Header/Common.vue';
import SearchInput from 'components/SearchInput/index';
import SearchScrollWrapper from 'components/ScrollWrapper/Search';
import { ref } from 'vue';
export default {
  name: 'Search',
  components: { CommonHeader, SearchInput, SearchScrollWrapper },
  setup() {
    const title = '商家搜索';
    const searchDatas = ref([]);
    const mystatus = ref(0);
    function onSearch(data, status) {
      searchDatas.value = data;
      mystatus.value = status;
    }

    return { title, onSearch, searchDatas, mystatus };
  },
};
</script>

<style lang="scss"></style>
