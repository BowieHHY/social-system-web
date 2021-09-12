import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from "../components/Landing";
import Login from "../components/Login";
import Register from "../components/Register";
import Dashboard from "../components/Dashboard";
import CreateProfile from "../components/CreateProfile";
import EditProfile from "../components/EditProfile";
import AddExperience from "../components/AddExperience";
import AddEducation from "../components/AddEducation";
import Profiles from "../components/Profiles";
import Profile from "../components/profile/Profile";
import Posts from "../components/posts/Posts";
import Post from "../components/posts/Post";

Vue.use(VueRouter);


const router = new VueRouter({
  mode:"history",
    linkActiveClass:'active',
    routes:[
        {path:'*',redirect:'/'},
        {path:'/',component:Landing},
        {path:'/login',component:Login},
        {path:'/register',component:Register},
        {path:'/dashboard',component:Dashboard},
        {path:'/create-profile',component:CreateProfile},
        {path:'/edit-profile',component:EditProfile},
        {path:'/add-experience',component:AddExperience},
        {path:'/add-education',component:AddEducation},
        {path:'/profiles',component:Profiles},
        {path:'/profile/:handle',component:Profile},
        {path:'/feed',component:Posts},
        { path: '/post/:id', component: Post }
    ]
});

//配置全局守卫
router.beforeEach((to,from,next)=>{
//    获取token
    const isLogin=localStorage.jwtToken?true:false;
    if (to.path=='/login'||to.path=="/register"||to.path=='/'){
        next();
    }else{
        isLogin?next():next("/login");
    }
})

export default router;


