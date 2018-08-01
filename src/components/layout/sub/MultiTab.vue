<template>
    <box-template>
        <multi-tab-template :current-tab="currentTab" :button-tab="buttonTab" v-on:change-tab="changeTab"></multi-tab-template>
        {{ currentTab }}
    </box-template>
</template>

<script>
    import MultiTabTemplate from "./MultiTabTemplate"
    import BoxTemplate from "./BoxTemplate.vue"

    export default {
        name: "MultiTab",
        components:{
            BoxTemplate,
            MultiTabTemplate
        },
        props: {
            currentTab: {
                type: String,
                required: true
            },
            buttonTab: {
                type: String,
                required: true
            }
        },
        methods: {
            changeTab(tab) {
                this.currentTab = tab
            }
        },
    }
</script>

<style scoped>

</style>