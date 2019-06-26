import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import VeeValidate from 'vee-validate';
import { store } from './store/store'
import VueTour from 'vue-tour'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vuetify/dist/vuetify.min.css' 
import './stylus/main.styl'
import "vue-material-design-icons/styles.css"
import 'vue-tour/dist/vue-tour.css'


import Profile from './components/Profile'
import Logout from './components/Logout'
import CardGrouper from './components/CardGrouper'
import SubAppsRenderer from './components/SubAppsRenderer'
import FileUploaderParent from './components/FileUploaderParent'
import ViewAllVolunteer from './components/ViewAllVolunteer'


Vue.use(BootstrapVue)
Vue.use(VeeValidate)
Vue.use(VueRouter)
Vue.use(VueTour)
Vue.use(Vuetify)
Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/profile', name: 'profile', component: Profile },    
    { path: '/logout', name: 'logout', component: Logout },    
    { path: '/home/:key', name: 'home_key', component: SubAppsRenderer },
    { path: '/viewvolunteer', name: 'view_volunteers', component: ViewAllVolunteer },
    { path: '/home', name: 'home', component: CardGrouper },       
    { path: '/fileupload', name: 'file_Upload', component: FileUploaderParent }, 
    { path: 'default', redirect: '/home'}
  ]
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
