<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import store from './store'
import Counter from './components/Counter.vue'
import Header from './components/common/Header.vue'
import Footer from './components/common/Footer.vue'

export default {
  name: 'app',
  components: {
    Counter,
    Header,
    Footer
  },
  store:store
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
