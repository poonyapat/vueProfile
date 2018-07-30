<template>
  <div id="app">
    <menu-on-top />
    <img src="./assets/logo.png">
  </div>
</template>

<script>
import MenuOnTop from './components/MenuOnTop.vue'

export default {
  name: 'app',
  components: {
    MenuOnTop
  }
}
</script>

<style>
body{
  margin: 0px;
}
</style>
