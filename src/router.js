import Vue from 'vue'
import Router from 'vue-router'
import HomeView from './views/home/HomeView'
import ProjectView from './views/project/ProjectView'
import ScheduleView from './views/schedule/ScheduleView'
import ContactView from './views/contact/ContactView'
import AboutView from './views/about/AboutView'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            name: "Home",
            component: HomeView
        },
        {
            path: "/project",
            name: "Project",
            component: ProjectView
        },
        {
            path: "/schedule",
            name: "Schedule",
            component: ScheduleView
        },
        {
            path: "/contact",
            name: "Contact",
            component: ContactView
        },
        {
            path: "/about",
            name: "About",
            component: AboutView
        }
    ]
})
