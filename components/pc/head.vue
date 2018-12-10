<template>
<div class="headList">
  <div class="head" v-fixed:top>
    <div class="header">
      <h2>he<span>llo</span>  world </h2>
      <p>hi Welcome to the blog</p>
    </div>
    <div class="nav">
      <div>
        <ul class="clearfix">
          <li v-for="(item, index) in nav" :key="index" @click="Link"> {{ item.tagTitle }}</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="position" v-fixed:height></div>
</div>
</template>
<script>
export default {
  data () {
    return {
      nav: ['技术', '读书', '娱乐', '电子']
    }
  },
  methods: {
    Link () {
      console.log(this.$store)
    }
  },
  async mounted () {
    await this.$store.dispatch('common/getClassify', {
      pageNo: 1,
      pageSize: 9999,
      tagState: 0
    })
    this.nav = this.$store.state.common.classify
  }
}
</script>
<style lang="scss" scoped>
.headList {
  .position {
    width: 100%;
    height: 110px;
  }
  .reduction {
    height: 30px;
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
      background-color: $head;

      div {
        width: 1024px;
        margin: 0 auto;

        ul {
          li {
            width: 100px;
            color: #fff;
            float: left;
            text-align: center;
            line-height: 30px;
            font-weight: bolder;
            font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
          }
          li:hover {
            background-color: $border;
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
