<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    

    <div class="wrapper">
      

      <nav>
        <RouterLink to="/">Home</RouterLink> | |
        <RouterLink to="/about">About</RouterLink> | |
        <RouterLink to="/food">FoodItems</RouterLink> | |
        <RouterLink to="/fruit">FruitPage</RouterLink> | |
        <RouterLink to="/todo">TodoList</RouterLink> | |
        <RouterLink to="/flower">Flower Item</RouterLink> | |
        <RouterLink to="/flowerlist">Flower List</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>



</style>
