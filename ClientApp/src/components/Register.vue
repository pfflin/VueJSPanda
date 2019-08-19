<template>
  <div>
      <form>
  <div class="form-group">
    <label for="username">Username</label>
    <input v-model.lazy="$v.username.$model" class="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter Name">
    <p v-if="$v.username.$error" class="alert alert-danger">Not valid Email</p>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" v-model="$v.password.$model" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Repeat Password</label>
    <input type="password" v-model="$v.confirmPassword.$model" class="form-control" id="exampleInputPassword2" placeholder="Repeat Password">
  </div>
  <button @click.prevent="register()" type="submit" class="btn btn-primary">Register</button>
</form>
  </div>
</template>

<script>
import {required, email, minLength} from 'vuelidate/lib/validators'
import{ registerUser } from '@/services/authServices'
   export default {
  name: 'register',
  data : function () {
    return {
      mail: ""
    }
  },
  mixins:[registerUser]
  ,
  methods: {
      onRegister:function(){
          this.register()
      }
    },
    computed: {
        password:{
            get(){
                return this.$store.getters.password;
            },
            set(value){
                this.$store.commit('password',value)
            }
        },
        confirmPassword:{
            get(){
                return this.$store.getters.confirmPassword;
            },
            set(value){
                this.$store.commit('confirmPassword',value)
            }
        },
        username:{
            get(){
                return this.$store.state.username;
            },
            set(value){
                this.$store.commit('username',value)
            }
        },
        appKey(){
            return this.$store.getters.appKey;
        },
        appSecret(){
            return this.$store.getters.appSecret;
        }
    },
    mounted(){
    },
    validations:{
        password:{
            required,
    
        },
        confirmPassword:{
            required,
        },
        username:{
            required
        }
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
