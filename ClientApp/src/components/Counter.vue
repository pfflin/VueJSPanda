<template>
  <div>
      <h1>Welcome to Counter</h1>
      <div>{{counter}}</div>
      <button @click="incrementCounter">increment counter</button>

  </div>
</template>

<script>
   export default {
  name: 'corporate-panda',
  methods: {
      incrementCounter () {
        this.$store.dispatch('inrementAction', 1)
      }
    },
    computed: {
      counter () {
        return this.$store.getters.counter
      }
    },
    mounted(){
      this.$store.dispatch('getInfo')
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
