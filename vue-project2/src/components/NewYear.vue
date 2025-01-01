<template>
  <div>
    <h1 v-bind:class="ClassName">Happy New Year 2025</h1>
    <img v-bind:src="url" alt="ABC" width="100" /> <br />
    <img v-bind:src="url2" alt="abc" width="50" />
    <hr />

    <p v-if="productsInStock">in stock</p>

    <p v-else>not in stock</p>

    <hr />

    <div v-show="showDiv">This div tag can be hidden</div>
  </div>
</template>

<script>
export default {
  name: "NewYear",
  data() {
    return {
      ClassName: "head",
      url: "newYear.jpg",
      url2: require("@/assets/logo.png"),
      productsInStock: true,
      //   productsInStock: false,
      showDiv: true,
    };
  },
};
</script>

<style>
.head {
  font-size: 35px;
  color: red;
  background-color: aqua;
}

/* img{
        width: 100%;
    } */
</style>
