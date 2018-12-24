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
              <i class="iconfont icon-comments" @click="more(item)">{{ Number(item.commentsNum) }}</i>
              <i class="iconfont icon-reply iconReply" @click="reply(item)">回复</i>
              <i class="el-icon-close" v-if="locationIndex === item.id" @click="locationIndex = ''">取消</i>
            </div>

            <!-- 回复主评论的 回复框 -->
            <comments v-if="locationIndex === item.id" @save='submit' ref="commentSubmit" ></comments>

            <!-- 已经评论过的 -->
            <transition-group tag="ol" mode="out-in" name="list" v-if="item.child.length">
              <li v-for="elem in item.child"  :key="elem.id" class="comments-child">
                <p>{{ elem.commentsUser }} @ {{ elem.replyUser ? elem.replyUser : '匿名' }}:</p>
                <!-- 评论内容支持 markedown 语法 -->
                <view-marked :marked="elem.commentsContent | emoji"></view-marked>
                
                <!-- 子集评论列表 -->
                <div class="fun-button">
                  <i class="iconfont icon-like" @click="like(elem.id)" :class="commentsId.includes(elem.id.toString()) ? 'isLike' : ''">{{ elem.commentsPraise }}</i>
                  <i class="iconfont icon-reply iconReply" @click="replyChild(elem, item)">回复</i>
                  <i class="el-icon-close" v-if="childLocationIndex === elem.id" @click="childLocationIndex = ''">取消</i>
                </div>

                 <!-- 回复主评论的 回复框 -->
                  <comments v-if="childLocationIndex === elem.id" @save='submit' ref="commentSubmit" ></comments>

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
      locationIndex: '',
      childLocationIndex: '',
      replyData: {}
    }
  },
  components: {
    viewMarked,
    comments
  },
  computed: {
    commentsList () {
      return this.$store.state.comments.commentsList
    },
    pageNo () {
      return this.$store.state.comments.pageNo
    }
  },
  methods: {
    // 评论点赞
    async like (item) {
      let like = (window.localStorage.getItem('commentsLike') || '').split(',')
      if (!like.includes(item.toString())) {
        const res = await this.$store.dispatch('comments/commentsPraise', {
          id: item
        })
        if (res && res.code === 1) {
          like.push(item)
          this.$store.dispatch('comments/praise', item)
          this.$set(this.commentsId, this.commentsId.length, item.toString())
        }
      }
      window.localStorage.setItem('commentsLike', like.join(','))
    },
    // 提交回复的评论
    async submit (item) {
      const res = await this.$store.dispatch('comments/addComment', {
        ...item,
        ...this.replyData,
        articleId: this.$route.params.id,
        article: this.$store.state.article.detail.title,
        author: this.$store.state.article.detail.createUser
      })
      this.$nextTick(() => {
        this.$refs.commentSubmit.forEach(item => {
          item.cancel()
        })
      })
      this.commentsChild(this.replyData.parentId)
    },
    more (item) {
      if (!item.commentsNum) return
      this.commentsChild(item.id)
    },
    // 评论
    async commentsChild (parentId) {
      await this.$store.dispatch('comments/getCommentsChild', {
        articleId: this.$route.params.id,
        parentId: parentId,
        pageNo: 1,
        pageSize: 15
      })
    },
    // 回复评论
    reply (item) {
      this.childLocationIndex = ''
      this.locationIndex = item.id
      this.replyData = {
        parentId: item.id,
        replyUser: item.commentsUser,
        replyid: item.replyUserId
      }
    },
    // 回复子集评论
    replyChild (item, data) {
      this.locationIndex = ''
      this.childLocationIndex = item.id
      this.replyData = {
        parentId: data.id,
        replyUser: item.commentsUser,
        replyid: data.replyUserId
      }
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
            cursor: pointer;
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
          cursor: pointer;
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
