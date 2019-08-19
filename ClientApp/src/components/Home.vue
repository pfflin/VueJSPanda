<template>
  <div>
    <p v-if="username">Welcome {{username}}</p>
    <h1>Home</h1>
  </div>
</template>

<script>
export default {
  name: "home",
  methods: {},
  computed: {
    username: function() {
      if (localStorage.getItem("username") !== null) {
        return localStorage.getItem("username");
      }
      return this.$store.getters.username;
    }
  },
  mounted() {
    $.ajax({
      url: "https://www.foodpanda.bg/en/city/varna?r=1",
      cache: false,
      success: function(html) {
        let arrayWithShit;
        let ul = html.match(/<ul class="vendor-list ".+<\/ul>/gms);
        var myRegexp = /<li>.+?<\/li>/gms,
          result;
        let nameRegex = /href="(.+?)".+src="(.+?)".+?span class="name fn">(.+?)<\/span>/gms;
        let arrayWithShit;
        let restaurants = [];
        while ((result = myRegexp.exec(ul))) {
          if(result[0].match(nameRegex)){
            arrayWithShit = nameRegex.exec(result[0]) ;

            restaurants.push({
              url:arrayWithShit[1],
              imgSrc:arrayWithShit[2],
              name:arrayWithShit[3]
            });
              console.log('Link:' + arrayWithShit[1]);
              console.log('Image Src:' + arrayWithShit[2]);
              console.log('Restorant:' + arrayWithShit[3]);
          }
          
        }
        this.$store.commit('restaurants', restaurants)
      }
    });
    console.log("mounted");
    //chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
