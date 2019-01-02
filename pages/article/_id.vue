<template>
  <div>
    <div class="main" :class="mobile ? 'mobile' : ''">
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
            <div v-if="article.cover" class="content-cover">
              <img :src="article.cover" alt="">
            </div>

            <!-- 解析后的内容 -->
            <div class="view_deails">
              <view-marked :marked="content" ></view-marked>
            </div>

            <!-- 结束 -->
            <!-- <div class="footer">
              <span>
                END
              </span>
            </div> -->

            <!-- 信息 -->
            <div class="info">
              <div>
                <i class="iconfont icon-like" @click="like" :class="isLike ? 'isLike' : ''">{{ article.praise }}</i>
              </div>
              <div v-if="!mobile">
                <i class="iconfont icon-tag"></i>
                <span
                  v-for="(item, index) in article.tag.split(',')"
                  @click="$router.push({path: '/articleList', query: { tag: item }})"
                  :key="index">
                  {{ item }}
                </span>
              </div>
              <div>
                版权信息：
                <a href="https://creativecommons.org/licenses/by-nc/3.0/cn/deed.zh" target="_blank">非商用-署名-自由转载</a>
              </div>
            </div>

            <!-- 分割线 -->
            <hr class='hr'>

            <div class="link">

              <!-- 分享链接 -->
              <link-share></link-share>
              <!-- <span class="iconfont icon-weibo"></span>
              <span class="iconfont icon-qq"></span>
              <span class="iconfont icon-wechat"></span> -->
            </div>
        </div>
        <comments></comments>
      </div>
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
import marked from '~/plugins/marked'

import tagShuffing from '@/components/article/tagShuffling.vue'

import hotArticle from '@/components/article/hotArticle.vue'

import hotTag from '@/components/article/hotTag.vue'

import viewMarked from '@/components/common/viewMarked.vue'

import linkList from '@/components/common/link.vue'

import comments from '@/components/comments/commentsCon.vue'

import linkShare from '@/components/common/linkshare.vue'

export default {
  layout: 'container',
  // 文章详情
  name: 'detail',
  data () {
    return {
      // content: '',
      isLike: false
    }
  },
  components: {
    tagShuffing,
    hotArticle,
    hotTag,
    linkList,
    viewMarked,
    comments,
    linkShare
  },
  head () {
    return { title: `${this.$store.state.global.global.authorTitle}` }
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
    content () {
      return marked(this.article.content)
    },
    article () {
      return this.$store.state.article.detail
    },
    mobile () {
      return this.$store.state.isMobile
    }
      // return marked(this.$store.state.article.detail.content)
      // return this.$store.state.article.detail.content
  },
  methods: {
    like () {
      let like = (window.localStorage.getItem('articleLike') || '').split(',')
      if (!like.includes(this.$route.params.id)) {
        like.push(this.$route.params.id)
        this.$store.dispatch('article/praiseArticle', {
          id: this.$route.params.id
        })
        this.isLike = true
      }
      window.localStorage.setItem('articleLike', like.join(','))
    }
  },
  mounted () {
    let like = (window.localStorage.getItem('articleLike') || '').split(',')
    window.scrollTo(0, 0)
    // this.$store.dispatch('article/getArticleDetail', query)
    // this.content = marked(this.article.content)
    if (like.includes(this.$route.params.id)) {
      this.isLike = true
    }
  }
}
</script>
<style lang='scss' scoped>
.main {
  width: 100%;
  display: flex;
  justify-content: space-between;
  &.mobile {
    padding: 10px;
    >.left {
      width: 100%;
    }
  }
  .left {
    width: 672px;
    .detail {
      margin-top: 40px;
      background-color: #fff;
      border-radius: 8px;
      padding: 20px;
      margin-bottom: 20px;
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
      .view_deails {
        margin-top: 20px;
      }
      .footer {
        margin-top: 10px;
        span {
          border-top: 2px solid #666;
          color: #666;
          padding: 2px 0px;
          padding-right: 10px;
          font-style: oblique;
        }
      }
      .info {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        color: #666;
        div {
          span {
            cursor: pointer;
          }
        }
        i {
          font-size: 16px;
          &::before {
            margin-right: 3px;
          }
          &.isLike {
            color: #F56C6C;
          }
        }
      }
    }
  }
  .right {
    width: 282px;
    margin-left: 70px;
    .control-right {
      margin-top: 40px;
    }
  }
}
</style>
