<template>
    <div id="app" :class="appStyle">
        <drop-down-menu />
        <router-view></router-view>
    </div>
</template>

<script>
    import MenuOnTop from './components/menu/MenuOnTop.vue'
    import DropDownMenu from './components/menu/DropDownMenu.vue'

    export default {
        name: 'app',
        components: {
            MenuOnTop, DropDownMenu,
        },
        data() {
            return {
                appStyle: "app01"
            }
        },
    }
</script>

<style src="./App.css">

</style>
