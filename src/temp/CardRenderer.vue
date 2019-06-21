<template lang="html">
  <div>       
    <b-container class="bv-example-row">      
       <b-row v-for="(row, i) of rows" v-bind:key="i">       
          <b-col v-for="(item, j) of row" v-bind:key="j" >
                    <!-- you card -->
              <b-card 
                :title="item.title" 
                img-src="item.icon" 
                img-alt="Image" 
                img-top 
                tag="article" 
                style="max-width: 20rem;" 
                class="mb-2"
              >
                <b-card-text>
                  <h1>{{item.name}}</h1>
                  <pre>{{item.description}}</pre>
                </b-card-text>
                  <b-button :href="'/dashboard/'+item.name" variant="primary">More</b-button>
              </b-card>                
          </b-col>
        </b-row>
    </b-container>    
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
        // rows: null
      }
    },
    mounted() {

      
    },
   
    methods: {

    },
    computed: {
      rows() {
        const itemsPerRow = 3
        let rows = []
        // eslint-disable-next-line
        // console.log(this.renderData)
        let arr = this.renderData
      
        for (let i = 0; i < arr.length; i += itemsPerRow) {          
          rows.push(this.renderData.slice(i, i + itemsPerRow))
        }
        // this.rows = rows    
        return rows
      }

    }
  }
</script>

<style scoped>
 
</style>
