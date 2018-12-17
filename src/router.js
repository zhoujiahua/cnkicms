//导入路由模块
import VueRouter from 'vue-router';

//导入对应路由组件
import HomeContainer from "./components/tabbar/HomeContainer.vue";
import NewsContainer from "./components/tabbar/NewsContainer.vue";
import ClassifyContainer from "./components/tabbar/ClassifyContainer.vue";
import MemberContainer from "./components/tabbar/MemberContainer.vue";
import SearchContainer from "./components/tabbar/SearchContainer.vue";

// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    //配置路由规则
    {path:"/",redirect:"/home"},
    {path:"/home",component:HomeContainer},
    {path:"/news",component:NewsContainer},
    {path:"/classify",component:ClassifyContainer},
    {path:"/search",component:SearchContainer},
    {path:"/member",component:MemberContainer}
  ],
  linkActiveClass:"mui-active", //覆盖默认的类
})

// 把路由对象暴露出去
export default router