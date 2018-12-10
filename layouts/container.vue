<template>
  <div class="container">
    <!-- 头部信息 -->
    <div class="header">
      <pc-head></pc-head>
    </div>
    
    <!-- 内容主体 -->
    <div class="nuxt-Control">
      <nuxt></nuxt>
    </div>
  </div>
</template>
<script>
import pcHead from '@/components/pc/head.vue'

export default {
  name: 'container',
  components: {
    pcHead
  }
}
</script>

<style lang='scss'>

</style>
