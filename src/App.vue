<template>
  <div class="wrapper">
    <!-- header -->
    <header class="header">
      <mt-header fixed title="同方知网移动端项目"></mt-header>
    </header>

    <!-- router-view -->
    <main class="main">
      <router-view></router-view>
    </main>

    <!-- tabbar -->
    <footer class="footer">
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
        <router-link class="mui-tab-item" to="/search">
          <span class="mui-icon mui-icon-search"></span>
          <span class="mui-tab-label">检索</span>
        </router-link>
        <router-link class="mui-tab-item" to="member">
          <span class="mui-icon mui-icon-contact"></span>
          <span class="mui-tab-label">个人</span>
        </router-link>
      </nav>
    </footer>
  </div>
</template>

<script>
</script>


<style lang="scss" scoped>
.header {
  padding-top: 40px;
}
</style>
