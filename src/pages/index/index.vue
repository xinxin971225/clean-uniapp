<template>
  <view class="content flex flex-col items-center justify-center">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title text-3xl font-bold underline">{{ title }}</text>
      <uni-badge text="1"></uni-badge>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const title = ref('Hello')
</script>

<style scoped lang="scss">
.logo {
  width: 200rpx;
  height: 200rpx;
  margin-top: 200rpx auto 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
