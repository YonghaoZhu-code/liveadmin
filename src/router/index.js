import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {   
    path: '/login',
    name: 'Login',
    component: () => import('../views/login.vue')
},
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/list',
        name: 'List',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../components/list.vue')
      },
      {
        path: '/apply',
        name: 'Apply',
        component: () => import('../components/apply.vue')
      },
      {
        path: '/limit',
        name: 'Limit',
        component: () => import('../components/limit.vue')
      },
      {
        path: '/setting',
        name: 'Setting',
        component: () => import('../components/setting.vue')
      },

    ]
  }

  
]

const router = new VueRouter({
  routes
})


//请求拦截
router.beforeEach((to, from, next) => {
 if (to.path!=='/login') {
   const admin= JSON.parse(window.sessionStorage.getItem('admin'))
   if(admin===null)  return next('/login')
   return next()
 }
  next()
})

export default router
