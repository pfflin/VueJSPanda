<template>
  <div>
    
    <h1>Welcome to Corporate Panda</h1>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="centerNav">
        <router-link to="/" class="navbar-brand" href="/">Home</router-link>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <template v-if="authentication">
              <li class="nav-item">
                <router-link to="/logout" class="nav-link" href="/logout">Logout</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/myOrder" class="nav-link" href="/myOrder">My Order</router-link>
              </li>
            </template>
            <template v-else>
              <li class="nav-item">
                <router-link to="/login" class="nav-link" href="/login">
                  Login
                  <span class="sr-only">(current)</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/register" class="nav-link" href="/register">Register</router-link>
              </li>
            </template>
          </ul>
        </div>
      </div>
      <router-link to="/checkout"  href="/register">
        <span class="cartNumber">{{price}} BGN</span>
        <img class="cartSide" src="/cart.png" />
      </router-link>
    </nav>
    
  </div>
</template>

<script>
export default {
  name: "",
  methods: {},
  computed: {
    price: function() {
      return this.$store.getters.cartTotalSum;
    }
  },
  mounted() {}
};
</script>

<style scoped>
.centerNav {
  margin: auto;
}
.cartSide {
  float: right;
  width: 50px;
  height: 50px;
}
.cartNumber {
  color: rgba(48, 80, 109, 0.507);
  font-weight: bold;
  font-size: 26px;
}
</style>
