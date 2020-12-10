<template>
  <nb-container>
    <nb-header>
      <nb-left>
        <nb-button transparent :onPress="goToHomeScreen">
          <nb-icon name="arrow-back"/>
        </nb-button>
      </nb-left>
      <nb-right>
        <nb-body>
          <nb-title>Add new task</nb-title>
        </nb-body>
      </nb-right>
    </nb-header>
    <nb-content :scrollEnabled="false">
      <FormTask></FormTask>
    </nb-content>
  </nb-container>
</template>

<script>
import FormTask from './../../components/Form.vue';

export default {
  components: {FormTask},
  props: {
    navigation: {type: Object}
  },
  methods: {
    goToHomeScreen() {
      this.navigation.navigate("Home");
    }
  }
}
</script>

<style>
.container {
  align-items: center;
  justify-content: center;
  flex: 1;
}
</style>