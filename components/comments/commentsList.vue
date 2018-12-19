<template>
  <div class="comments-list">
    <transition-group tag="ul" mode="out-in" name="list">
      <li v-for="(item, index) in commentsList" :key="item.id" class="comments-main">
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
              <i class="iconfont icon-comments">{{ Number(item.commentsNum) }}</i>
              <i class="iconfont icon-reply iconReply" @click="reply(index)">回复</i>
              <i class="el-icon-close" v-if="locationIndex === index" @click="locationIndex = ''">取消</i>
            </div>

            <!-- 回复主评论的 回复框 -->
            <comments v-if="locationIndex === index" ></comments>

            <!-- 已经评论过的 -->
            <transition-group tag="ol" mode="out-in" name="list">
              <li v-for="elem in commentsList" :key="elem.id" class="comments-child">
                <p>{{ item.commentsUser }} @ {{ item.commentsUserMin ? item.commentsUserMin : '匿名' }}:</p>
                <!-- 评论内容支持 markedown 语法 -->
                <view-marked :marked="item.commentsContent | emoji"></view-marked>
                
                <!-- 子集评论列表 -->
                <div class="fun-button">
                  <i class="iconfont icon-like" @click="like(item.id)" :class="commentsId.includes(item.id.toString()) ? 'isLike' : ''">{{ item.commentsPraise }}</i>
                  <i class="iconfont icon-reply iconReply" @click="reply(index)">回复</i>
                  <i class="el-icon-close" v-if="locationIndex === index" @click="locationIndex = ''">取消</i>
                </div>
              </li>
            </transition-group>
          </div>
      </li>
    </transition-group>
  </div>
</template>
<script>
import userFace from '@/assets/image/people.jpeg'

import viewMarked from '@/components/common/viewMarked.vue'

import comments from './comments.vue'

export default {
  name: 'comments-list',
  data () {
    return {
      userFace: userFace,
      commentsId: [],
      locationIndex: ''
    }
  },
  components: {
    viewMarked,
    comments
  },
  computed: {
    commentsList () {
      return this.$store.state.comments.commentsList
    }
  },
  methods: {
    // 评论点赞
    like (item) {
      let like = (window.localStorage.getItem('commentsLike') || '').split(',')
      if (!like.includes(item.toString())) {
        like.push(item)
        this.commentsId.push(item)
      }
      console.log(this.commentsId)
      window.localStorage.setItem('commentsLike', like.join(','))
    },
    // 回复评论
    reply (item) {
      this.locationIndex = item
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
    ol {
      margin-top: 5px;
      background: #e7eaf1;
      padding: 10px;
      li {
        line-height: 2;
        border-bottom: 1px dotted #fff;
        >.fun-button {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          i {
            margin-right: 10px;
            color: #666;
            font-size: 14px;
            &::before {
              margin-right: 3px;
              font-size: 16px;
            }
            &.isLike {
              color: #F56C6C;
            }
            &.iconReply {
              display: none;
            }
          }
        }
        &:hover {
          > .fun-button {
            .iconReply {
              display: block;
            }
          }
        }
      }
    }
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
        > p {
          display: flex;
          justify-content: space-between;
          color: #9e9e9e;
          margin-bottom: 10px;
        }
        > .fun-button {
          margin-top: 10px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          i {
            margin-right: 10px;
            color: #666;
            font-size: 14px;
            &::before {
              margin-right: 3px;
              font-size: 16px;
            }
            &.isLike {
              color: #F56C6C;
            }
            &.iconReply {
              display: none;
            }
          }
        }
        &:hover {
          > .fun-button {
            .iconReply {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>
