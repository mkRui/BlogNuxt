<template>
  <div :class="mobile ? 'articleMobileList' : 'articleList'">
    <transition-group tag="ul" name="list" mode="out-in">
      <li v-for="item in article" :key="item.id" @click.stop="addReadRoute(item)">
        <div class="triangle">
          <div></div>
          <div>{{ item.createTime }}</div>
        </div>
        <h3>{{ item.articleTitle }}</h3>
        <h4><span>{{ item.articleComments }}</span> 条评论 · <span>{{ item.readArticleNumber }}</span> 人阅读 · <span>{{ item.praise }}</span> 人点赞</h4>
        <div v-if='!item.cover'>
          <div class="content">{{ item.articleMin }}</div>
          <div class="more"><nuxt-link :to="`/article/${item.id}`" @click.native="addRead(item.id)">Read More</nuxt-link></div>
        </div>
        <div class="imgState" v-else>
          <div class="image">
            <img :src="item.cover">
          </div>
          <div>
            <div class="content">{{ item.articleMin }}</div>
            <div class="more"><nuxt-link :to="`/article/${item.id}`" @click.native="addRead(item.id)">Read More</nuxt-link></div>
          </div>
        </div>
      </li>
      <span class="backFont" v-if="!article.length"  :key="Math.random()">暂无文章。。。。。</span>
    </transition-group>
    <div class="more-btn" v-if="article.length" >
      <span @click="more" v-if="article.length !== count">
        MORE
      </span>
      <span>
        没有更多了。。。
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'articlePcList',
  data () {
    return {
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
    async switchPage (page, query) {
      await this.$store.dispatch('article/getArticleList', {
        state:1,
        submit:1,
        // tag: tag,
        // classify: classify,
        // keyWord: keyword,
        ...query,
        pageNo: page,
        pageSize: 10
      })
    },
    more () {
      this.switchPage(this.$store.state.article.pageNo + 1, this.$route.query)
    },
    addRead (item) {
      this.$store.dispatch('article/readArticle', {
        id: item
      })
    },
    addReadRoute (item) {
      this.$router.push(`/article/${item.id}`)
      this.addRead(item.id)
    }
  },
  computed: {
    article () {
      return  this.$store.state.article.articleList
    },
    count () {
      return this.$store.state.article.total
    },
    mobile () {
      return this.$store.state.isMobile
    }
  },
  watch: {
    '$route':{
      handler: function (to, form) {
        this.switchPage(1, to.query)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
// pc 端
  .articleList {
    ul {
      margin-top: 40px;
      li{
        cursor: pointer;
        // max-width: 630px;
        min-height: 200px;
        position: relative;
        background-color: #fff;
        box-sizing: border-box;
        border-radius: 8px;
        padding: 20px;
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
          font-size: 21px;
          padding-top: 13px;
          padding-bottom:10px;
        }
        h4 {
          padding-bottom:10px;
          font-weight: normal;
        }
        .imgState {
          // display: flex;
          .image {
            width: 100%;
            height:200px;
            background: #f0f0f0;
            margin-right: 20px;
            overflow: hidden;
            position: relative;
            img {
              position: absolute;
              width: 100%;
            }
            &:hover img {
              transform: scale(1.2) rotate(5deg);
            }
          }
        }
        
        .content {
          line-height: 2;
          font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
          color: #666666;
        }
        .more {
          margin-top: 10px;
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
      .backFont {
        font-size: 20px;
        color: #707070;
        // padding-left: 30px;
      }
    }
    .more-btn {
      margin-bottom: 20px;
      span {
        border-top: 3px solid #666;
        padding-top: 8px;
      }
    }
  }
// 移动端
 .articleMobileList {
   padding: 10px 10px;
   margin-top: 1.5rem;
   li {
     cursor: pointer;
     position: relative;
     background: #fff;
     margin-bottom: 20px;
     padding: 1.2rem;
     border-radius: 5px;
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
      > h3 {
        font-size: 1.3rem;
      }
      > h4 {
        padding: 5px 0px;
        font-weight: normal;
      }
      > .imgState {
          .image {
            width: 100%;
            img {
              width: 100%;
            }
          }
          .content {
            margin-top: 10px;
          }
      }
      .more {
        display: block;
        margin-top: 10px;
        a {
          display: block;
          background: $border;
          color: #fff;
          padding: 5px;
          text-align: center;
        }
      }
    }
  }
</style>
