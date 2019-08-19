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
            const authString = btoa(`${this.username}:${this.password}`);
          const url = `https://baas.kinvey.com/user/${this.$store.getters.appKey}/login`;
          const headers = {
            method:'POST',  
            body: JSON.stringify({
               username: this.username,
               password: this.password
            }),
            headers: {
                Authorization: `Basic ${authString}`,
                'Content-Type': 'application/json'
            }
        }
        fetch(url,headers)
        .then(res=>res.json())
        .then(data=>{
            if(data._kmd.authtoken){
                console.log(data)
                if(data._kmd){
                    this.$store.commit('authtoken',data._kmd.authtoken)
                  localStorage.setItem('authtoken',data._kmd.authtoken);
                  this.$router.push({path:'/'});
                }
            }
            else{
                console.log('error')
            } 
        });
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
