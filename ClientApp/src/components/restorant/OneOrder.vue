<template>
  <div>
    <div v-for="(item,index) of oneOrder" :key="index">
      Restaurant:{{item.restorant}}, Item:{{item.productName}}, Price {{item.productPrice}} BGN
   </div>
  </div>
</template>

<script>
export default {
  name: "",
  methods: {},
  props: ['oneOrder'],
  mounted() {
  }
};
</script>

<style scoped>

</style>
