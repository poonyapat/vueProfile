<template>
    <box-template>
        <multi-tab-menu :current-tab="currentTab" :tabs="tabs" @change-tab="changeTab"></multi-tab-menu>
        <keep-alive>
            <component :is="currentTab.content" style="padding: 1em;"></component>
        </keep-alive>
    </box-template>
</template>

<script>
    import MultiTabMenu from "./MultiTabMenu"
    import BoxTemplate from "../template/BoxTemplate"

    export default {
        name: "MultiTabTemplate",
        components:{
            BoxTemplate,
            MultiTabMenu,
        },
        props: {
            tabs: {
                type: Array,
                required: true
            },
        },
        data() {
            return {
                currentTab: this.tabs[0]
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