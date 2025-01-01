<template>
  <div>
    <ul style="text-align: left">
      <li v-bind:key="x" v-for="x in fruits">{{ x }}</li>
      <hr />
      <li v-for="(x, index) in fruits" :key="index">{{ x }}</li>
      <hr />
    </ul>

    <p v-for="(x, index) in fruits">{{ index }}: "{{ x }}" <br /></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fruits: ["Apple", "Mango", "Guava", "Orange", "Grape", "Banana"],
    };
  },
};
</script>

<style></style>
