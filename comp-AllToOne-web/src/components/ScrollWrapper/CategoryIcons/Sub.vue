<template>
  <div class="icon-item" @click="onRouteTo(field, iconText)">
    <div class="icon" :style="{ backgroundColor: bgColor }">
      <span :class="['iconfont', icon]"></span>
    </div>
    <p class="icon-text">{{ iconText }}</p>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
export default {
  name: 'CategoryIconSub',
  props: {
    bgColor: String,
    icon: String,
    field: String,
    iconText: {
      type: String,
      default() {
        return '分类';
      },
    },
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    function onRouteTo(f, text) {
      store.commit('selectField', f);
      router.push({
        name: 'list',
        params: {
          category: text,
        },
      });
    }
    return { onRouteTo };
  },
};
</script>

<style lang="scss" scoped>
@import '~styles/mixin.scss';
.icon-item {
  @include flex-column;
  @include vh-center;
  width: 20%;
  padding-block: 0.2rem;

  .icon {
    @include vh-center;
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 50%;
    .iconfont {
      color: #fff;
      font-size: 0.26rem;
    }
  }
  .icon-text {
    font-size: 0.14rem;
    text-align: center;
    margin-top: 0.1rem;
  }
}
</style>
