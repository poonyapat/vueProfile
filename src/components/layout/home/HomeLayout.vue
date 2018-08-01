<template>
    <box-template>
        <multi-tab :button-tab="buttonTab" :current-tab="currentTab"></multi-tab>
    </box-template>
</template>

<script>
    import MultiTab from "../sub/MultiTab.vue"
    import BoxTemplate from "../sub/BoxTemplate.vue"

    export default {
        name: "HomeLayout",
        components: {
            BoxTemplate,
            MultiTab
        },
        data() {
            return {
                buttonTab: ["General", "Education", "Programming", "Activity"],
                currentTab: "General"
            }
        },
    }
</script>

<style scoped>

</style>
