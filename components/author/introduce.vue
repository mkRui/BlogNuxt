<template>
  <div class="Introduction">
    <div class="theOne clearfix">
      <ul>
        <li v-for="(item, index) in aboutMe" :key="index">
          <span :class="'iconfont '+item.icon"></span>
          <span>{{ author[item.content] }}</span>
        </li>
      </ul>
      <div class="peopleImg">
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
      ],
      title: 'Hello Everyone',
      mintitle: 'hi welcome to our blog',
      content: '这是我和朋友们一起写的博客，我们非常喜欢技术带来的便利和这种酷的感觉，在书写的过程中受到了很多人的建议以便我们能向跟好的方向修改～，在这个过程中我们更能感受到自己技能的提升，我们对此充满喜悦，同时也欢迎各位来此留言让我们共同成长！最后 以梦想为名（In the name of dreams）'
    }
  },
  computed: {
    author () {
      return this.$store.state.global.global
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
