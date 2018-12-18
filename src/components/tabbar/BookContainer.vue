<template>
  <div class="videos-list mui-content">
    <div class="top-img">
      <img src="../../images/list2.jpg" >
    </div>
    <div class="mui-card">
      <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media">
          <a href="javascript:;">
            <img class="mui-media-object mui-pull-right" src="../../images/list1.jpg">
            <div class="mui-media-body">远眺
              <p class="mui-ellipsis">静静的看这个世界，最后终于疯了</p>
            </div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media">
          <a href="javascript:;">
            <img class="mui-media-object mui-pull-right" src="../../images/list1.jpg">
            <div class="mui-media-body">幸福
              <p class="mui-ellipsis">能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
            </div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media">
          <a href="javascript:;">
            <img class="mui-media-object mui-pull-right" src="../../images/list1.jpg">
            <div class="mui-media-body">木屋
              <p class="mui-ellipsis">想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.videos-list{
    .top-img{
        img{
            width: 100%;
        }
    }
}
</style>