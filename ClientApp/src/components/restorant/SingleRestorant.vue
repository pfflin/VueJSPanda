<template>
  <div class="wrapper">
    <h1 v-html="singleRestaurantName"></h1>
    <Product v-for="(product, index) in products" :product="product" :index="index" :key="index"></Product>
  </div>
</template>

<script>
import Product from "./Product";
export default {
  name: "",
  components: { Product },
  methods: {},
  computed: {
    products: function() {
      return this.$store.state.products;
    },
    singleRestaurantName: function() {
      return this.$store.state.singleRestaurantName;
    }
  },
  mounted() {},
  beforeRouteEnter(to, from, next) {
    console.log(from.path);
    console.log("before enter");
    if (from.path == "/home") {
      next();
    } else {
      next("/");
    }
  }
};
</script>

<style scoped>
</style>
