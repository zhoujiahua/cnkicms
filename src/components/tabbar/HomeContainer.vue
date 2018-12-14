<template>
  <div class="home">
    <div class="home-container">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
           <img :src="item.url" :alt="item.title">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <h1>HomeContainer</h1>
  </div>
</template>

<script>
export default {
    data(){
        return {
            lunbotuList:[
                {
                    "title":"中国知网陕西分公司",
                    "url":"http://piccache.cnki.net/kdn/index/kns7/nimages/temp/lb08.jpg"
                },
                {
                    "title":"中国知网陕西分公司",
                    "url":"http://piccache.cnki.net/kdn/index/kns7/nimages/temp/lb03.jpg"
                },
                {
                    "title":"中国知网陕西分公司",
                    "url":"http://piccache.cnki.net/kdn/index/kns7/nimages/temp/lb06.jpg"
                },
                {
                    "title":"中国知网陕西分公司",
                    "url":"http://piccache.cnki.net/kdn/index/kns7/nimages/temp/lb01.jpg"
                }
            ]
        }
    },
    created(){
        this.getLunbotu();
    },
    methods:{
        getLunbotu(){
            //获取图片数据
            this.$http.get("http://s.jiahua.pro/cnki/image/lunbutu/cnki_images.json").then((res) => {
                // this.lunbotuList = res;
                // console.log(res)
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
