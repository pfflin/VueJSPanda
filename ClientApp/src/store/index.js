import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0,
        email:'',
        password:'',
        confirmPassword:'',
        appKey:'kid_BJc2rdXXB',
        appSecret:'426c5080f5d34b46ae5b2de1367f7cf2',
        username:"",
        authtoken:""
      },
      getters: {
        counter (state) {
          return state.count
        },
        email(state){
          return state.email;
        },
        password(state){
          return state.password;
        },
        confirmPassword(state){
          return state.confirmPassword;
        },
        appKey(state){
          return state.appKey;
        },
        appSecret(state){
          return state.appSecret;
        },
        username(state){
          return state.username;
        }
      },mutations: {
        incrementCounter(state, payload) {
          state.count += payload
        },
        email(state,payload){
          state.email = payload;
        },
        password(state, payload){
          state.password = payload;
        },
        confirmPassword(state,payload){
          state.confirmPassword = payload;
        },
        username(state,payload){
          state.username = payload;
        },
        authtoken(state,payload){
          state.authtoken = payload;
        }
      },actions: {
        inrementAction ({commit}, payload) {
          commit('incrementCounter', payload)
        },
        getInfo ({commit}, payload){
            const baseURI = 'https://www.foodpanda.bg/'
            console.log('here')
             axios.get(baseURI)
              .then((result) => {
                console.log(result)
            
      })
        }
      }
})