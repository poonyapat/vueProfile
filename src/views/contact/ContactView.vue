<template>
    <div>
        <box-template style="text-align: center">
            <h1>Contact</h1>
            <p>{{author}}</p>
        </box-template>
    </div>
</template>

<script>
    import BoxTemplate from "../../components/template/BoxTemplate"

    export default {
        name: "ContactView",
        components: {
            BoxTemplate
        }
    }
</script>

<style scoped>

</style>