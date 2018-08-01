<template>
    <box-template>
        <multi-tab-template :tabs="tabs"></multi-tab-template>
    </box-template>
</template>

<script>
    import MultiTabTemplate from "../template/multitab/MultiTabTemplate.vue"
    import BoxTemplate from "../template/BoxTemplate.vue"
    import {general, education, programming, experience, activity} from "../../data/HomeData";
    import {Tab} from "../template/multitab/Tab"

    export default {
        name: "HomeLayout",
        components: {
            BoxTemplate,
            MultiTabTemplate
        },
        data() {
            return {
                tabs: [
                    new Tab("General", general),
                    new Tab("Education", education),
                    new Tab("Programming", programming),
                    new Tab("Experience", experience),
                    new Tab("Activity", activity)
                ]
            }
        },
    }
</script>

<style scoped>

</style>
