<template>
  <div class="link-list">
    <div class='thislink'><nuxt-link to="/author">关于作者</nuxt-link></div>
    <div>|</div>
    <div class='thislink'><nuxt-link to="/leave">留言墙</nuxt-link></div>
    <div>|</div>
    <div class='thislink'><nuxt-link to="/archive">归档</nuxt-link></div>
  </div>
</template>
<script>
export default {
  name: 'linkList',
}
</script>
<style lang='scss' scoped>
.link-list {
  display: flex;
  justify-content: flex-start;
  background: #fff;
  padding: 10px;
  border-radius: 8px;
  margin-top: 10px;
  div {
    margin: 0px 10px 0px 10px;
  }
  .thislink {
    margin-left: 0px;
    margin-right: 0px;
    color: #092c35;
  }
  // &.show {
  //   position: fixed;
  //   top: 0;
  //   transform: translateY(290px);
  //   transition: .35s;
  // }
}

</style>
