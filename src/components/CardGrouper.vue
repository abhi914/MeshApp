<template lang="html">

  <div  class = "full" >
    
    <div class="h-50" style=" background-color: #C8544F">
      <h1 align="center">{{this.passingObject.title}} </h1>
     
      <CardRenderer v-bind:passer="passingObject"/>
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
        passingObject: {
          "name": "Abhigyan Nayak",
          "email": "abhigyan.nayak@gmail.com",
          "city_id": 21,
          "user_type": ["ASV"],
          "group_id": 10,
          "user_id": 1,
          "title": "MeshApp",
          "apps": [
            {
              "name": "Donut",
              "link": "http://www.makeadiff.in/apps/donut",
              "icon": "http://www.makeadiff.in/icon1",
              "description": "some lorum epsum text",
              "apps": []
            },
            {
              "name": "tunod",
              "link": "http://www.makeadiff.in/apps/tunod",
              "icon": "http://www.makeadiff.in/icon2",
              "description": "some lorum epsum text",
              "apps": []     
            },
            {
              "name": "finance",
              "link": "http://www.makeadiff.in/apps/finance",
              "icon": "http://www.makeadiff.in/icon3",
              "description": "some lorum epsum text",
              "apps": [
                {
                  "name": "reimbursement",
                  "link": "http://www.makeadiff.in/apps/tunod",
                  "icon": "http://www.makeadiff.in/icon2",
                  "description": "some lorum epsum text",
	                "title": "finance",
                  "apps": []
                      
                },
                {
                  "name": "Salesforce",
                  "link": "http://www.makeadiff.in/apps/tunod",
                  "icon": "http://www.makeadiff.in/icon2",
                  "description": "some lorum epsum text",
		              "title": "finance",
                  "apps": []
                }
              ]
            }
          ]    
        }
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
