<template>
    <div>
        <!-- header -->
        <div :class="mainStyle" style="text-align: center">
            <h1> {{ banner }} </h1>
            <p> {{ author }} </p>
        </div>
        <!-- content -->
        <component :is="current"></component>
        <!-- footer -->
        <component v-if="footer != null" :is="footer"></component>
    </div>
</template>

<script>
    import BoxTemplate from "../container/BoxTemplate.vue"
    import HomeLayout from "./home/HomeLayout.vue"

    export default {
        name: "MainLayout",
        props: {
            banner: {
                type: String,
                default: "Empty"
            },
            footer: {
                type: String,
                default: null
            },
            mainStyle: {
                type: String,
                default: "boxShadow"
            },
        },
        data() {
            return {
                author: "Poonyapat Yanvisit [Poon]",
                current: "HomeLayout"
            }
        },
        components: {
            BoxTemplate, HomeLayout
        }
    }
</script>

<style scoped>

</style>
