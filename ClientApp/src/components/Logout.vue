<template>
  <div>
  </div>
</template>

<script>
   export default {
  name: 'home',
  methods: {
    },
    computed: {
    },
    mounted(){
        localStorage.removeItem("authtoken");
        localStorage.removeItem("username");
        this.$store.commit('username','');
        this.$store.commit('authtoken','');
        this.$router.push({path:'/'});
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
