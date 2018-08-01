<template>
    <div>
        <button v-for="tab in tabs" :key="tab.caption" @click="$emit('change-tab', tab)"
                :class="{onSelected: currentTab === tab}"> {{ tab.caption }}
        </button>
    </div>
</template>

<script>
    import {Tab} from "./Tab"

    export default {
        name: "MultiTabMenu",
        props: {
            currentTab: {
                type: Tab,
                required: true
            },
            tabs: {
                type: Array,
                required: true
            }
        },
    }
</script>

<style scoped>
    button {
        padding: 1.5em;
        background-color: rgba(255, 255, 255, 0);
        border: none;
        color: floralwhite;
    }

    button:hover {
        background-color: #222;
    }

    div {
        width: 100%;
        background-color: #444;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
    }

    .onSelected {
        background-color: #272727;
    }
</style>
