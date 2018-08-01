<template>
    <box-template>
        <multi-tab-template></multi-tab-template>
    </box-template>
</template>

<script>
    import BoxTemplate from "./sub/BoxTemplate.vue"
    import MultiTabTemplate from "./sub/MultiTabTemplate.vue"

    export default {
        name: "HomeLayout",
        components: {
            BoxTemplate,
            MultiTabTemplate
        },
    }
</script>

<style scoped>

</style>
