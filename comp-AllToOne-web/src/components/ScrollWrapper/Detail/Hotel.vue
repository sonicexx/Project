<template>
  <div class="detail-wrapper">
    DetailHotel
    <sub-title title="详细介绍" mycolor="#06c1ae" icon="icon-hotel"></sub-title>
  </div>
</template>

<script>
import SubTitle from 'components/ScrollWrapper/Sub/SubTitle';
export default {
  name: 'DetailHotel',
  components: { SubTitle },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
