<template>
  <div class="comments-box">
    <div class="comments-input">
      <!-- 输入框 -->
      <div class="comments" ref="comments" contenteditable="true" placeholder="写下你的评论..."></div>

      <!-- emoji-data Control -->
      <transition name="slide-up" mode="out-in">
        <div class="emoji" v-show="emojiState">
          <span
            v-for="(emoji, index) in emoji"
            :key='index'
            @click.stop.prevent="insert({end: emoji.name})">
            {{ emoji.icon }}
          </span>
        </div>
      </transition>
    </div>

    <!-- control -->
    <div class="control">

      <!-- icon -->
      <div class="icon">
        <button
          v-for="(item, index) in icon"
          :key="index"
          class="iconfont"
          :class="'icon-' + item"
          @click.stop.prevent="getIcon(item)">
        </button>
      </div>
      <div class="button">

        <!-- submit -->
        <el-button size="mini" @click="insert">
          <i class="iconfont icon-submit" @click="saveSubmit">发送</i>
        </el-button>
      </div>
    </div>
  </div>
</template>
<script>
import emoji from '@/utils/emoji-data.js'
export default {
  name: 'comments-box',
  data () {
    return {
      icon: [
        'face',
        'link',
        'img',
        'code'
      ],
      emoji: emoji,
      emojiState: false
    }
  },
  methods: {
    getIcon (item) {
      if (item === 'face') {
        this.emojiState = !this.emojiState
      } else {
        const grammar = {
          img: {
            start: '![](http://',
            end: ')'
          },
          link: {
            start: '[',
            end: '](http://)'
          },
          code: {
            start: '\n```\n',
            end: '\n```'
          }
        }
        this.insert(grammar[item])
      }
    },
    insert ({start = '', end = ''} = '') {
      if (!start && !end) return false
        const select = (window.getSelection || document.getSelection)().toString()
        const content = this.$refs.comments.innerText
      if (select) {
        this.$refs.comments.innerText = content.replace(select, start + content + end)
      } else {
        this.$refs.comments.innerText += start + end
        this.$refs.comments.scrollTo(0, this.$refs.comments.offsetHeight)
      }
    },
    saveSubmit () {
      if (this.$refs.comments.innerText) {
        this.$emit('save', this.$refs.comments.innerText)
        this.$refs.comments.style.border = '1px solid #e3e3e3'
      } else {
        this.$refs.comments.style.border = '1px solid red'
      }
    },
    cancel () {
      this.$refs.comments.innerText = ''
    }
  }
}
</script>
<style lang="scss" scoped>
.comments-box {
  width: 100%;
  .comments-input {
    position: relative;
    .comments {
      width: 100%;
      outline: none;
      height: 87px;
      overflow-x: hidden;
      overflow-y: auto;
      border: 1px solid #e3e3e3;
      padding: 10px;
      &:empty:before{
        content: attr(placeholder);
        color: #9e9e9e;
      }
    }
    .emoji {
      position: absolute;
      top: 1px;
      left: 1px;
      bottom: 1px;
      right: 1px;
      background: rgba(256, 256, 256, .8);
      display: flex;
      flex-wrap: wrap;
      span {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
        &:hover {
          background: #9e9e9e;
        }
      }
    }
  }

  .control {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    div {
      &.icon {
        button {
          font-size: 20px;
          margin-right: 10px;
          cursor: pointer;
          padding: 0;
          border: 0;
        }
      } 
    }
    .button {
      button {
        background: $border;
        color: #fff;
      }
    }
  }
}
</style>
