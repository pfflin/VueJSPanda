import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Logout from './components/Logout'

export const routes = [
    {path:'/', component:Home},
    {path:'/login', component:Login},
    {path:'/register', component:Register},
    {path:'/logout', component:Logout}
    
];