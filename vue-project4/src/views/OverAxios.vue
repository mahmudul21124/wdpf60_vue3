<template>
    <div>
        <h1>From Axios file</h1>
        <button @click="callData" >Click Here</button>
        <h1 v-if="myData"> <pre> {{ myData }} </pre> </h1>
    </div>
</template>

<script>
import axios from 'axios'
     export default {
        data() {
            return {
                myData: null
            }
        },
        methods: {
            async callData(){
                
                
                this.myData = await axios.get("https://random-data-api.com/api/v2/users");

                // alert(response)
            }
        },
    }
</script>

