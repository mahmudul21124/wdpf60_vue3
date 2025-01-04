<script setup>

</script>

<template>
  
    <h1>Welcome Home</h1> <hr>
    <h3>Food item global component coming from main.js</h3>
    <food-items food-name="Moglai" food-desc="Vajapora" ></food-items>
    <food-items food-name="Pizza" />
    <food-items food-name="Ros Malai" food-desc="Mojadar" /> 
    <hr>

    <h3>Product item global component coming from main.js</h3>
    <product-items product-name="Jamil" product-desc="Akta kharap pola" v-bind:is-favourite="true"/>
    <product-items product-name="Saif" product-desc="Akta Valo pola" v-bind:is-favourite="false"/>
 
</template>

<style scoped>
#app > div {
  border: dashed black 1px;
  display: inline-block;
  margin: 10px;
  padding: 10px;
  background-color: lightgreen;
}

#app > div:hover {
  cursor: pointer;
}
</style>
