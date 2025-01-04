<template>
    <div>
        <h1> {{ name }} </h1>
        <p> {{ message }} </p> <br>

        <!-- <p v-on:click="countClick">This is base a counter starting {{ counter }} </p> -->

        <!-- I can use v-on in the div tag also -->

        <p v-on:mouseover="countClick">This is base a counter starting {{ counter }} </p>   
    </div>

    <div>
        <h1>{{ foodName }}</h1>
        <h3> {{ foodDesc }} </h3>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: "Apple",
                message: "An apple a day keeps the doctor away",
                counter: 0
            }
        },

        methods: {
            countClick(){
                this.counter++;
            }
        },

        props:[
            'foodName',
            'foodDesc'
        ] 
    }
</script>

<style>

</style>