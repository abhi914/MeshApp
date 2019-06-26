<template lang="html">
  <v-card>
    <v-card-title>
      <h1>Voluteers Of Your City</h1>
      <v-spacer></v-spacer>
      <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details ></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="volunteersData" :search="search">
      <template v-slot:items="props">
        <td class="text-xs-left">{{ props.item.name }}</td>
        <td class="text-xs-left">{{ props.item.phone }}</td>
        <td class="text-xs-left">{{ props.item.city_name }}</td>
        <td class="text-xs-left">{{ props.item.email }}</td>
        <td class="text-xs-left">{{ props.item.address }}</td>        
      </template>
      <template v-slot:no-results>
        <v-alert :value="true" color="error" icon="warning">
          Your search for "{{ search }}" found no results.
        </v-alert>
      </template>
    </v-data-table>
  </v-card>
</template>

<script lang="js">
  import axios from 'axios'
  export default  {
    name: 'ViewAllVolunteer',
    props: [],    
    data() {
      return {  
        volunteersData: [],
        search: '',
        headers: [
          { text: 'Name', align: 'left', sortable: true, value: 'name' },
          { text: 'Phone', value: 'phone' },          
          { text: 'City', value: 'city_name' },
          { text: 'Email', value: 'email' },
          { text: 'Address', value: 'address' },
        ],        
      }
    },
    mounted() {
      // this.$store.dispatch('getUserData').
      // then(() => {                          
        const cityId = this.$store.getters.userData.city_id
        const groupId = this.$store.getters.userData.groups[0].id        

        axios.get('http://makeadiff.in/api/v1/users', {
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
