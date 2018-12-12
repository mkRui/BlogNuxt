<template>
  <div class="tag-hot" v-fixedTag>
    <h2>标签</h2>
    <ul class="clearfix">
      <li v-for="(item, index) in tag" :key="index" @click="viewTagArticle(item.tag)"><span>{{ item.tag }}</span> <span v-if='item.num !== 1'>({{ item.Count }})</span></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'tag-hot',
  computed: {
    tag () {
      return this.$store.state.common.hotTag
    }
  },
  methods: {
    viewTagArticle (item) {
      this.$router.push({
        path: '/articleList',
        query: {
          tag: item
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.tag-hot {
  h2 {
    font-size: 16px;
    letter-spacing: 3px;
    color: rgba(0,0,0,.54);
    margin-bottom: 10px;
  }
  ul {
    line-height: 2;
    display: flex;
    justify-content: flex-start;
    li {
      background: #fff;
      border: 1px solid #cdcdcd;
      border-radius: 5px;
      margin-right: 13px;
      margin-bottom: 10px;
      text-align: center;
      min-width:80px;
      box-sizing: border-box;
      padding: 1px;
      color: #000;
      &:hover {
        cursor: pointer;
        background: $border;
        color: #fff;
      }
    }
  }
  &.show {
    position: fixed;
    top: 0px;
    transform: translateY(80px);
    transition: .35s;
  }
}
</style>
