<template>
  <div class="wrapper">
    <!-- header -->
    <div class="header">
      <mt-header fixed title="同方知网移动端项目"></mt-header>
    </div>

    <!-- router-view -->
    <div class="main">
      <transition name="slider">
        <router-view></router-view>
      </transition>
    </div>

    <!-- tabbar -->
    <div class="footer">
      <nav class="mui-bar mui-bar-tab">
        <router-link class="mui-tab-item" to="/home">
          <span class="mui-icon mui-icon-home"></span>
          <span class="mui-tab-label">首页</span>
        </router-link>
        <router-link class="mui-tab-item" to="/news">
          <span class="mui-icon mui-icon-extra mui-icon-extra-new">
            <span class="mui-badge">0</span>
          </span>
          <span class="mui-tab-label">新闻</span>
        </router-link>
        <router-link class="mui-tab-item" to="/classify">
          <span class="mui-icon mui-icon-extra mui-icon-extra-class"></span>
          <span class="mui-tab-label">板块</span>
        </router-link>
        <router-link class="mui-tab-item" to="/video">
          <span class="mui-icon mui-icon-videocam"></span>
          <span class="mui-tab-label">视频</span>
        </router-link>
        <router-link class="mui-tab-item" to="/book">
          <span class="mui-icon mui-icon-extra mui-icon-extra-xiaoshuo"></span>
          <span class="mui-tab-label">阅读</span>
        </router-link>
        
        
      </nav>
    </div>
  </div>
</template>

<script>
</script>


<style lang="scss" scoped>
.wrapper {
  padding-top: 40px;
  padding-bottom: 50px;
}
.main{
  overflow-x: hidden;
}
.slider-enter{
  opacity: 0;
  transform: translateX(100%);
}
.slider-leave-to{
  opacity: 0;
  transform: translateX(-100%);
  position:absolute;
}
.slider-enter-active,.slider-leave-active{
  transition: all 0.5s ease;
}
</style>
