<template>
    <box-template>
        <multi-tab-menu :current-tab="currentTab" :tabs="tabs" v-on:change-tab="changeTab"></multi-tab-menu>
        <!--<container-a-template :data="currentTab.content"></container-a-template>-->
        <keep-alive>
            <component :is="currentTab.content" style="padding: 1em;"></component>
        </keep-alive>
    </box-template>
</template>

<script>
    import MultiTabMenu from "./MultiTabMenu"
    import BoxTemplate from "../template/BoxTemplate"
    import ContainerATemplate from "../template/ContainerATemplate"

    export default {
        name: "MultiTabTemplate",
        components:{
            BoxTemplate,
            MultiTabMenu,
            ContainerATemplate
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