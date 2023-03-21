<template>
  <div class="search-input">
    <div class="input-wrapper">
      <div class="iconfont icon-header-search"></div>
      <input
        type="text"
        class="input"
        :placeholder="placeholder"
        v-model="content"
        @input="onSearch" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { trimSpace, throttle } from 'utils/tools';
import { SearchModel } from 'models/search';

export default {
  name: 'SearchInput',
  emit: ['on-search'],
  setup(props, { emit }) {
    const { state, commit } = useStore();

    const content = ref('');
    const placeholder = '美食 / 景点 / 酒店 / 按摩 / KTV';
    const onSearch = throttle(getSearchDatas, 1000);
    const searchModel = new SearchModel();

    async function getSearchDatas() {
      const text = trimSpace(content.value);
      // if (!text) return;
      commit('setLoading', true);

      searchModel
        .searchAction(text, state.cityInfo.cityId)
        .then(({ data, status }) => {
          commit('setLoading', false);
          if (status === 0) {
            emit('on-search', data, status);
          } else {
            emit('on-search', {}, status);
          }
        });
    }

    return {
      placeholder,
      content,
      onSearch,
    };
  },
};
</script>

<style lang="scss" scoped>
.search-input {
  height: 0.44rem;
  padding: 0.06rem 0.15rem;
  background-color: #fff;
  box-sizing: border-box;

  .input-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    font-size: 0.16rem;

    .iconfont {
      position: absolute;
      top: 0.08rem;
      left: 0.08rem;
      font-size: 0.16rem;
    }
    .input {
      width: 100%;
      height: 100%;
      border: 1px solid #ddd;
      border-radius: 0.04rem;
      box-sizing: border-box;
      font-size: 0.14rem;
      text-indent: 0.32rem;
    }
  }
}
</style>
