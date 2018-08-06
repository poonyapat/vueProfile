<template>
    <box-template style="text-align: center">
        <h1>About</h1>
        <p>{{author}}</p>
    </box-template>
</template>

<script>
    import BoxTemplate from "../../template/BoxTemplate"
    export default {
        name: "AboutLayout",
        components: {
            BoxTemplate
        }
    }
</script>

<style scoped>

</style>