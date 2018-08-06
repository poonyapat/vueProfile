<template>
    <div>
        <box-template style="text-align: center">
            <h1>Contact</h1>
            <p>{{author}}</p>
        </box-template>
    </div>
</template>

<script>
    import BoxTemplate from "../../template/BoxTemplate"

    export default {
        name: "ContactLayout",
        components: {
            BoxTemplate
        }
    }
</script>

<style scoped>

</style>