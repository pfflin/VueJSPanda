<template>
  <div>
    <h3>Your Order For today is:</h3>  
    <OneOrder v-for="(item,index) in myOrder" :oneOrder="item.product" :index="index" :key="index">
    </OneOrder>  
    <div>Total: {{total}} BGN</div>
  </div>
</template>

<script>

import OneOrder from './OneOrder'
export default {
  name: "",
  methods: {},
  components:{OneOrder},
  computed: {
    myOrder(){
      return this.$store.state.myOrder;
    },
  total(){
      let totalPrice = 0;
    for (var ord of this.$store.state.myOrder){
      console.log(ord)
      for(var item of ord.product){
        console.log(item)
       totalPrice += item.productPrice;
      }
    }
    return totalPrice
  }
  },
  mounted() {
      this.$store.dispatch('getMyOrder')
  }
};
</script>

<style scoped>

</style>
