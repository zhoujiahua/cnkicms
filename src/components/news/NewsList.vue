<template>
  <div class="news-list mui-content">
    <div class="top-img">
      <img src="../../images/list1.jpg">
    </div>
    <div class="mui-card">
      <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.ID">
          <a href="javascript:;">
            <img class="mui-media-object mui-pull-right" src="../../images/list1.jpg">
            <div class="mui-media-body">
                {{ item.Title }}
              <p class="mui-ellipsis">{{ item.Description }}</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import  { Toast } from 'mint-ui';
export default {
  data() {
    return {
        newsList:[]
    }
  },
  created(){
      this.getNewslist();
  },
  methods:{
      getNewslist(){
          this.$http.get("api/newslist").then(res => {
              if(!res) return Toast("数据请求失败！");
              this.newsList = res.body.message
          },err => {
              console.log(err)
          })
      }
  }
};
</script>

<style lang="scss" scoped>
.news-list{
    .top-img{
        img{
            width: 100%;
        }
    }
}
</style>
