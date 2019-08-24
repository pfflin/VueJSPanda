<template>
  <div>
   <h1>CheckOut</h1>
   <div>Confirm that this is your order :</div>
   <div v-for="(item,index) in cart" :key="index">
      Restaurant:{{item.restorant}}, Item:{{item.productName}}, Price {{item.productPrice}} BGN
   </div>
   <h3>Total : {{totalPrice}} BGN</h3>
   <input @click="makeOrder()" type="button" value="Complete Order">
  </div>
</template>

<script>
   export default {
  name: '',
  methods: {
      makeOrder(){
         this.$store.dispatch('makeOrder');
         console.log('ordered');
         
      }
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
