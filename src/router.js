import Vue from 'vue'
import Router from 'vue-router'
import HomeLayout from './components/layout/home/HomeLayout'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            name: "Home",
            component: HomeLayout
        },
    ]
})
