<template>
  <scroll-view :content-container-style="{paddingVertical: 40}">
    <view>
      <text class="header">All task</text>
      <List v-for="task in tasks" :key="task._id" :task="task"/>
    </view>
  </scroll-view>
</template>
<script>
import List from "./components/List";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://api-nodejs-todolist.herokuapp.com/",
  timeout: 1000,
  headers: {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM5OWM5MWU4MzM2NDAwMTcyYWI5MzkiLCJpYXQiOjE2MDcwNDk3MzJ9.noFHPLuBwvWmhuqVGP_3N6H4FuqAZuTsxb2rezDBgmg",
    "Content-Type": "application/json"
  }
})

export default {
  components: {List},
  data() {
    return {
      tasks: []
    }
  },
  async created() {
    await instance.get("task").then((response) => {
      this.tasks = response.data.data
    })
  }
}
</script>
<style>
.header {
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
}
</style>