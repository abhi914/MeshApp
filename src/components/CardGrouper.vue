<template lang="html">
  <div class="full" >
    <div>   
      <CardRenderer :renderData=this.apps />
    </div>    
  </div>
</template>

<script>
import CardRenderer from "./CardRenderer.vue"

  export default  {
    name: 'CardGrouper',
    components: {
      CardRenderer
    },
    props: [],
    mounted() {
      this.$store.dispatch('getAppsData').
        then((response ) => {
          this.apps = response.data.data.menu          
        }).
        catch(() => {
          
      }) 

    },
    data() {
      return {
        apps: []
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
  }
  
</style>
