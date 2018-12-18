<template>
  <div class="comments-list">
    <transition-group tag="ul" mode="out-in" name="list">
      <li v-for="item in commentsList" :key="item.id" class="comments-main">
          <div class="user-face">
            <!-- userface -->
            <img :src="item.face ? item.face : userFace" alt="">
          </div>
          <div>
            <!-- 姓名 / 发布时间 -->
            <p>
              <span>{{ item.commentsUser }}</span>
              <span>{{ item.commentsTime }}</span>
            </p>

            <!-- 评论内容支持 markedown 语法 -->
            <view-marked :marked="item.commentsContent | emoji" ></view-marked>

            <!-- 点赞 回复 展开 -->
            <div class="fun-button">
              <i class="iconfont icon-like" @click="like(item.id)" :class="commentsId.includes(item.id.toString()) ? 'isLike' : ''">{{ item.commentsPraise }}</i>
            </div>
          </div>
      </li>
    </transition-group>
  </div>
</template>
<script>
import userFace from '@/assets/image/people.jpeg'

import viewMarked from '@/components/common/viewMarked.vue'

export default {
  name: 'comments-list',
  data () {
    return {
      userFace: userFace,
      commentsId: []
    }
  },
  components: {
    viewMarked
  },
  computed: {
    commentsList () {
      return this.$store.state.comments.commentsList
    }
  },
  methods: {
    like (item) {
      let like = (window.localStorage.getItem('commentsLike') || '').split(',')
      if (!like.includes(item.toString())) {
        like.push(item)
        this.commentsId.push(item)
      }
      console.log(this.commentsId)
      window.localStorage.setItem('commentsLike', like.join(','))
    }
  },
  mounted () {
    this.commentsId = (window.localStorage.getItem('commentsLike') || '').split(',')
  }
}
</script>
<style lang="scss" scoped>
.comments-list {
  margin-top: 20px;
  .comments-main {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    > div {
      &.user-face {
        width: 60px;
        height: 60px;
        border: 1px solid #e3e3e3;
        border-radius: 5px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
      &:nth-child(2) {
        width: 88%;
        p {
          display: flex;
          justify-content: space-between;
          color: #9e9e9e;
          margin-bottom: 10px;
        }
        .fun-button {
          margin-top: 10px;
          i {
            color: #666;
            font-size: 16px;
            &::before {
              margin-right: 3px;
            }
            &.isLike {
              color: #F56C6C;
            }
          }
        }
      }
    }
  }
}
</style>
