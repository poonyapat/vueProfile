<template>
    <div ref="menu" :style="{position: position}">
        <a v-for="menuItem in menuItems" :key="menuItem">
            {{ menuItem }}
        </a>
    </div>
</template>

<script>
    export default {
        name: "MenuOnTop",
        props: {
            onTop: {
                type: Boolean,
                default: false
            },
        },
        data() {
            return {
                menuItems: ["Home", "Poject", "Contact", "About"],
                position: "relative"
            }
        },
        methods: {
            onScroll() {
                if (document.documentElement.scrollTop > this.$refs.menu.clientHeight) {
                    this.position = "fixed"
                }
                else {
                    this.position = "relative"
                }
            },
        },
        created() {
            window.addEventListener("scroll", this.onScroll)
        },
        destroyed() {
            window.removeEventListener("scroll", this.onScroll)
        },
    }
</script>

<style scoped>
div {
    width: 100%;
    background-color: black;
    overflow: hidden;
    position: relative;
}
a {
    font-size: 25px;
    color: #aaddee;
    background-color: black;
    text-decoration: none;
    border: none;
    display: block;
    padding: 8px 16px;
    float: left;
}

a:hover {
    color: black;
    background-color:#bbddff;
}

.relativePosition {
    position: relative;
}

.fixedPosition {
    position: fixed;
}
</style>
