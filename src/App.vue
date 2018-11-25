<template>
    <div id="app" :class="appStyle">
        <drop-down-menu :menu-items="pages"/>
        <router-view></router-view>
    </div>
</template>

<script>
import DropDownMenu from "./components/menu/DropDownMenu";
import Link from "./components/menu/link";

export default {
  name: "app",
  components: {
    DropDownMenu
  },
  data() {
    return {
      appStyle: "app01",
      pages: [
        new Link("Home", "/"),
        new Link("Project", "/project"),
        new Link("Schedule", "/schedule"),
        new Link("Contact", "/contact"),
        new Link("About", "/about")
      ]
    };
  }
};
</script>

<style src="./App.css">
</style>
