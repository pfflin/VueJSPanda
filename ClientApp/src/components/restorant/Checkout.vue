<template>
  <div>
   <h1>CheckOut</h1>
   <div>Your order is:</div>
   <div v-for="(item,index) in cart" :key="index">
      Restaurant:{{item.restorant}}, Item:{{item.productName}}, Price {{item.productPrice}} BGN
   </div>
   <h3>Total : {{totalPrice}} BGN</h3>
   <input type="button" value="Checkout ?">
  </div>
</template>

<script>
   export default {
  name: '',
  methods: {
      
    },
    computed: {
     cart:function(){
         return this.$store.state.cart
     },
     totalPrice:function(){
        return this.$store.getters.cartTotalSum;
     }
    },
    mounted(){
      
    }
}
</script>

<style scoped>

</style>
