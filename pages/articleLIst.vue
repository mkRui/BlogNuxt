<template>
  <div>
    <div class="main">
      <!-- 文章列表 -->
      <div class="left">
        <!-- 页面搜索 -->
        <div class="search" :class="mobile ? 'mobile' : ''" v-if="this.$route.query.keyWord">
          <i class="el-icon-search">{{ this.$route.query.keyWord }}</i>
          <div class="hr"></div>
        </div>

        <articlePcList></articlePcList>
      </div>

      <!-- 侧边栏 -->
      <div class="right" v-if="!mobile">
        <div class="control-right">

          <div class="bg-write write">
            <header>
              <!-- 标签轮播 -->
              <tag-shuffing></tag-shuffing>
            </header>
            

            <!-- 热门文章 -->
            <hot-article></hot-article>
          </div>
          

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
  head () {
    return { title: `${this.$route.query.classify ? this.$route.query.classify : '以梦想为名'}` }
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
    overflow: hidden;
    .search {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-top: 45px;
      &.mobile {
        padding: 10px;
        margin-top: 1.8rem;
      }
      i {
        white-space: nowrap;
        padding-right: 10px;
        font-size: 17px;
        &::before {
          margin-right: 10px;
        }
      }
    }
  }
  .right {
    min-width: 297px;
    width: 297px;
    margin-left: 20px;
    .control-right {
      margin-top: 40px;
      > .write {
        header{
          padding: 20px 20px 0px 20px;
        }
        border-radius: 8px;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
