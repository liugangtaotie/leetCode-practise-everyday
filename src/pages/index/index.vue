<template>
  <view class="content">
    <u-cell-group class="cell-model">
      <u-cell-item title="第一题：两数之和" @click="twoSum"></u-cell-item>
      <u-cell-item title="第一题：两数相加"></u-cell-item>
    </u-cell-group>
  </view>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      title: "Hello home",
    };
  },
  onLoad() {},
  methods: {
    twoSum() {
      console.info("2222222");
      uni.navigateTo({ url: `/pages/packageA/webview/webview` });
    },
  },
});
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  width: 100%;
}

.cell-model {
  width: 100%;
}
</style>
