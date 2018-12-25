<template>
  <div>
    <div class="main">
      <!-- 文章列表 -->
      <div class="left">
        <articlePcList></articlePcList>
      </div>

      <!-- 侧边栏 -->
      <div class="right" v-if="!mobile">
        <div class="control-right">
          <!-- 标签轮播 -->
          <tag-shuffing></tag-shuffing>

          <!-- 热门文章 -->
          <hot-article></hot-article>

          <!-- 热门标签 -->
          <hot-tag></hot-tag>

          <!-- 链接 -->
          <link-list></link-list>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import articlePcList from '@/components/article/articlePcList.vue'

import tagShuffing from '@/components/article/tagShuffling.vue'

import hotArticle from '@/components/article/hotArticle.vue'

import hotTag from '@/components/article/hotTag.vue'

import linkList from '@/components/common/link.vue'

export default {
  // 指定定容器
  layout: 'container',
  // 页面名称
  name: 'articleList',
  components: {
    articlePcList,
    tagShuffing,
    hotArticle,
    hotTag,
    linkList
  },
  fetch ({ store, params, query }) {
    return Promise.all([
      store.dispatch('article/getArticleList', {
        state:1,
        submit:1,
        ...query,
        pageNo: 1,
        pageSize: 10
      }),
      store.dispatch('article/getHotArticle', {
        pageNo: 1,
        pageSize: 5
      }),
      store.dispatch('common/getHotTag')
    ])
  },
  computed: {
    mobile () {
      return this.$store.state.isMobile
    }
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
    margin-left: 70px;
    .control-right {
      margin-top: 40px;
    }
  }
}
</style>
