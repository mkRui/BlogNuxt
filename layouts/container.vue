<template>
  <div class="container">
    <!-- 头部信息 -->
    <div class="header">
      <pc-head></pc-head>
    </div>
    <nuxt></nuxt>
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
