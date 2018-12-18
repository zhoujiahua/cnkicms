<template>
    <div class="news-info mui-content">
        <div class="mui-card">
            <div class="news-con" v-for="item in newsInfo" :key="item.ID">
                <h3 class="news-title">{{ item.Title }}</h3>
                <div class="news-detail" v-html="item.Detail" ></div>
            </div>
        </div>
    </div>
</template>

<script>
import {Toast} from "mint-ui";
    export default{
        data(){
            return {
                id:this.$route.params.ID,
                newsInfo:[]
            }
        },
        created(){
            this.getNewsInfo();
        },
        methods:{
            getNewsInfo(){
                this.$http.get('api/getListInfo',{params:{id:this.id}}).then(res => {
                    if(!res) return Toast("数据请求失败！")
                    this.newsInfo = res.body.message;
                },err => {
                    console.log(err)
                })
            }
        }
    }

</script>

<style lang="scss" scoped>
.news-info{
    .news-title{
       font: 600 15px/35px "";
       text-align: center;
    }
    .news-detail{
        p{font-size: 15px;line-height: 30px;text-indent: 2em;}
    }
}
</style>
