import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';
import Restaurant from './components/restorant/SingleRestorant';
import Checkout from './components/restorant/Checkout';
import myOrder from './components/restorant/Order';
import VueRouter from 'vue-router';
import {isAuthenticated} from './services/authServices';

const routes = [
    {path:'/', redirect: '/home'},
    {path:'/home', component:Home},
    {path:'/login', component:Login},
    {path:'/register', component:Register},
    {path:'/logout', component:Logout},
    {path:'/showRestaurant', component:Restaurant},
    {path:'/checkout', component:Checkout},
    {path:'/myOrder', component:myOrder}
];

export const router = new VueRouter({
    mode: 'history',
    routes
  });

  router.beforeEach((to,from,next)=>{
      if(to.path == '/showRestaurant' ||  to.path == '/checkout' || to.path == '/myOrder'){
          console.log(isAuthenticated)
          if(isAuthenticated){
              next();
          }else{
              next('login');
          }
      }else{
        next();
      }
})