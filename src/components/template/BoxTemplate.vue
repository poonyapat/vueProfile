<template>
    <div :class="mainStyle" :style="{backgroundColor: bgColor}">
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
                default: "rgba(253, 191, 120, 0.25)"
            }
        },
    }
</script>
