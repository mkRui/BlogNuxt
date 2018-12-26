<template>
  <div class="mobile-link">
    <nuxt-link to="/author">关于作者</nuxt-link>
    <span>···</span>
    <nuxt-link to="/leave">留言墙</nuxt-link>
    <span>···</span>
    <nuxt-link to="/archive">归档</nuxt-link>
  </div>
</template>
<script>
export default {
  name: 'mobile-link'
}
</script>
<style lang="scss" scoped>
.mobile-link {
  display: flex;
  justify-content: center;
  a {
    font-size: 1rem;
    color: #666;
  }
  span {
    padding: 0 10px;
  }
}
</style>
