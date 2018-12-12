<template>
  <div class="articleList">
    <transition-group tag="ul" name="list" mode="out-in">
      <li v-for="item in article" :key="item.id">
        <div class="triangle">
          <div></div>
          <div>{{ item.createTime }}</div>
        </div>
        <h3>{{ item.articleTitle }}</h3>
        <h4><span>{{ item.articleComments }}</span> 条评论 · <span>{{ item.readArticleNumber }}</span> 人阅读 · <span>{{ item.praise }}</span> 人点赞</h4>
        <div v-if='!item.cover'>
          <div class="content">{{ item.articleContent }}</div>
          <div class="more"><nuxt-link :to="{path:'/details',query:{id: item.id}}">Read More</nuxt-link></div>
        </div>
        <div class="imgState" v-else>
          <div class="image">
            <img :src="item.cover">
          </div>
          <div>
            <div class="content">{{ item.articleContent }}</div>
            <div class="more"><nuxt-link :to="{path:'/details',query:{id: item.id}}">Read More</nuxt-link></div>
          </div>
        </div>
      </li>
    </transition-group>
  </div>
</template>
<script>
export default {
  name: 'articleList',
  data () {
    return {
      article: [],
      pageNo: 1
    }
  },
  methods: {
    /**
     * @param classify 分类
     * 
     * @param keyword 关键字
     * 
     * @param tag 标签
     * 
     */
    async switchPage (page, keyword, classify, tag) {
      await this.$store.dispatch('article/getArticleList', {
        state:1,
        submit:1,
        tag: tag,
        classify: classify,
        keyWord: keyword,
        pageNo: page,
        pageSize: 10
      })
      this.article = this.$store.state.article.articleList
    }
  },
  watch: {
    '$route':{
      handler: function (to, form) {
        this.article = []
        if (!to.query.classify) {
          this.switchPage(1)
        } else {
          this.switchPage(1, '', to.query.classify)
        }
      },
      immediate: true
    } 
  }
}
</script>
<style lang="scss" scoped>
  .articleList {
    ul {
      margin-top: 40px;
      li{
        // max-width: 630px;
        min-height: 200px;
        position: relative;
        background-color: #fff;
        box-sizing: border-box;
        border-radius: 8px;
        padding: 20px;
        padding-left: 40px;
        margin-bottom: 40px;
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
        h3 {
          font-weight: 500;
          font-size: 25px;
          padding-top: 13px;
          padding-bottom:10px;
        }
        h4 {
          padding-bottom:10px;
          font-weight: normal;
          span {
            font-weight: bolder;
          }
        }
        .imgState {
          display: flex;
          .image {
            width: 200px;
            height:200px;
            background: #f0f0f0;
            margin-right: 20px;
            overflow: hidden;
            img {
              width: 200%;
            }
          }
        }
        
        .content {
          min-height:159px;
          max-height: 160px;
          line-height: 2;
          font-weight:bolder;
          font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
        }
        .more {
          text-align: right;
          height: 40px;
          a {
            width:95px;
            height: 33px;
            border-radius: 4px;
            display: inline-block;
            text-align: center;
            line-height: 33px;
            color: #fff;
            background-color: $border;
          }
        }
      }
    }
  }
</style>
