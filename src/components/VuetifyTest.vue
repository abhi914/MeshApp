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
    <v-toolbar-title class="black--text">Make A Difference</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-avatar>
      <img
        src="../assets/static.jpeg"
        alt="John"
      >
    </v-avatar>   
  </v-toolbar>
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
        href: 'examples',
        router: true,
        title: 'Example',
        icon: 'extension',
      }, {
        href: 'about',
        router: true,
        title: 'About',
        icon: 'domain',
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
