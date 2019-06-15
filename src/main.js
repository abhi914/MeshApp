import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import { store } from './store/store'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vuetify/dist/vuetify.min.css' 

import Profile from './components/Profile'
import Settings from './components/Settings'
import Logout from './components/Logout'
import CardGrouper from './components/CardGrouper'
import SubAppsRenderer from './components/SubAppsRenderer'
import VuetifyTest from './components/VuetifyTest'


Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(Vuetify)
Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/profile', name: 'profile', component: Profile },
    { path: '/settings', name: 'settings', component: Settings },
    { path: '/logout', name: 'logout', component: Logout },    
    { path: '/dashboard/:key', component: SubAppsRenderer },
    { path: '/dashboard', name: 'dashboard', component: CardGrouper },   
    { path: '/vuetest', component: VuetifyTest }, 
    // { path: '/', component: App }
  ]
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
