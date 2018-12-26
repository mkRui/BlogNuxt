<template>
  <div class="Introduction">
    <div class="theOne clearfix">
      <ul>
        <li v-for="(item, index) in aboutMe" :key="index">
          <span :class="'iconfont '+item.icon"></span>
          <span>{{ author[item.content] }}</span>
        </li>
      </ul>
      <div class="peopleImg" :class="mobile ? 'mobile' : ''">
          <img :src="author.authorFace" alt="">
      </div>
    </div>
    <div class="discourse">
      <h2>{{ author.feelingsTitle }}</h2>
      <p>{{ author.feelingsMinTitle }}</p>
      <p>{{ author.feelingsContent }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Introduction',
  data () {
    return {
      aboutMe: [
        {icon: 'icon-lun', content: 'title'},
        {icon: 'icon-people', content: 'cooperation'},
        {icon: 'icon-movie', content: 'movie'},
        {icon: 'icon-music', content: 'music'},
        {icon: 'icon-like', content: 'hobby'},
        {icon: 'icon-submit', content: 'introduce'}
      ]
    }
  },
  computed: {
    author () {
      return this.$store.state.global.global
    },
    mobile () {
      return this.$store.state.isMobile
    }
  }
}
</script>
<style lang='scss' scoped>
  .Introduction {
      width: 100%;
    > .theOne {
      margin-bottom: 14px;
      padding-top: 12px;
      padding-bottom: 38px;
      border-bottom: 1px solid $border;
      display: flex;
      justify-content: space-between;
      ul {
        margin-right: 10px;
        li {
          line-height: 2.5;
          span{
            font-size: 15px;
            margin-right: 4px;
            margin-left: 4px;
          }
        }
      }
      > .peopleImg {
        img {
          max-width: 200px;
          margin-right: 10px;
          margin-top: 10px;
        }
        &.mobile {
          width: 40%;
          margin-top: 2rem;
          img {
            max-width: 100%;
            margin-right: 10px;
            margin-top: 10px;
          }
        }
      }
    }
    > .discourse {
      padding:20px;
      text-align: center;
      box-sizing: border-box;
      h2 {
        letter-spacing: 2px;
        margin-bottom: 10px;
        font-weight: normal;
      }
      p:nth-child(2){
        margin-bottom: 10px;
      }
      p:nth-child(3){
        margin-bottom: 10px;
        line-height:2;
      }
    }
  }
</style>
