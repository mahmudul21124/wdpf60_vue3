<template>
    <div>
        <h1>From text file</h1>
        <button @click="callData" >Click Here</button>
        <h1 v-if="myData">{{ myData }}</h1>
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
                
                let response = await fetch('src/assets/textfile.txt')
                this.myData = await response.text();

                // alert(response)
            }
        },
    }
</script>

