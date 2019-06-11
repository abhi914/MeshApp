import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Profile from './components/Profile'
import Settings from './components/Settings'
import Logout from './components/Logout'
import CardGrouper from './components/CardGrouper'


Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/profile', component: Profile },
    { path: '/settings', component: Settings },
    { path: '/logout', component: Logout },    
    { path: '/dashboard', component: CardGrouper },    
    { path: '/', component: App }
  ]
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
