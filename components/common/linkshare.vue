<template>
  <div class="link-share">
    <a v-for="(item, index) in shareList" :key="index" @click.prevent="shareWindow(item.url)" :title="item.name">
      <span class="iconfont" :class="`icon-${item.icon}`"></span>
    </a>
  </div>
</template>
<script>
export default {
  name: 'linkShare',
  data () {
    return {
      shareList: [
        {
          icon: 'wechat',
          name: '微信',
          url: () => `http://qr.topscan.com/api.php?text=${this.url}&w=300&el=h&m=10`
        },
        {
          icon: 'qq',
          name: '空间',
          url: () => `http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=${this.url}&title=${this.title}&summary=${this.content}&site=${this.url}`
        },
        {
          icon: 'weibo',
          name: '微博',
          url: () => `http://service.weibo.com/share/share.php?url=${this.url}&title=${this.title}&source=${this.url}&sourceUrl=${this.url}&content=${this.content}`
        }
      ]
    }
  },
  computed: {
    url () {
      return `http://scrscript.com${this.$route.fullPath}`
    },
    title () {
      return this.$store.state.article.detail.title
    },
    content () {
      return this.$store.state.article.detail.titleMin
    }
  },
  methods: {
    shareWindow (url) {
      // 发送邮件时匹配的相关
      const blank = url().includes('mailto') ? url().replace(/\s|\||scrscript/g, '')
      : encodeURI(url())

      /*
        * screen.availWidth 获得屏幕宽度
        * screen.availHeight 获得屏幕高度
        * 居中的算法是：
        * 左右居中： (屏幕宽度 - 窗口宽度)/2
        * 上下居中： (屏幕高度 - 窗口高度)/2
        */

      // 给打开的窗口命名
      const windowName = '分享 anRui'
      // 窗口宽度,需要设置
      const awidth = screen.availWidth / 6 * 2
      // 窗口高度,需要设置
      const aheight = screen.availHeight / 5 * 2
      // 窗口顶部位置,一般不需要改
      const atop = (screen.availHeight - aheight) / 2
      // 窗口放中央,一般不需要改
      const aleft = (screen.availWidth - awidth) / 2
      // 新窗口的参数
      const baseParam = 'scrollbars=0,status=0,menubar=0,resizable=2,location=0'
      // 新窗口的左部位置，顶部位置，宽度，高度
      const params = `top=${atop},left=${aleft},width=${awidth},height=${aheight},${baseParam}`
      // 打开新窗口
      const _window = window.open(blank, windowName, params)
      // 新窗口获得焦点
      _window.focus()
    }
  },
  mounted () {
    console.log(this.shareList)
  }
}
</script>
<style lang='scss' scoped>
.link-share {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: flex-start;
  margin-right: 10px;
  span {
    display: block;
    font-size: 20px;
    padding: 1px 15px;
    background: #f4f5f5;
    color: #666;
    border-radius: 5px;
    margin-right: 10px;
    cursor: pointer;
  }
}
</style>
