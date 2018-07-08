<template>
  <div class="linkList" v-fixed>
      <div class='thislink'><nuxt-link to="/about">关于作者</nuxt-link></div>
      <div>···</div>
      <div class='thislink'><nuxt-link to="/message">留言墙</nuxt-link></div>
      <div>···</div>
      <div class='thislink'><nuxt-link to="/archive">归档</nuxt-link></div>
  </div>
</template>
<script>
export default {
  name: 'linkList',
  mounted () {
  },
  directives: {
    fixed: {
      inserted: function (el) {
        window.addEventListener('scroll', () => {
          if (window.scrollY > 840) {
            el.classList.add('fixeds')
          } else {
            el.classList.remove('fixeds')
          }
        })
      }
    }
  }
}
</script>
<style scoped lang='scss'>
  .linkList {
    div {
      float: left;
      margin-left: 10px;
      margin-right: 10px;
    }
    .thislink {
      margin-left: 0px;
      margin-right: 0px;
    }
  }
  .fixeds {
    width: 346.55px;
    max-width: 346.55px;
    position: fixed;
    top: 407px;
    transform: translateY(10px);
    transition: .35s;
  }
</style>
