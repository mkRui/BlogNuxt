<template>
<div class="headList">
  <div class="head" v-fixed:top>
    <div class="header" @click="goIndex">
      <h2>he<span>llo</span>  world </h2>
      <p>hi Welcome to the blog</p>
    </div>

    <div class="nav">
      <div class="auto-control">
        <!-- 导航 -->
        <ul>
          <li v-for="(item, index) in nav" :key="index" :class="item.tagTitle === $route.query.classify ? 'active' : ''" @click="Link(item.tagTitle)"> {{ item.tagTitle }}</li>
        </ul>

        <!-- 搜索按钮 -->
        <div class="button-search">
          <input type="text" v-model="keyword" :style="{width: keyword ? '167px' : '0px'}" v-focus @keydown.enter="search" ref="searchInput">
          <i class="el-icon-search"></i>
        </div>
      
      </div>
    </div>
  </div>
  <div class="position"></div>
</div>
</template>
<script>
export default {
  data () {
    return {
      nav: [],
      keyword: ''
    }
  },
  methods: {
    Link (item) {
      this.$router.push({
        path: '/articleList',
        query: {
          classify: item
        }
      })
    },
    search (item) {
      this.$router.push({
        path: '/articleList',
        query: {
          keyWord: this.keyword
        }
      })
    },
    goIndex () {
      this.$router.push('/articleList')
    }
  },
  async mounted () {
    if (this.$route.query.keyWord) {
      this.keyword = this.$route.query.keyWord
    }
    await this.$store.dispatch('common/getClassify', {
      pageNo: 1,
      pageSize: 9999,
      tagState: 0
    })
    this.$refs.searchInput.focus()
    this.nav = this.$store.state.common.classify
  }
}
</script>
<style lang="scss" scoped>
.headList {
  .position {
    width: 100%;
    height: 120px;
  }
  .reduction {
    height: 40px;
  }
  .head {
    width: 100%;
    min-width: 1200px;
    position: fixed;
    top: 0;
    z-index: 99;
    background-color: rgb(235,235,235);
    transition: .35s;
    .header {
      width: 1024px;
      height: 80px;
      margin: 0 auto;
      font-family: 'Monda', sans-serif;
      text-transform: uppercase;
      box-sizing: border-box;
      padding-left: 30px;
      background-image: url('./../../assets/image/back.png');
      background-position-y: -515px;
      background-position-x: -170px;
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
    .nav {
      width: 100%;
      height: 40px;
      background-color: $head;

      .auto-control {
        width: 1024px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;

        ul {
          display: flex;
          li {
            width: 100px;
            height: 40px;
            color: #fff;
            text-align: center;
            line-height: 40px;
            font-weight: bolder;
            font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
          }
          li:hover {
            background-color: $border;
          }
          li.active {
            background-color: $border;
          }
        }
        .button-search {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          i {
            color: #fff;
            font-size: 19px;
          }
          input {
            width: 0px;
            border: 0;
            background: transparent;
            border-bottom: 1px solid #e3e3e3;
            color: #e3e3e3;
            transition: .35s;
          }
          &:hover {
            input {
              width: 167px !important;
            }
          }
        }
      }
    }
  }
  .show {
    top: -80px;
    // transform: translateY(0);
    // -webkit-transition: all 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
    // transition:  all 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
}

</style>
