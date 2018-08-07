<template>
    <a :href="url" :class="[mainStyle, addOnClass]"
       style="text-decoration: none; display: block">
        <slot></slot>
    </a>
</template>

<script>
    export default {
        name: "BoxLinkTemplate",
        props: {
            mainStyle: {
                type: String,
                default: "silver-field boxHover boxShadow blue-shadow"
            },
            url: {
                type: String,
                required: true
            },
            addOnClass: {
                type: String,
                default: null
            }
        },
    }
</script>

<style scoped>
    a:hover {
        background: linear-gradient(to bottom right, #aaeeff, #71b7ee);
        border: none;
    }
</style>