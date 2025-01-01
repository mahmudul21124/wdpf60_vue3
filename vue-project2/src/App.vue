<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <NewYearVue /> <br>
  <FruitsItemsVue />
</template>

<script>
import FruitsItemsVue from './components/FruitsItems.vue'
import HelloWorld from './components/HelloWorld.vue'
import NewYearVue from './components/NewYear.vue'



export default {
  name: 'App',
  components: {
    HelloWorld,
    NewYearVue,
    FruitsItemsVue
  }
}
</script>

<style>
#myApp {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
