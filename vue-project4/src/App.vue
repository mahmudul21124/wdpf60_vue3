<script setup>
import { RouterLink, RouterView } from "vue-router";
import FooterViewVue from "./components/FooterView.vue";
import HeaderView from './components/HeaderView.vue'

</script>

<template>
  <HeaderView />
  <RouterView />

  <FooterViewVue />
</template>

<style scoped>

</style>
