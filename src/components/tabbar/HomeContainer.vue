<template>
  <div class="home">
    <div class="home-container">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
           <img :src="item.link" :alt="item.title">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="home-list">
        <div class="mui-card">
            <div class="mui-card-header mui-card-media" style="height:40vw;background-image:url(../images/cbd.jpg)"></div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>Posted on January 18, 2016</p>
                    <p style="color: #333;">这里显示文章摘要，让读者对文章内容有个粗略的概念...</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <a class="mui-card-link">Like</a>
                <a class="mui-card-link">Read more</a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            lunbotuList:[]
        }
    },
    created(){
        this.getLunbotu();
    },
    methods:{
        getLunbotu(){
            //获取图片数据
            this.$http.get("http://192.168.1.168:12306/api/getImg").then((res) => {
                this.lunbotuList = res.body.message;
                console.log(res.body.message)
            },(err) => {
                console.log(err)
            });
        }
    }
}

</script>
<style lang="scss" scoped>
.home {
  .mint-swipe {
    height: 250px;
    .mint-swipe-item{
        &:nth-child(1){
            background-color: red;
        }
        &:nth-child(2){
            background-color: blue;
        }
        &:nth-child(3){
            background-color: green;
        }

        img{
            width: 100%;
            height: 100%;
        }
    }
  }
}
</style>
