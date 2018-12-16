<template>
  <div class="commtent-con">
    <!-- 头部统计 -->
    <div class="comments-head">
      <i class="iconfont icon-comments">20</i>
      <div></div>
    </div>

    <!-- 评论用户信息 输入 -->
    <user-info ref="userInfo"></user-info>
  </div>
</template>
<script>
import userInfo from './userInfo.vue'
export default {
  name: 'comments',
  components: {
    userInfo
  },
  mounted () {
  }
}
</script>
<style lang="scss" scoped>
.commtent-con {
  width: 100%;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
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
