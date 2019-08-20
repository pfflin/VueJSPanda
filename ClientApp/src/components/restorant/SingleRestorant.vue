<template>
  <div>
   <h1 :v-html="singleRestaurantName">{{singleRestaurantName}}</h1>
   <Product v-for="(product, index) in products" :product="product" :key="index"></Product>
  </div>
</template>

<script>

import Product from './Product'
   export default {
  name: '',
  components:{Product},
  methods: {
      
    },
    computed: {
        products: function(){
            return this.$store.state.products
        },
        singleRestaurantName: function(){
          console.log(this.$store.state)
          return this.$store.state.singleRestaurantName;
        }
    },
    mounted(){
      
    }
}
</script>

<style scoped>

</style>
