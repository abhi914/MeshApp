<template lang="html">  
    <CardRenderer :render-data="valArr" />
</template>

<script lang="js">
import CardRenderer from './CardRenderer'

    export default  {
        name: 'SubAppsRenderer',
        components: {
            CardRenderer
        },
        props: [],

        data() {
            return {
                valArr: []
            }
        },
            
        mounted() {
            let key = this.findLastPath()
            this.$store.dispatch('getAppsData').
                then((response)=> {                                 
                let value = response.data.data.menu.filter((elem) => {
                    if(elem.name == key) return elem  
                })

                if (value && value.length > 0)
                    this.valArr = value[0].apps                
                    
            })     
        },
        methods: {
            findLastPath() {
                let url  = window.location.pathname.split("/").slice(-1)[0];
                url = url.replace('%20', " ")
                return url
            }       
        },
        computed: {

        }
    }
</script>

<style scoped >
  
</style>
