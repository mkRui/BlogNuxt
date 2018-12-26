<template>
  <div class="author" :class="mobile ? 'mobile' : ''">
    <!-- 页面标题 -->
    <div class="triangle">
      <div></div>
      <div>{{ author.authorTitle }}</div>
    </div>

    <!-- 页面封面 -->
    <div class="titimg" :class="mobile ? 'mobile' : ''">
      <img :src="author.authorImg">
    </div>

    <!-- 页面主体 -->
    <div class="main">
      <!-- 头部注释 -->
      <header>
        <h4>about Me</h4>
        <div></div>
      </header>

      <!-- 集合 -->
      <div class="control">
        <!-- 作者信息 -->
          <introduce></introduce>
          <div v-if="!mobile">

            <!-- 热门文章 -->
            <hot-article mode="list"></hot-article>
            <div class="link-control" >
              <!-- 链接 -->
              <link-list></link-list>
            </div>

            <!-- 文字轮播 -->
            <shuffing></shuffing>
          </div>
      </div>

    </div>

  </div>
</template>
<script>
import introduce from '@/components/author/introduce.vue'

import hotArticle from '@/components/article/hotArticle.vue'

import shuffing from '@/components/author/shuffling.vue'

import linkList from '@/components/common/link.vue'

export default {
  name: 'author',
  // 指定定容器
  layout: 'container',
  // 请求
  fetch ({ store, params, query }) {
    return Promise.all([
      store.dispatch('article/getHotArticle', {
        pageNo: 1,
        pageSize: 5
      }),
      store.dispatch('global/getGlobal', {id: 1})
    ])
  },
  computed: {
    author () {
      return this.$store.state.global.global
    },
    mobile () {
      return this.$store.state.isMobile
    }
  },
  components: {
    introduce,
    hotArticle,
    shuffing,
    linkList
  }
}
</script>
<style lang="scss" scoped>
.author {
  position: relative;
  width: 1000px;
  background:#fff;
  margin: 0 auto;
  margin-top: 70px;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 30px;
  margin-bottom: 30px;
  &.mobile {
    width: calc(100% - 20px);
    margin: 0 auto;
    margin-top: 2rem;
    padding: 10px;
  }
  > .triangle {
    height: 24px;
    position: absolute;
    top: -10px;
    left: 20px;
    display: flex;
    div:nth-child(2) {
      padding:0px 10px;
      height: 24px;
      color: #fff;
      line-height: 24px;
      font-weight: bolder;
      font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      background-color: $border;
    }
    div:nth-child(1) {
      width: 0px;
      height: 0px;
      border-top: solid 10px transparent;
      border-right: solid 10px $border;
      color: #ffffff;
    }
  }
  > .titimg {
    width: 100%;
    height: 300px;
    border-radius: 5px;
    overflow: hidden;
    &.mobile {
      margin-top: 1rem;
      height: auto;
    }
    img {
      width: 100%;
    }
  }
  .main {
    header {
      display: flex;
      align-items: center;
      margin-top: 10px;
      h4 {
        min-width: 80px;
        font-weight: 600;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      }
      div {
        width: 100%;
        height: 1px;
        background: $border;
      }
    }
    .control {
      display: flex;
    }
    .link-control {
      margin-left: 130px;
    }
  }

}
</style>
