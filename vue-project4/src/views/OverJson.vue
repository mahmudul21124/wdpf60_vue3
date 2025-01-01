<template>
    <div>
        <h1>From Json file</h1>
        <button @click="callData" >Click Here</button>
        <h1 v-if="myData"> <pre> {{ myData }} </pre> </h1>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                myData: null
            }
        },
        methods: {
            async callData(){
                
                let response = await fetch('src/assets/myData.json')
                this.myData = await response.json();

                // alert(response)
            }
        },
    }
</script>

