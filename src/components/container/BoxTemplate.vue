<template>
    <div :class="mainStyle">
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
        },
    }
</script>
