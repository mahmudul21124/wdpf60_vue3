<template>
    <div>
        <ul>
            <li v-for="x in flowers" :key="x"> {{ x.name }} || {{ x.url }} </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                flowers: [
                    {name: 'Flower1', url: 'abc1.jpg'},
                    {name: 'Flower2', url: 'abc2.jpg'},
                    {name: 'Flower3', url: 'abc3.jpg'},
                    {name: 'Flower4', url: 'abc4.jpg'},
                ]
            }
        },

        provide() {
            return {
                flowers: this.flowers
            }
        }
    }
</script>

<style scoped>

</style>