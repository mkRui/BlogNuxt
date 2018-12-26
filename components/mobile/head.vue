<template>
<div>
  <!-- header -->
  <div class="head">
    <div class="header">
      <!-- 标题 -->
      <i class="iconfont icon-change" @touchstart="visableSlide = true"></i>
      <img src="@/assets/image/backMoblie.png" @touchstart='toIndex' alt="">

      <!-- 输入框 -->
      <div class="input" :class="search ? 'active' : 'leave'">
        <input type="text" placeholder="客官请输入关键字" v-model="keyWord" @keyup.enter='searchArticle'>
        <i class="el-icon-close" @click="leave"></i>
      </div>
    </div>
    <div class="cover"></div>
  </div>

  <!-- 侧边栏弹出框 -->
  <dialog-slide :slideDialog.sync='visableSlide'>
    <mobile-router slot="main" @close='close'></mobile-router>
  </dialog-slide>
</div>
</template>
<script>
import dialogSlide from './dialog.vue'

import mobileRouter from './mobileRouter.vue'

export default {
  name: "pchead",
  data () {
    return {
      visableSlide: false,
      keyWord: ''
    }
  },
  components: {
    dialogSlide,
    mobileRouter
  },
  computed: {
    search () {
      return this.$store.state.search
    }
  },
  methods: {
    close () {
      this.visableSlide = false
    },
    leave () {
      this.$store.dispatch('search', false)
    },
    toIndex () {
      this.$router.push('/articleList')
    },
    searchArticle () {
      this.$router.push({
        path: '/articleList',
        query: {
          keyWord: this.keyword
        }
      })
      this.$store.dispatch('search', false)
    }
  }
}
</script>
<style lang="scss" scoped>
.head {
  width: 100%;
  .cover {
    width: 100%;
    height: 2.5rem;
  }
  .header {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    background: $border;
    padding: 6px 10px;
    z-index: 2001;
    overflow: hidden;
    > img {
      position: absolute;
      width: 17rem;
      top: .5rem;
      right: 1rem;
    }
    > i {
      display: block;
      padding: 1px 6px;
      color: #fff;
      border-radius: 5px;
      font-size: 1.6rem;
    }
    .input {
      position: absolute;
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
      background: $border;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0px 10px;
      transition: .35s cubic-bezier(1, -0.21, 0, 1.38);
      > input {
        width: 93%;
        border: 0;
        padding: 5px;
        border-radius: 2px;
      }
      i {
        color: #fff;
        font-size: 1.4rem;
      }
      &.leave {
        transform: translateY(-100%);
      }
      &.active {
        transform: translateY(0);
      }
    }
  }
}
</style>
