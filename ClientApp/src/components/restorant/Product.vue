<template>
  <div v-if="product" class="thumb">
    <h4>{{product.price}} BGN</h4>
    <div>
      <h3 class="blockEl" v-html="product.name"></h3>
    </div>
    <div>
      <img :id="index" v-on:click.self="AddToCart($event)" class="thumbImg" :src="product.src" />
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: ["product", "index"],
  methods: {
    AddToCart: function(event) {
      let cart = this.$store.state.cart;
      let product = this.$store.state.products[event.target.id];
      cart.push({
        restorant: this.$store.state.singleRestaurantName,
        productName: product["name"],
        productPrice: product["price"]
      });
      this.$store.commit("cart", cart);
    }
  },
  computed: {},
  mounted() {}
};
</script>

<style scoped>
.thumb {
  margin: 2vh;
  width: 22%;
  height: 30vh;
  display: inline-table;
}
.thumbImg {
  display: block;
  max-width: 100%;
  max-height: 30vh;
  width: auto;
  height: auto;
  margin: auto;
  cursor: pointer;
}
.blockEl {
  text-shadow: 2px 2px 2px ivory;
  position: absolute;
  width: 20%;
}
.blockElPrice {
  text-shadow: 2px 2px 2px ivory;
  position: absolute;
  width: 20%;
  top: 20px;
}
</style>
