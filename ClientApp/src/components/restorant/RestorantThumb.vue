<template>
  <div  class="thumb">
        <h2 class="blockEl" v-html="restaurant.name"></h2>
        <div ><img :id="restaurant.url" v-on:click.self="getRestorant($event)" class="thumbImg" :src="restaurant.imgSrc"></div>
        <div v-if="authentication">{{restaurant.orders}}</div>
  </div>
</template>

<script>
   export default {
  name: '',
  methods: {
      getRestorant(event){
          this.$store.dispatch('getSingleRestaurant',"https://www.foodpanda.bg" + event.target.id)
          let targetRest = this.$store.state.restaurants.filter(r => r.url == event.target.id);
          console.log(targetRest)
          this.$store.commit('singleRestaurantName',targetRest[0]['name'])
          this.$router.push({path:'/showRestaurant'});
      }
    },
    props:{
      'restaurant':Object,
      'index':Number
      },
    computed: {
     
    },
    mounted(){
      
    }
}
</script>

<style scoped>
.thumb{
    margin: 2vh;
    width: 22%;
    height: 30vh;
    display: inline-table;
    
}
.thumbImg{
     display: block;
  max-width:100%;
  max-height:30vh;
  width: auto;
  height: auto;
  margin: auto;
  cursor: pointer;
}
.blockEl{
    text-shadow: 2px 2px 2px ivory;
   position: absolute;
    width: 20%;
}
</style>
