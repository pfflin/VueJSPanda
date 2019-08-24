const loginUser = function(username,authtoken) {
    localStorage.setItem('username', username);
    localStorage.setItem('authtoken',authtoken);

}

export const authService = {
    methods:{
        isAuthenticated: function(){
            console.log('check')
            return localStorage.getItem('authtoken') !== null || this.$store.authtoken !== ""
        }
    }
    ,computed:{
        authentication: function(){
            console.log('enter')
            console.log(this.$store.state.authtoken)
            if(this.$store.state.authtoken !== "" || localStorage.getItem('authtoken') !== null){
                if(!this.$store.state.authtoken || !this.$store.state.username){
                    this.$store.commit('username', localStorage.getItem('username'));
                    this.$store.commit('authtoken', localStorage.getItem('authtoken'));
                }

                return true;
            }
            else{
                return false;
            }
        }
    }
}

export const registerUser = {

    methods:{
        register: function(){
            const authString = btoa(`${this.appKey}:${this.appSecret}`);
            const url = `https://baas.kinvey.com/user/${this.appKey}`;
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
                loginUser(this.$store.state.username,data._kmd.authtoken);
                this.$store.commit('authtoken',data._kmd.authtoken)
                  this.$router.push({path:'/'});
              }else{
                  console.log('Email already exists');
              }
          })
        }
    }




}