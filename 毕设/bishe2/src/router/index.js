import Vue from 'vue'
import VueRouter from 'vue-router'

//引入组件 
import Home from './../views/Home'
import Posts from '../views/Posts'
import Sign from '../views/Sign'
import Enroll from '../views/Enroll'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/posts',
    component: Posts
  },
  {
    path: '/sign',
    component: Sign
  },
  {
    path: '/enroll',
    component: Enroll
  },
]

const router = new VueRouter({
  routes
})

export default router
