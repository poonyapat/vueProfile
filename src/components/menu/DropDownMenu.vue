<template>
    <div class="drop-down-parent top-left-pos">
        <div class="drop-down-head">
            <div v-for="i in 3" :key="i" class="menu-icon"></div>
        </div>
        <nav class="drop-down-menu">
            <router-link v-for="menuItem in menuItems" :key="menuItem.caption" :to="menuItem.href"> {{ menuItem.caption }} </router-link>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "DropDownMenu",
        props: {
            menuItems: {
                type: Array,
                required: true
            },
        },
    }
</script>

<style scoped>

.drop-down-menu {
    background-color: #eeeeee;
    margin: 0px;
    max-width: 40px;
    height: 100vh;
    /* visibility: hidden; */
    max-height: 0px;
    overflow: hidden;
    transition: max-height 0.25s ease-out, max-width 0.5s;
}

.drop-down-menu a:hover{
    background-color: #cccccc;
}

.top-left-pos {
    position: fixed;
    left: 0px;
    top: 0px;
}

.drop-down-parent a {
    background-color: rgba(255, 255, 255, 0);
    color: #333333;
    padding: 20px 40px;
    text-decoration: none;
    display: block;
    transition: all 0.3s ease;
    text-align: center;

}
.drop-down-parent:hover .drop-down-menu {
    max-height: 100vh;
    max-width: 50vw;
    transition: max-height 0.15s ease-in, max-width 0.25s ease-in;
}

.drop-down-parent:hover .drop-down-head{
    max-height: 0px;
    overflow: hidden;
    transition: max-height 0.25s ease-in-out;
}

.drop-down-parent .drop-down-head{
    max-height: 200px;
}

.menu-icon {
    width: 100%;
    height: 5px;
    background-color: white;
    margin: 6px 0px;
}
</style>
