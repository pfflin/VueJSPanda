<template>
  <div>
    <h3>Your Order For today is:</h3>  
    <OneOrder v-for="(item,index) in myOrder" :oneOrder="item" :index="index" :key="index">
        </OneOrder>  
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
      console.log(this.$store.state.myOrder)
      return this.$store.state.myOrder;
    }
  },
  mounted() {
      this.$store.dispatch('getMyOrder')
  }
};
</script>

<style scoped>

</style>
