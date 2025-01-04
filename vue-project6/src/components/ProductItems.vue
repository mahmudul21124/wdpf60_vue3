<template>
    <div class="box">
        <h1> {{ productName }} </h1>
        <img src="/src/favourite.png" alt="" width="20" v-show="isFavourite">
        <h3> {{ productDesc }} </h3>
    </div>
</template>

<script>
    export default {
        props: [
            'productName',
            'productDesc',
            'isFavourite'
        ]
    }
</script>

<style scoped>
    .box{
        height: 250px;
        width: 200px;
        border: 1px solid lightgreen;
    }
    img{
        float: right;
    }
</style>