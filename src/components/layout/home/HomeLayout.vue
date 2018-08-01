<template>
    <box-template>
        <multi-tab-template :tabs="tabs"></multi-tab-template>
    </box-template>
</template>

<script>
    import MultiTabTemplate from "../sub/multitab/MultiTabTemplate.vue"
    import BoxTemplate from "../sub/container/BoxTemplate.vue"
    import {general, education, programming, experience, activity} from "./HomeData";
    import {Tab} from "../sub/multitab/Tab"

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
