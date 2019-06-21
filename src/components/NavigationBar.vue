<template lang="html">
<v-app>
  <v-navigation-drawer v-model="drawer" app temporary>
    <v-list>
      <v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title>
            <span>Menu</span>
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-divider></v-divider>
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
  <v-toolbar
    color="light"
  >

    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <!-- <v-toolbar-title class="black--text">Make A Difference</v-toolbar-title> -->
    <v-spacer></v-spacer>
    <v-avatar>
      <img
        src="../assets/static.jpeg"
        alt="John"
      >
    </v-avatar>   
  </v-toolbar>
  <v-content>
      <v-fade-transition mode="out-in">
        <router-view></router-view>
      </v-fade-transition>
  </v-content>
</v-app>
</template>

<script lang="js">
  export default  {
    name: 'profile',
    props: [],
    mounted() {

    },
    data() {
      return {
        drawer: false,
        items: [{
          href: 'dashboard',
          router: true,
          title: 'dashboard',
          icon: 'home',
        }, {
          href: 'profile',
          router: true,
          title: 'profile',
          icon: 'extension',
        }, 
        {
          href: 'settings',
          router: true,
          title: 'settings',
          icon: 'domain',
        },{
          href: 'logout',
          router: true,
          title: 'Logout',
          icon: 'domain',
        },
        {

        }],
      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped >
 
</style>
