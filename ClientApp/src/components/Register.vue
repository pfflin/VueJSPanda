<template>
  <div>
      <p  v-if="message" class="alert alert-danger">{{message}}</p>
      <form>
  <div class="form-group">
    <label for="username">Username</label>
    <input v-model.lazy="$v.username.$model" class="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter Name">
    <p v-if="$v.username.$error" class="alert alert-danger">Not valid Username</p>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" v-model="$v.password.$model" class="form-control" id="exampleInputPassword1" placeholder="Password">
     <p v-if="$v.password.$error" class="alert alert-danger">Password must be more than 6 symbols</p>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Repeat Password</label>
    <input type="password" v-model="$v.confirmPassword.$model" class="form-control" id="exampleInputPassword2" placeholder="Repeat Password">
     <p v-if="$v.confirmPassword.$error" class="alert alert-danger">Passwords must match</p>
  </div>
  <button @click.prevent="register()" :disabled="$v.$invalid" type="submit" class="btn btn-primary">Register</button>
</form>
  </div>
</template>

<script>
const confirm = (value, vm) => (value == vm.password);
import {required, email, minLength} from 'vuelidate/lib/validators'
import{ registerUser } from '@/services/authServices'
   export default {
  name: 'register',
  data : function () {
    return {
      mail: "",
      message:""
    }
  },
  mixins:[registerUser]
  ,
  methods: {
      onRegister:function(){
          this.register();
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
        this.$store.commit('loader', false)
    },
    validations:{
        password:{
            required:required,
            minLength: minLength(6)
    
        },
        confirmPassword:{
            required,
            confirm
        },
        username:{
            required:required,
            minLength: minLength(6)
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
