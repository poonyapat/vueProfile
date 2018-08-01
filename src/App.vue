<template>
    <div id="app" :class="appStyle">
        <drop-down-menu />
        <main-layout banner="Home" />
    </div>
</template>

<script>
    import MenuOnTop from './components/menu/MenuOnTop.vue'
    import DropDownMenu from './components/menu/DropDownMenu.vue'
    import MainLayout from './components/layout/MainLayout.vue'

    export default {
        name: 'app',
        components: {
            MenuOnTop, DropDownMenu, 
            MainLayout
        },
        data() {
            return {
                appStyle: "app01"
            }
        },
    }
</script>

<style>
    body {
        margin: 0px;
        background-color: rgb(255, 247, 236);
    }

    #app {
        /* text-align: center; */
        max-width: 50em;
        margin: auto;
    }

    .app01 {
        background-color: rgb(255, 236, 206);
        box-shadow:  0 4px 8px 0 rgba(0, 0, 0, 0.3);
        padding: 20px 0px;
    }

    .boxShadow {
        box-shadow:  0 4px 8px 0 rgba(0, 0, 0, 0.3);
        margin: 15px;
        background-color: rgba(253, 191, 120, 0.288);
        padding: 15px;
    }

    .boxHover {
        transition: all 0.25s ease-in-out;
    }

    .boxHover:hover {
        transform: scale(1.1);
    }
</style>
