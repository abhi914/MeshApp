<template lang="html">

  <div  class = "full" >
    
    
    <div>
      <v-layout align-center>
        <v-flex text-xs-center class="pink" outline>
          <h3 class="display-3">{{$store.getters.responseAPI.title}}</h3>
        </v-flex>
      </v-layout>
     
      <CardRenderer :renderData=this.$store.getters.responseAPI.apps />
    </div>
    
  </div>

</template>

<script>
import CardRenderer from "./CardRenderer.vue"
/* eslint-disable */
  export default  {
    name: 'CardGrouper',
    components: {
      CardRenderer
    },
    props: [],
    mounted() {

    },
    data() {
      return {
        
      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped >
  .full{
    width: 100vw;
    height: 90vh;
    /* background: linear-gradient(to bottom, #E91E63 30%, white 50%) !important; */
}
</style>
