<template>
  <div class="comments-collection">
    <!-- 评论用户信息 输入 -->
    <user-info ref="userInfo"></user-info>
    
    <!-- 头像 输入框 发送按钮 -->
    <div class="comments-main">
      <div class="user-face">
        <el-upload
          class="upload-demo"
          :action="actionUrl"
          :show-file-list='false'
          name='fileName'
          :before-upload='before'
          :on-success="success">
          <img class="face" :src="timg ? timg : userFace">
        </el-upload>
      </div>
      <div>
        <!-- 输入框 -->
        <comments-box></comments-box>
      </div>
    </div>
  </div>
</template>
<script>
import userFace from '@/assets/image/people.jpeg'

import userInfo from './userInfo.vue'

import PATH from '@/config'

import commentsBox from './commentsBox.vue'

export default {
  name: 'commentsCollection',
  components: {
    userInfo,
    commentsBox
  },
  data () {
    return {
      userFace: userFace,
      timg: '',
    }
  },
  methods: {
    before (item) {
      const reg = /(.jpg|.JPG|.jpeg|.JPEG|.png|.PNG)$/
      if (!reg.test(item.name)) {
        return false
      }
    },
    success (item) {
      if (item.code === 1) {
        this.timg = item.result.filePath
      }
    }
  },
  mounted () {
  },
  computed: {
    actionUrl () {
      return PATH + `/article/uploadImg`
    }
  }
}
</script>
<style lang="scss" scoped>
.comments-collection {
  .comments-main {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    div {
      &.user-face {
        width: 60px;
        height: 60px;
        border: 1px solid #e3e3e3;
        border-radius: 5px;
        overflow: hidden;
        .face {
          width: 100%;
          height: 100%;
        }
      }
      &:nth-child(2) {
        width: 88%;
      }
    }
  }
}
</style>
