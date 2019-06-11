<template lang="html">

  <div>       
    <b-container class="bv-example-row">      
      <!-- <b-row>
        <b-col>
          <b-card
            :title= "this.passer.title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
          <b-card-text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </b-card-text>

          <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
        </b-col>
        <b-col>
          <b-card
            :title= "this.passer.title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
          <b-card-text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </b-card-text>

          <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
        </b-col>
        <b-col>
          <b-card
            :title= "this.passer.title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
          <b-card-text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </b-card-text>

          <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
        </b-col>
      </b-row>  -->


      
       <b-row v-for="row in rows">
          <b-col v-for="item in row" >
                    <!-- you card -->
              <b-card 
                title="this.item.title" 
                img-src="https://picsum.photos/600/300/?image=25" 
                img-alt="Image" 
                img-top 
                tag="article" 
                style="max-width: 20rem;" 
                class="mb-2"
              >
                <b-card-text>
                  <h1>item data:</h1>
                  <pre>Something</pre>
                </b-card-text>
                  <b-button href="#" variant="primary">Go somewhere</b-button>
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
      passer: Object
    },
    mounted() {
    },
    data() {
      return {

      }
    },
    methods: {

    },
    computed: {
       rows() {
                const itemsPerRow = 3
                let rows = []
                let arr = this.passer.apps
                // eslint-disable-next-line
                // console.log(rows)
                for (let i = 0; i<arr.length; i+=itemsPerRow){
                    let row = []
                    for (let z = 0; z<itemsPerRow; z++) {
                        row.push(arr[z])
                    }
                    rows.push(row)
                }
                // eslint-disable-next-line
                console.log(rows)
                return rows
            }

    }
  }
</script>

<style scoped>
 
</style>
