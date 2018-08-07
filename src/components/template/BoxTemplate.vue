<template>
    <div :class="mainStyle" :style="{background: bgColor}">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "BoxTemplate",
        props: {
            mainStyle: {
                type: String,
                default: "boxShadow"
            },
            bgColor: {
                type: String,
                default: "linear-gradient(to bottom right, #ffffff, #e0e0e0)"
                // default: "rgba(253, 191, 120, 0.25)"
            }
        },
    }
</script>
