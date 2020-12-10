<template>
  <nb-container>
    <nb-content padder>
      <nb-form>
        <nb-item>
          <nb-input v-model="description" placeholder="Task"/>
        </nb-item>
        <nb-button active full :onPress="addTask">
          <nb-text>Add Task</nb-text>
        </nb-button>
      </nb-form>
    </nb-content>
  </nb-container>
</template>
<script>
import TaskService from './../services/task.service';

export default {
  data() {
    return {
      description: ""
    }
  },
  methods: {
    async addTask() {
      const newTask = {
        description: this.description,
      }
      this.description = "";
      try {
        const added = TaskService.createTask(newTask);
        this.$emit("added", added);
      } catch (e) {
        console.log(e)
      }

    }
  }
}
</script>