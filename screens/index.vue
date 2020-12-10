<template>
  <root>
    <app-navigation></app-navigation>
  </root>
</template>
<script>
import {
  createAppContainer,
  createStackNavigator,
} from "vue-native-router";
import {Root} from "native-base";
import HomeScreen from './home/index.vue';
import FormScreen from './add/index.vue';

const StackNavigator = createStackNavigator(
    {
      Home: HomeScreen,
      Add: FormScreen
    },
    {
      headerMode: 'none'
    }
);
const AppNavigation = createAppContainer(StackNavigator);

export default {
  components: {Root, AppNavigation}
}
</script>