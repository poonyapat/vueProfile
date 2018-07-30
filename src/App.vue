<template>
  <div id="app">
    <!-- <menu-on-top /> -->
    <drop-down-menu />
    <img src="./assets/logo.png">
  </div>
</template>

<script>
import MenuOnTop from './components/MenuOnTop.vue'
import DropDownMenu from './components/DropDownMenu.vue'

export default {
  name: 'app',
  components: {
    MenuOnTop, DropDownMenu
  }
}
</script>

<style>
body {
  margin: 0px
}

#app {
  text-align: center;
}
</style>
