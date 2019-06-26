<template>
  <v-app>   


    <v-navigation-drawer  v-model="drawer" app temporary >
      <v-img
          src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
          gradient="to top right, #5176C8, #5176C8"
        >
        <v-layout pa-2 column fill-height class="lightbox gray--text">
          <v-spacer></v-spacer>
          <v-flex shrink>
            <div class="subheading white--text">{{this.$store.getters.userData.name}}</div>
            <div class="body-1 white--text ">{{this.$store.getters.userData.email}}</div>
          </v-flex>
        </v-layout>
      </v-img>
      <v-list>
        <template v-for="(item, index) in items">
          <v-list-tile :href="item.href" :to="{name: item.href}" :key="index">
            <v-list-tile-action>
              <v-icon light v-html="item.icon"></v-icon>                
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-html="item.title"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="white" light :fixed=true>
      <v-toolbar-side-icon  id="v-step-0" @click.stop="drawer = !drawer"></v-toolbar-side-icon>            
        <v-img  :src="require('@/assets/mad_logo.png')" max-width="80px" max-height="41px"  />                 
      <v-toolbar-title class="black--text justify-center" > 
        <v-tooltip right>
          <template v-slot:activator="{ on }">
            <h1  v-on="on">MeshApp</h1>
          </template>
          <!-- <span>Contains Mesh Of Everything you need!</span> -->
        </v-tooltip>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link :to="{ name: 'profile'}"  >
        <v-avatar href="/profile" color="primary">
          <span  class="white--text headline" style="text-decoration:none !important">{{this.avatar.slice(0,2)}}</span>         
        </v-avatar>   
      </router-link>
      
    </v-toolbar>
    <v-content style="margin-top: 60px;">
      <v-fade-transition mode="out-in">
        <router-view></router-view>
      </v-fade-transition>
    </v-content>
  </v-app>  
</template>

<script>
export default {
  name: 'app',
  components: {

  },
  data() {
    return {   
      avatar: '',    
      drawer: false,
      items: [
        {
          href: 'home',
          router: true,
          title: 'home',
          icon: 'grid_on',
        },
        {
          href: 'view_volunteers',
          router: true,
          title: 'View Volunteer',
          icon: 'group'
        },
        {
          href: 'profile',
          router: true,
          title: 'profile',
          icon: 'account_circle',
        }, 
        // {
        //   href: 'logout',
        //   router: true,
        //   title: 'Logout',
        //   icon: 'toggle_off',
        // }
        
      ],      
    }
  },
  props: [],  
  mounted() {  
    this.$store.dispatch('getUserData').
    then(() => {
      let findAvatar = this.$store.getters.userData.name.split(" ")
      let createAvatar = ''
      for(let i = 0; i < findAvatar.length; i++) {
        createAvatar = createAvatar + findAvatar[i].slice(0,1)
      }
      this.avatar = createAvatar
      console.log(this.avatar)     
      // this.$store.dispatch('getUserId', id)    
    })    
  }
   
}
  
</script>

<style scoped>

v-content {
  margin-top: 60px !important;
}
</style>
