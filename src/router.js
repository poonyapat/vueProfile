import Vue from 'vue'
import Router from 'vue-router'
import HomeLayout from './components/layout/home/HomeLayout'
import ProjectLayout from './components/layout/project/ProjectLayout'
import ScheduleLayout from './components/layout/schedule/ScheduleLayout'
import ContactLayout from './components/layout/contact/ContactLayout'
import AboutLayout from './components/layout/about/AboutLayout'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            name: "Home",
            component: HomeLayout
        },
        {
            path: "/project",
            name: "Project",
            component: ProjectLayout
        },
        {
            path: "/schedule",
            name: "Schedule",
            component: ScheduleLayout
        },
        {
            path: "/contact",
            name: "Contact",
            component: ContactLayout
        },
        {
            path: "/about",
            name: "About",
            component: AboutLayout
        }
    ]
})
