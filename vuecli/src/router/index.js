import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './../views/Home'
import Test from './../views/Test'
import Test3 from '../views/Test3'
import Test5 from '../views/Test5'
import A from '@/views/A'
import B from '@/views/B'
import IVueX from '@/views/Vuex'
  


Vue.use(VueRouter)

const routes = [
  {
  //   path: '/',
  //   name: 'Home',
  //   component: Home 
  // },
  // {
  //   path:'/home',
  //   component:Home
  // },{
  //   path:'/test',
  //   component:Test  
  // },

  path:'/home',
    component:Home,
    children:[{
      path:'a',
      component:A
    },{
      path:'b',
      component:B
    }]
  },
  ,{
    path:'/test',
    name:'test',
    component:Test
  },
  ,{
    path:'/test3/:id',
    name:'test3',
    component:Test3
  },
  {
    path:'/test5',
    component:Test5,
    alias:'/aa'   /*alias 别名*/
  },
  {
    path:'/vuex',
    component:IVueX

  },
  {
    path:'/:id',
    redirect:'/test3/:id'
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
