<template lang="html">

  <div  class = "full" >
    
    <div class="h-50" style=" background-color: #C8544F">
      <h1 align="center">{{$store.getters.responseAPI.title}} </h1>
     
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
    background: linear-gradient(to bottom, Red 30%, white 50%);
}
</style>
