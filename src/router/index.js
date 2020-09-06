import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../components/Login";
import Home from "../components/Home";
import System from "../views/System";
import Operator from "../views/Operator";
import Business from "../views/Business";
import Advertising from "../views/Advertising";
import User from '../views/System/users/user.vue';
import UserGroup from '../views/System/users/userGroup.vue'


Vue.use(VueRouter);
const VueRouterPush = VueRouter.prototype.push;
VueRouter.prototype.push = function(to) {
  return VueRouterPush.call(this, to).catch((err) => err);
};
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect:'System',
    children:[
     {
      path: "/system",
      name: "system",
      component: System,
      redirect:'/system/user',
      children:[
        {
         path: "/system/user",
         name: "User",
         component: User,
         meta: { title: "用户列表" },
        },
        {
          path: "/system/userGroup",
          name: "UserGroup",
          component: UserGroup,
          meta: { title: "用户组列表" },
         },
      ]
     },
     {
      path: "/operator",
      name: "operator",
      component: Operator,
      meta: { title: "运营中心" },
     },
     {
      path: "/business",
      name: "business",
      component: Business,
      meta: { title: "电商中心" },
     },
     {
      path: "/advertising",
      name: "advertising",
      component: Advertising,
      meta: { title: "广告机中心" },
     },
     
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { title: "登陆" },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to,from,next)=>{
  document.title = `${to.meta.title}  `;
  if(to.path == '/login' || to.path == '/register'){
    next();
  }else{
   const token = localStorage.getItem("token");
   if(!token){
    next('/login');
   }else {
    next();
   }
  }
})
export default router;
