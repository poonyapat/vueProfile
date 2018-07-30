<template>
    <div id="app">
        <drop-down-menu />
        <main-layout banner="Home">
            <img src="./assets/logo.png">
            <img src="./assets/logo.png">
            <img src="./assets/logo.png">
        </main-layout>
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
        }
    }
</script>

<style>
    body {
        margin: 0px;
        background-color: rgb(252, 245, 236);
    }

    #app {
        text-align: center;
        max-width: 50em;
        margin: auto;
        padding: 20px 0px;
        background-color: rgb(255, 236, 206);
        box-shadow: 10px 10px 20px gray;
    }

    .boxShadow {
        box-shadow: 5px 5px 20px gray;
        margin: 20px;
        background-color: rgb(250, 218, 182);
        padding: 20px;
    }
</style>
