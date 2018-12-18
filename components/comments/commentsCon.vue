<template>
  <div class="commtent-con">
    <!-- 头部统计 -->
    <div class="comments-head">
      <i class="iconfont icon-comments"> {{ total }} </i>
      <div></div>
    </div>

    <div class="collection">
      <!-- 评论框集合 -->
      <comments-collection></comments-collection>

      <!-- 评论列表 -->
      <comments-list></comments-list>
    </div>

  </div>
</template>
<script>
import commentsCollection from './comments'
import commentsList from './commentsList'
export default {
  name: 'comments',
  components: {
    commentsCollection,
    commentsList
  },
  computed: {
    total () {
      return this.$store.state.comments.total
    }
  },
  mounted () {
    this.$store.dispatch('comments/getCommentsList', {
      articleId: this.$route.params.id,
      parentId: 0,
      pageNo: 1,
      pageSize: 5
    })
  }
}
</script>
<style lang="scss" scoped>
.commtent-con {
  width: 100%;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 40px;
  .comments-head {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 5px;
    div {
      width: 100%;
      height: 2px;
      background:#9a9a9a;
      margin-left: 10px;
    }
    i {
      display: flex;
      align-items: center;
      &::before {
        font-size: 18px;
        margin-right: 5px;
        color: #666666;
      }
    }
  }
}
</style>
