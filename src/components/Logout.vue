<template lang="html">

<!-- Creates A Small Card at the middle of the screen -->

 <v-layout justify-center>   
    <v-dialog v-model="dialog" max-width="290" >      
      <v-card>
        <v-card-title class="headline">Successfully Logged Out!</v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary"  @click="dialog = false" > Okay !
            </v-btn>
          </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>

</template>

<script lang="js">
  export default  {
    name: 'Logout',
    props: [],
    mounted() {

    },
    data() {
      return {
        dialog: true
      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped>
  .logout {

  }
</style>
