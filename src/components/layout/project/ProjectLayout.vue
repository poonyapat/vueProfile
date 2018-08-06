<template>
    <div>
        <box-template style="text-align: center">
            <h1>Project</h1>
            <p>{{author}}</p>
        </box-template>
        <box-template>

        </box-template>
    </div>
</template>

<script>
    import BoxTemplate from "../../template/BoxTemplate"

    export default {
        name: "ProjectLayout",
        components: {
            BoxTemplate
        }
    }
</script>

<style scoped>

</style>