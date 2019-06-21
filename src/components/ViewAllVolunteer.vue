<template lang="html">
    <h1> </h1>
</template>

<script lang="js">
import Vue from 'vue'
import axios from 'axios'
  export default  {
    name: 'ViewAllVolunteer',
    props: [],
    // mounted() {

    // },
    data() {
      return {  
        volunteersData: []       
           
      }
    },
    mounted() {
        
      this.$store.dispatch('getUserData').
        then(() => {                  
      })         

      const cityId = this.$store.getters.userData.cityId
      const groupId = this.$store.getters.userData.groupId
        
      axios.get('http://makeadiff.in/api/v1/users/1', {
        headers: {
          'Content-Type': 'application/json'               
        },
        auth: {
          username: 'data.simulation@makeadiff.in',
          password: 'pass'
        },
        params: {
          city_id: cityId,
          group_id: groupId
        }    
      }).
        then(response => {
          console.log(volunteersData)
          this.volunteersData = response.data.data.users
      })

    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped >
  
</style>
