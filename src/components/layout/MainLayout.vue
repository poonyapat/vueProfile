<template>
    <div>
        <!-- header -->
        <div class="boxShadow">
            <h1> {{ banner }} </h1>
            <p> {{ author }} </p>
        </div>
        <!-- content -->
        <div class="boxShadow">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MainLayout",
        props: {
            banner: String
        },
        data() {
            return {
                author: "Poonyapat Yanvisit"
            }
        },
    }
</script>

<style scoped>
</style>
