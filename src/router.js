//导入路由模块
import VueRouter from 'vue-router';

//导入对应路由组件
import HomeContainer from "./components/tabbar/HomeContainer.vue";
import ShopcarContainer from "./components/tabbar/ShopcarContainer.vue";
import MemberContainer from "./components/tabbar/MemberContainer.vue";
import SearchContainer from "./components/tabbar/SearchContainer.vue";

// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    //配置路由规则
    {path:"/home",component:HomeContainer},
    {path:"/shopcar",component:ShopcarContainer},
    {path:"/search",component:SearchContainer},
    {path:"/member",component:MemberContainer}
  ],
  linkActiveClass:"mui-active", //覆盖默认的类
})

// 把路由对象暴露出去
export default router