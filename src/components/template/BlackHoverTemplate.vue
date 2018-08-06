<template>
    <div :class="mainStyle">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "BlackHoverTemplate",
        props: {
            mainStyle: {
                type: String,
                default: "blackField boxHover boxShadow"
            },
        },
    }
</script>