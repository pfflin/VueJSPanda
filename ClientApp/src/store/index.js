import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0
      },mutations: {
        incrementCounter(state, payload) {
          state.count += payload
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
      },
      getters: {
        counter (state) {
          return state.count
        }
      }
})