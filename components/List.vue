<template>
  <view class="text-container">
    <text>{{ task.description }}</text>
  </view>
</template>
<script>

export default {
  props: {
    task: Object
  },
  created() {
    console.log('task', this.task)
  }
}
</script>
<style>
.text-container {
  align-items: center;
  padding: 16px;
}
</style>