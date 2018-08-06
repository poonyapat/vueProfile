import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.mixin({
    data() {
        return {
            get author(){
                return "Poonyapat Yanvisit [Poon]"
            }
        }
    },
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
