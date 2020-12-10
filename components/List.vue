<template>

  <nb-content :scrollEnabled="true">
    <flat-list :data="tasks.data"
               :render-item="(item) => renderList(item.item)"
               :refreshing="refreshing"
               :onRefresh="_onRefresh"
    />
    <nb-list-item itemDivider>
      <nb-text>Completed</nb-text>
    </nb-list-item>
    <flat-list :data="completed.data"
               :render-item="(item) => renderList(item.item)"
               :refreshing="refreshing"
               :onRefresh="_onRefresh"
    />
  </nb-content>
</template>
<script>
import React from "react";
import TaskService from "./../services/task.service";
import {SwipeRow, Text, View, Icon, Button, Content} from "native-base";

export default {
  data() {
    return {
      tasks: [],
      completed: [],
      refreshing: false,
      timer: '',
    }
  },
  created() {
    this.getTasks();
    this.getCompleted();
  },
  methods: {
    async getTasks() {
      this.tasks = await TaskService.getAll();
    },
    async getCompleted() {
      this.completed = await TaskService.getTasksCompleted();
    },
    async removeItem(id) {
      let data = this.tasks.data;
      let data2 = this.completed.data;
      const deleted = await TaskService.deleteTask(id);
      if (deleted.success) {
        data = data.filter((item) => item._id !== id);
        data2 = data.filter((item) => item._id !== id);
        this.$nextTick(() => {
          this.getTasks();
          this.getCompleted();
        })
        console.log(data, data2);
        alert("Successfully removed")
      }
    },
    async completeTask(id) {
      const completeTask = {
        completed: true
      }
      try {
        const updated = await TaskService.updateTask(id, completeTask)
        let data = this.tasks.data
        data.filter((item) => item._id !== updated._id);
        this.tasks.data = data;
        this.$nextTick(() =>{
          this.getTasks();
          this.getCompleted();
        })
      } catch (e) {
        console.log(e)
      }
    },
    renderList: function (item) {
      return (
          <SwipeRow
              leftOpenValue={75}
              rightOpenValue={-75}
              left={!item.completed ?
                  <Button success onPress={() => this.completeTask(item._id)}>
                    <Icon active name="checkmark"/>
                  </Button> : null
              }
              body={
                <View>
                  <Text style={{paddingLeft: 15}}>{item.description}</Text>
                </View>
              }
              right={
                <Button danger onPress={() => this.removeItem(item._id)}>
                  <Icon active name="trash"/>
                </Button>
              }>
            <Text>{item.description}</Text>
          </SwipeRow>
      )
    },
    _onRefresh() {
      this.refreshing = true;
      this.getTasks();
      this.getCompleted();
      this.refreshing = false;
    },
  },
  async mounted() {
    await this.getTasks();
    await this.getCompleted();
  },
}
</script>