import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    email: '',
    password: '',
    confirmPassword: '',
    appKey: 'kid_BJc2rdXXB',
    appSecret: '426c5080f5d34b46ae5b2de1367f7cf2',
    username: "",
    authtoken: "",
    restaurants: [],
    products: [],
    singleRestaurantName:"",
    cart:[]
  },
  getters: {
    counter(state) {
      return state.count
    },
    email(state) {
      return state.email;
    },
    password(state) {
      return state.password;
    },
    confirmPassword(state) {
      return state.confirmPassword;
    },
    appKey(state) {
      return state.appKey;
    },
    appSecret(state) {
      return state.appSecret;
    },
    username(state) {
      return state.username;
    },
    cartTotalSum(state){
      if (state.cart.length == 0) {
        return 0;
      } else {
        let sum = 0;
        state.cart.forEach(element => {
          sum += element["productPrice"];
        });
        return sum;
      }
    }
  }, mutations: {
    incrementCounter(state, payload) {
      state.count += payload
    },
    email(state, payload) {
      state.email = payload;
    },
    password(state, payload) {
      state.password = payload;
    },
    confirmPassword(state, payload) {
      state.confirmPassword = payload;
    },
    username(state, payload) {
      state.username = payload;
    },
    authtoken(state, payload) {
      state.authtoken = payload;
    },
    restaurants(state, payload) {
      state.restaurants = payload
    },
    products: function (state, payload) {
      state.products = payload;
    },
    singleRestaurantName:function(state,payload){
      state.singleRestaurantName = payload;
    },cart:function(state, payload){
      state.cart = payload;
    }
  }, actions: {
    inrementAction({ commit }, payload) {
      commit('incrementCounter', payload)
    },
    getInfo({ commit }, payload) {
      const baseURI = 'https://www.foodpanda.bg/'
      console.log('here')
      axios.get(baseURI)
        .then((result) => {
          console.log(result)

        })
    },
    getVarnaRestaurants({ commit }, payload) {
      axios.get('https://www.foodpanda.bg/en/city/varna?r=1')
        .then(res => {
          let ul = res.data.match(/<ul class="vendor-list ".+<\/ul>/gms);
          var myRegexp = /<li>.+?<\/li>/gms,
            result;
          let nameRegex = /href="(.+?)".+src="(.+?)".+?span class="name fn">(.+?)<\/span>/gms;
          let arrayWithShit;
          let restaurants = [];
          while ((result = myRegexp.exec(ul))) {
            if (result[0].match(nameRegex)) {
              arrayWithShit = nameRegex.exec(result[0]);

              restaurants.push({
                url: arrayWithShit[1],
                imgSrc: arrayWithShit[2],
                name: arrayWithShit[3]
              });
            }
          }
          commit('restaurants', restaurants)
        });
    },
    getSingleRestaurant(instance, payload) {
         axios
        .get(payload)
        .then(res => {
          let regex = /<ul class="dish-list".+?<\/ul>/gms, ul;
          let myRegexp = /<li.+?<\/li>/gms, li;
          let liRegex = /.+?src="(.+?)".+?<span>(.+?)<.+?dish-description e-description">(.+?)<.+?class="price p-price">(.+?)</gms,productArr
          let products = [];
          while ((ul = regex.exec(res.data))) {
            while ((li = myRegexp.exec(ul[0]))) {
              while ((productArr = liRegex.exec(li[0]))) {
                let ob = {
                  src: productArr[1].trim(),
                  name: productArr[2].trim(),
                  desc: productArr[3].trim(),
                  price: Number(productArr[4].replace("BGN","").replace('from',"").trim())
                };
                products.push(ob);
              }
            }
          }
          console.log(products)
          instance.commit('products', products);
        });
    }
  }
})