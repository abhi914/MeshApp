<template lang="html">
    <!-- <h1>Something</h1> -->
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
            let key = this.findUrl()
            let value = this.$store.getters.responseAPI.apps.filter((elem) => {
                if(elem.name == key) return elem  
            })

            if (value && value.length > 0)
                this.valArr = value[0].apps
            //eslint-disable-next-line
            console.log(this.valArr)
        },
        methods: {
            findUrl() {
                let url  = window.location.pathname.split("/").slice(-1)[0];
                return url
            }       
        },
        computed: {

        }
    }
</script>

<style scoped >
  
</style>
