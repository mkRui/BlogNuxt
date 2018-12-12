<template>
  <div class="container">
    <!-- 头部信息 -->
    <div class="header">
      <pc-head></pc-head>
    </div>
    
    <!-- 内容主体 -->
    <div class="nuxt-Control" :style="{ width: mobile ? '100%' : '1024px' }">
      <transition name="list" mode="out-in">
        <nuxt></nuxt>
      </transition>
    </div>
  </div>
</template>
<script>
import pcHead from '@/components/pc/head.vue'

export default {
  name: 'container',
  components: {
    pcHead
  },
  data () {
    return {
      mobile: false
    }
  },
  mounted () {
    if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
      this.mobile = true
    } else {
      this.mobile = false
    }
  }
}
</script>

<style lang='scss'>
.container {
  width: 100%;
  .nuxt-Control {
    margin: 0 auto;
  }
}
</style>
