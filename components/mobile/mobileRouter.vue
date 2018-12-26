<template>
  <div class="mobile-router">
    <!-- 头部 -->
    <div class="head">
      <h2>he<span>llo</span>  world </h2>
      <p>hi Welcome to the anRui blog</p>
    </div>

    <!-- main -->
    <div class="main">

      <!-- face -->
      <div class="face">
        <img :src="author.authorFace">
      </div>

      <!-- nav -->
      <ul>
        <li v-for="(item, index) in nav" :key="index" @click="jump(item.tagTitle)">{{ item.tagTitle }}</li>
        <li @click="search">搜索</li>
      </ul>
      
    </div>

    <div class="tag">
      <ul>
        <li v-for="(item, index) in tag" :key="index" @click="viewTagArticle(item.tag)"><span>{{ item.tag }}</span> <span v-if='item.num !== 1'>({{ item.Count }})</span></li>
      </ul>
    </div>

    <!-- link -->
    <div class="link">
      <link-router></link-router>
    </div>

  </div>
</template>
<script>
import linkRouter from './mobileLink.vue'

export default {
  name: 'mobile-router',
  computed: {
    author () {
      return this.$store.state.global.global
    },
    nav () {
      return this.$store.state.common.classify
    },
    tag () {
      return this.$store.state.common.hotTag
    }
  },
  components: {
    linkRouter
  },
  methods: {
    jump (item) {
      this.$router.push({
        path: '/articleList',
        query: {
          classify: item
        }
      })
      this.$emit('close')
    },
    viewTagArticle (item) {
      this.$router.push({
        path: '/articleList',
        query: {
          tag: item
        }
      })
      this.$emit('close')
    },
    search () {
      this.$store.dispatch('search', true)
      this.$emit('close')
    }
  },
  created () {
    Promise.all([
      this.$store.dispatch('global/getGlobal', {id: 1}),
      this.$store.dispatch('common/getClassify', {
        pageNo: 1,
        pageSize: 9999,
        tagState: 0
      }),
      this.$store.dispatch('common/getHotTag')
    ])
  },
  watch: {
    '$route': {
      handler: function () {
        this.$emit('close')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.mobile-router {
  width: 100%;
  height: 100%;
  padding: 10px;
  position: relative;
  > .head {
    text-align: center;
    h2 {
      color: #444;
      font-size: 40px;
      font-weight: bolder;
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      span {
        color: $border;
      }
    }
    p {
      color: #444444;
      font-size: 14px;
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }
  }
  > .main {
    > .face {
      margin-top: 10px;
      width: 100%;
      text-align: center;
      img {
        width: 10rem;
        height: 10rem;
        border-radius: 50%;
        
      }
    }
    ul {
      margin-top: 30px;
      li {
        text-align: center;
        line-height: 3;
        font-size: 1.2rem;
      }
    }
  }

  >.tag {
    width: 100%;
    position: absolute;
    bottom: 6rem;
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      li {
        padding: 4px;
        margin: 4px;
        border: 1px solid #666;
        border-radius: 3px;
      }
    }
  }

  > .link {
    position: absolute;
    bottom: 10px;
    transform: translateX(40%);
  }
}
</style>
