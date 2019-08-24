<template>
  <div class="wrapper">
    <p v-if="username">Welcome {{username}}</p>
    <RestorantThumb v-for="(restaurant, index) in restaurants" :restaurant="restaurant" :index="index" :key="index">
    </RestorantThumb>
  </div>
</template>

<script>
import RestorantThumb from './restorant/RestorantThumb'
export default {
  name: "home",
  methods: {},
  components:{RestorantThumb},
  computed: {
    username: function() {
      if (localStorage.getItem("username") !== null) {
        return localStorage.getItem("username");
      }
      return this.$store.getters.username;
    },
    restaurants: function(){
      return this.$store.state.restaurants;
    }
  },
  mounted() {
    let that = this;
    this.$store.dispatch('getVarnaRestaurants')
    .then(r => {
      this.$store.dispatch('getOrders')
    });
   
    //chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper{
  width: 100%;
  height: 80vh;
  display: inline-block;
}
</style>
