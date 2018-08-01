<template>
    <div>
        <button v-for="tab in buttonTab" :key="tab" @click="changeTab(tab)"> {{ tab }}</button>
        {{ currentTab}}
    </div>
</template>

<script>
    export default {
        name: "MultiTabTemplate",
        data() {
            return {
                buttonTab: ["Profile", "Education", "Programming", "Activity"],
                currentTab: "Profile"
            }
        },
        methods: {
            changeTab(tab) {
                this.currentTab = tab
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
