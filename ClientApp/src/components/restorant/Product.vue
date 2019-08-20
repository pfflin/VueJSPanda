<template>
  <div>
    <div v-if="product"  class="thumb">
        <h2 class="blockEl" v-html="product.name"></h2>
        <div ><img :id="product.url" v-on:click.self="AddToCart($event)" class="thumbImg" :src="product.src"></div>
  </div>
  </div>
</template>

<script>
   export default {
  name: '',
  props:['product'],
  methods: {
      AddToCart:function(){

      }
    },
    computed: {
        
    },
    mounted(){
      
    }
}
</script>

<style scoped>

</style>
