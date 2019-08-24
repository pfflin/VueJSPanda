<template>
  <div>
      <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Username</label>
    <input type="email" v-model="username" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" v-model="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <button @click.prevent="login()" type="submit" class="btn btn-primary">Login</button>
</form>
  </div>
</template>

<script>
   export default {
  name: 'login',
  methods: {
      login(){
             this.$store.dispatch('login')
             .then(r => {
                 console.log(r)
                 this.$router.push({path:'/home'})
             })
      }
    },
    computed: {
           username:{
            get(){
                return this.$store.state.username;
            },
            set(value){
                this.$store.commit('username',value)
            }
        },
        password:{
            get(){
                return this.$store.getters.password;
            },
            set(value){
                this.$store.commit('password',value)
            }
        }
    },
    mounted(){
        this.$store.commit('loader', false)
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-group{
    width: 50%;
    margin: auto;
}
.btn{
    margin: 15px;
}
</style>
