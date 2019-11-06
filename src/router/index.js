import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect:"/loginD",
  },
   {
    path:"/home",
    redirect:"/home/quan",
    component:()=>import('../views/home/home.vue'),
    children:[
      {
        path:"quan",
        component:()=>import('../views/home/quan/quan.vue')
      },
      {
        path:"my",
        component:()=>import('../views/home/my/my.vue')
      }
    ]
   },
   {
    path:"/loginD",
    component:()=>import('../views/loginD/loginD.vue'),
    meta:{
      title:"圈子登录",
      flag:false
    }
   },
   {
    path:"/loginZ",
    component:()=>import('../views/loginZ/loginZ.vue')
    ,meta:{
      title:"圈子注册",
      flag:true
    } 
  },
   {
    path:"/gai",
    component:()=>import('../views/gai/gai.vue')
    ,meta:{
      title:"更改密码",
      flag:true
    }  
  },
   {
     path:"/xinxi",
     component:()=>import('../views/xinxi/xinxi.vue')
     ,meta:{
      title:"个人信息",
      flag:true
    } 
    },
   {
    path:"/ping",
    component:()=>import('../views/ping/ping.vue')
    ,meta:{
      title:"我的评论",
      flag:true
    } 
  },
  {
    path:"/shou",
    component:()=>import('../views/shou/shou.vue')
    ,meta:{
      title:"我的收藏",
      flag:true
    } 
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
