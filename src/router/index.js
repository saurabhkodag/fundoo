import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Signup/Signup.vue'
// import Home from '@/components/Signup/Signup.vue'
import Signin from '../views/Signin/Signin.vue'
import forgetEmail from '../views/ForgetEmail/forget.vue'
import reset from '../views/resetpassword/reset.vue'
import dashboard from '../views/dashboard/dashboard'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Signin',
    name: 'Signin',
    component:Signin
  },
  {
    path: '/forgetemail',
    name: 'forgetemail',
    component:forgetEmail
  },
  {
    path: '/reset/:token',
    name: 'reset',
    component:reset
  },
  {
    path:'/dashboard',
    name:'dashboard',
    component:dashboard
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
