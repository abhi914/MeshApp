<template lang="html">
  <div>        
    <v-container grid-list-sm>
      <v-layout wrap>

        <!-- Render Cards in column of 3 in a row -->
      
        <v-flex xs12 sm4 v-for="(item, index) in renderData" v-bind:key="index">          
          <v-card hover height="100%" class="card-outter" >
            <v-img class="white" height="200px" :src="item.icon_url">
              <v-container >
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox >                
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
            <v-card-title>
              <div>
                <p class="headline black--text">{{ item.name }}</p>            
                <span>{{ item.description }}</span>
              </div>
            </v-card-title>
            <v-card-actions class="card-actions">
              <v-btn  :href="'/home/'+item.name" color="primary" v-if="!!item.apps" > Know More</v-btn>
              <v-btn  :href="item.link" color="primary" v-else>Open!</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>     
      </v-layout>
    </v-container>  
  </div>

</template>

<script lang="js">
  export default  {
    name: 'CardRenderer',
    props: {
      renderData: {
        type: Array,
        required: true,
        default: () => ([]),
      }      
    },
     data() {
      return {
        
      }
    },
    mounted() {
      
      
    },
   
    methods: {
      
    },
    computed: {     
      
    }
  }
</script>

<style scoped>
.card-outter {
  position: relative;
  padding-bottom: 50px;
}
.card-actions {
  position: absolute;
  bottom: 0;
}

.v-card--hover {
  cursor: default;
}
 
</style>
