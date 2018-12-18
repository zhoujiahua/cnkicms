// 入口文件
import Vue from 'vue';
//导入app 根组件
import app from "./App.vue";

//配置路由
import VueRouter from "vue-router";
Vue.use(VueRouter);

//导入router模块
import router from "./router.js";

//导入vue-resource
import VueResource from "vue-resource";
Vue.use(VueResource);

//全局配置接口地址
Vue.http.options.root = 'http://192.168.1.168:12306';

//导入MUI 组件库
import "./lib/mui/css/mui.min.css";
import "./lib/mui/css/icons-extra.css";

//按需导入Mini ui
import { Header, Swipe, SwipeItem} from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//导入视频播放插件
import 'video.js/dist/video-js.css';
import 'vue-video-player/src/custom-theme.css';
import VideoPlayer from 'vue-video-player';
Vue.use(VideoPlayer);
//hls 支持
// import 'videojs-contrib-hls/dist/videojs-contrib-hls';


var vm = new Vue({
    el: "#app",
    render: c => c(app),
    router

})