<template>
    <div>
        <button v-for="tab in buttonTab" :key="tab" @click="$emit('change-tab', tab)"> {{ tab }}</button>
    </div>
</template>

<script>
    export default {
        name: "MultiTabTemplate",
        props: {
            currentTab: {
                type: String,
                required: true
            },
            buttonTab: {
                type: Array,
                required: true
            }
        },
    }
</script>

<style scoped>
    button {
        padding: 1.5em;
        background-color: rgba(255,255,255,0);
        border: none;
        color: floralwhite;
    }
    button:hover {
        background-color: #222;
    }

    div {
        width: 100%;
        background-color: #444;
        box-shadow:  0 4px 8px 0 rgba(0, 0, 0, 0.3);
    }
</style>
