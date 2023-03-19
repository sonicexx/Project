<template>
  <div class="false-input">
    <router-link :to="{ name: 'search' }" custom v-slot="{ navigate }">
      <div class="input" @click="navigate">
        <p class="placeholder">
          <span class="iconfont icon-header-search"></span>
          <span class="placeholder-text">{{ placeholderText }}</span>
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'FalseInput',
  setup() {
    const placeholderText = '美食 / 景点 / 酒店 / 按摩 / KTV';

    return { placeholderText };
  },
};
</script>

<style lang="scss" scoped>
.false-input {
  flex: 1;
  padding: 0.06rem 0.1rem 0.06rem 0;
  box-sizing: border-box;
  .input {
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 5px;
    text-align: center;
    color: #999;
    .placeholder-text {
      font-size: 0.14rem;
    }
    .iconfont {
      font-size: 0.18rem;
      vertical-align: -0.02rem;
      margin-right: 0.05rem;
    }
  }
}
</style>
