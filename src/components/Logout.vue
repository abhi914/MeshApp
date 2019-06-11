<template lang="html">

  <div class="logout">
    <b-modal id="modal-1" title="BootstrapVue">
      <b-alert v-model="showDismissibleAlert" variant="success" dismissible>
        Successfuly Logged Out :) 
      </b-alert>
    </b-modal>
    
  </div>

</template>

<script lang="js">
  export default  {
    name: 'Logout',
    props: [],
    mounted() {

    },
    data() {
      return {
         showDismissibleAlert: true
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
