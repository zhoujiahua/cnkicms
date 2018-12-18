<template>
  <div class="home">
      <!-- 轮播图 -->
      <div class="home-slider mui-content">
        <mt-swipe :auto="4000">
          <mt-swipe-item v-for="item in lunbotuList" :key="item.ID">
            <img :src="item.link" :alt="item.title">
          </mt-swipe-item>
        </mt-swipe>
      </div>

      <!-- 视频 -->
      <div class="home-video mui-content">
        <div class="mui-card">
        <div class="title">
          <span ><i class="mui-icon mui-icon-videocam"></i> 最新动态 </span>
          <router-link to="/video"> More &gt;&gt;&nbsp;&nbsp;</router-link>
        </div>
        <div class="player">
          <video-player
            class="video-player vjs-custom-skin"
            ref="videoPlayer"
            :playsinline="true"
            :options="playerOptions"
          ></video-player>
        </div>
        </div>
      </div>

      <!-- 新闻资讯 -->
      <div class="news-list mui-content">
        <div class="mui-card">
        <div class="title">
          <span ><i class="mui-icon mui-icon-flag"></i> 新闻资讯 </span>
          <router-link to="/news">More &gt;&gt;&nbsp;&nbsp;</router-link>
        </div>
        <div class="news-con">
        <ul class="mui-table-view mui-table-view-chevron">
          <li class="mui-table-view-cell mui-media" v-for="item in newList" :key="item.ID" >
            <a class="mui-navigate-right">
              <img class="mui-media-object mui-pull-left" src="http://s.jiahua.pro/cnki/img/sncnki/cnkiimg.jpg">
              <div class="mui-media-body">
                {{ item.Title }}
                <p class='mui-ellipsis'>{{ item.CreateDate }}</p>
              </div>
            </a>
          </li>
        </ul>
        </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lunbotuList: [],
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "",
            src:
              "http://s.jiahua.pro/cnki/video/product/%E6%96%87%E7%8C%AE%E4%B8%8E%E6%95%B0%E6%8D%AE%E5%B9%B3%E5%8F%B0%EF%BC%9A%E7%9F%A5%E8%AF%86%E4%BC%A0%E6%92%AD%E5%BC%95%E9%A2%86%E7%A4%BE%E4%BC%9A%E8%BF%9B%E6%AD%A5%20-%E5%B1%B1%E8%A5%BF%E7%BD%91%E7%BB%9C%E5%B9%BF%E6%92%AD%E7%94%B5%E8%A7%86%E5%8F%B0.mp4" //url地址
          }
        ],
        poster: "http://s.jiahua.pro/cnki/img/sncnki/cnkiimg.jpg", //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true //全屏按钮
        }
      },
      newList:[]
    };
  },
  created() {
    this.getLunbotu();
    this.getNews();
  },
  methods: {
    getLunbotu() {
      //获取图片数据
      this.$http.get("api/getImg").then(
        res => {
          this.lunbotuList = res.body.message;
          console.log(res.body.message);
        },
        err => {
          console.log(err);
        }
      )
    },
    getNews(){
      this.$http.get("api/contents").then(res => {
        this.newList = res.body.message;
        console.log(res.body.message);
      },err => { console.log(err)})
    }

  }
};
</script>

<style lang="scss" scoped>
.home {
  .mint-swipe {
    height: 220px;
    .mint-swipe-item {
      /* &:nth-child(1) {
        background-color: red;
      }
      &:nth-child(2) {
        background-color: blue;
      }
      &:nth-child(3) {
        background-color: green;
      } */
      img {
        width: 100%;
        height: 100%;
      }
    }

  }

  .title{
      font-size: 14px;
      // padding: 4px 0;
      line-height: 30px;
      color: #26a2ff;
      border-bottom: 1px solid #ccc;
      margin-bottom: 2px;
      .mui-icon{
        font-size: 20px;
      }
      display: flex;
      justify-content:space-between;
    }

  //播放按钮换成圆形
  .vjs-custom-skin .video-js .vjs-big-play-button {
    height: 2em !important;
    width: 2em !important;
    line-height: 2em !important;
    border-radius: 1em !important;
  }
}

</style>
