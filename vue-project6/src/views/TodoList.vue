<template>
    <div>
        <ul>
            <todo-item v-for="x in contents" :key="x" :todo-name="x" />
        </ul>

        <input type="text" placeholder="Add new Content" v-model="newContent" @keydown.enter="addContent">
        <button v-on:click="addContent">Add</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                contents: [
                    'Item 1',
                    'Item 2',
                    'Item 3',
                    'Item 4',
                ],
                newContent: ''
            }
        },

        methods: {
            addContent(){
                this.contents.push(this.newContent);
                this.newContent = ''; 
            }
        },
    }
</script>

<style scoped>

</style>