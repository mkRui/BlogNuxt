<template>
  <div class="link-list" v-fixedTag>
    <div class='thislink'><nuxt-link to="/about">关于作者</nuxt-link></div>
    <div>···</div>
    <div class='thislink'><nuxt-link to="/messages">留言墙</nuxt-link></div>
    <div>···</div>
    <div class='thislink'><nuxt-link to="/archive">归档</nuxt-link></div>
  </div>
</template>
<script>
export default {
  name: 'linkList'
}
</script>
<style lang='scss' scoped>
.link-list {
  display: flex;
  justify-content: flex-start;
  div {
    margin-left: 10px;
    margin-right: 10px;
  }
  .thislink {
    margin-left: 0px;
    margin-right: 0px;
  }
  &.show {
    position: fixed;
    top: 0;
    transform: translateY(160px);
    transition: .35s;
  }
}

</style>
