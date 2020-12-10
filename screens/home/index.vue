<template>
  <nb-container>
    <nb-header>
      <nb-right>
        <nb-body>
          <nb-title>All Tasks</nb-title>
        </nb-body>
      </nb-right>
    </nb-header>
    <List></List>
    <nb-footer>
      <nb-footer-tab>
        <nb-button active full :onPress="navigateToFormAdd">
          <nb-text>New task</nb-text>
        </nb-button>
      </nb-footer-tab>
    </nb-footer>
  </nb-container>
</template>
<script>
import List from './../../components/List.vue';

export default {
  components: {List},
  props: {
    navigation: {type: Object}
  },
  data() {
    return {
      dialog: false
    }
  },
  methods: {
    navigateToFormAdd() {
      this.navigation.navigate('Add');
    },
    refreshTasks(e) {
      console.log(e);
    }
  }
}
</script>
<style>

</style>