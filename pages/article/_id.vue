<template>
  <div>
    <div class="main">
      <div class="left">
        <div class="detail">
          <div class="triangle">
            <div></div>
            <div>{{ article.createTime }}</div>
          </div>
            <h1>{{ article.title }}</h1>
            <p>
              字数<span>{{ article.content.length }}</span> · 
              阅读<span> {{ article.readerNum }} </span>次 · 
              点赞<span> {{ article.praise }} </span>次 · 
              评论<span> {{ article.comments }} </span>条
            </p>
            
            <!-- 封面图片 -->
            <div class="content-cover">
              <img :src="article.cover" alt="">
            </div>

            <!-- 解析后的内容 -->
            <view-marked :marked="content" ></view-marked>
        </div>
      </div>
      <div class="right">
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
import marked from '~/plugins/marked'

import tagShuffing from '@/components/article/tagShuffling.vue'

import hotArticle from '@/components/article/hotArticle.vue'

import hotTag from '@/components/article/hotTag.vue'

import viewMarked from '@/components/common/viewMarked.vue'

import linkList from '@/components/common/link.vue'
export default {
  layout: 'container',
  // 文章详情
  name: 'detail',
  data () {
    return {
      content: ''
    }
  },
  components: {
    tagShuffing,
    hotArticle,
    hotTag,
    linkList,
    viewMarked
  },
  // 指定定容器
  layout: 'container',
  fetch ({ store, params, query }) {
    return Promise.all([
      store.dispatch('article/getArticleDetail', params),
      store.dispatch('article/getHotArticle', {
        pageNo: 1,
        pageSize: 5
      }),
      store.dispatch('common/getHotTag')
    ])
  },
  computed: {
    // content () {
    //   return marked(this.article.content)
    // },
    article () {
      return this.$store.state.article.detail
    }
      // return marked(this.$store.state.article.detail.content)
      // return this.$store.state.article.detail.content
  },
  mounted () {
    // this.$store.dispatch('article/getArticleDetail', query)
    this.content = marked(this.article.content)
  }
}
</script>
<style lang='scss' scoped>
.main {
  width: 100%;
  display: flex;
  justify-content: space-between;
  .left {
    width: 100%;
    .detail {
      margin-top: 40px;
      background-color: #fff;
      border-radius: 8px;
      padding: 20px;
      margin-bottom: 40px;
      position: relative;
      > .triangle {
        width: 140px;
        height: 24px;
        position: absolute;
        top: -10px;
        left: 20px;
        div:nth-child(2) {
          float: left;
          width: 130px;
          height: 24px;
          color: #fff;
          line-height: 24px;
          text-align: center;
          font-weight: bolder;
          font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
          background-color: $border;
        }
        div:nth-child(1) {
          float: left;
          width: 0px;
          height: 0px;
          border-top: solid 10px transparent;
          border-right: solid 10px $border;
          color: #ffffff;
        }
      }
      h1 {
        line-height: 2.2;
        font-weight: 500;
      }
      h5{
        line-height: 2;
        font-size: 15px;
        font-weight: 500;
      }
      p {
        font-size: 14px;
        line-height: 2;
      }
      .content-cover {
        img {
          width: 100%;
        }
      }
    }
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
