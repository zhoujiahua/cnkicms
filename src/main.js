// 入口文件
import Vue from 'vue';
//导入app 根组件
import app from "./App.vue";

//导入MUI 组件库
import "./lib/mui/css/mui.min.css"

//按需导入Mini ui
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);


var vm = new Vue({
    el: "#app",
    render: c => c(app)

})