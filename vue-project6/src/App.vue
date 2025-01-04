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
        <RouterLink to="/todo">TodoList</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>



</style>
