<template>
  <div>
    <div class="main">
      <!-- 文章列表 -->
      <div class="left">
        <articlePcList></articlePcList>
      </div>

      <!-- 侧边栏 -->
      <div class="right"></div>
    </div>
  </div>
</template>
<script>
import articlePcList from '@/components/article/articlePcList.vue'

export default {
  // 指定定容器
  layout: 'container',
  // 页面名称
  name: 'articleList',
  components: {
    articlePcList
  }
}
</script>
<style lang="scss" scoped>
.main {
  width: 100%;
  display: flex;
  justify-content: space-between;
  .left {
    width: 100%;
  }
  .right {
    width: 430px;
    margin-left: 100px;
  }
}
</style>
