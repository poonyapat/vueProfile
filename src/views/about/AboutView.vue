<template>
    <div style="text-align: center">
        <box-template>
            <h1>About</h1>
            <p>{{author}}</p>
        </box-template>
        <box-template>
            <img src="../../assets/logo.png" alt="vue logo">
            <h2>Vue.js</h2>
        </box-template>
        <box-template>
            <h2>Created By</h2>
            <p style="line-height: 0.5em;">{{author}}</p>
            <p style="line-height: 0.5em;font-size: 0.75em;">August 2018</p>
        </box-template>
    </div>
</template>

<script>
    import BoxTemplate from "../../components/template/BoxTemplate"

    export default {
        name: "AboutView",
        components: {
            BoxTemplate
        }
    }
</script>

<style scoped>

</style>