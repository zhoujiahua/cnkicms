//导入路由模块
import VueRouter from 'vue-router';

//导入对应路由组件
import HomeContainer from "./components/tabbar/HomeContainer.vue";
import NewsContainer from "./components/tabbar/NewsContainer.vue";
import ClassifyContainer from "./components/tabbar/ClassifyContainer.vue";
import BookContainer from "./components/tabbar/BookContainer.vue";
import VideoContainer from "./components/tabbar/VideoContainer.vue";
import NewsInfo from "./components/news/NewsInfo.vue"
import NewsList from "./components/news/NewsList.vue";
import VideosList from "./components/vides/VideosList.vue";

// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    //配置路由规则
    {path:"/",redirect:"/home"},
    {path:"/home",component:HomeContainer},
    {path:"/news",component:NewsContainer},
    {path:"/classify",component:ClassifyContainer},
    {path:"/video",component:VideoContainer},
    {path:"/book",component:BookContainer},
    {path:"/home/newsinfo/:ID",component:NewsInfo},
    {path:"/home/newsList",component:NewsList},
    {path:"/home/videosList",component:VideosList}
  ],
  linkActiveClass:"mui-active", //覆盖默认的类
})

// 把路由对象暴露出去
export default router