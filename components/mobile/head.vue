<template>
<div>
  <!-- header -->
  <div class="head">
    <div class="header">
      <i class="iconfont icon-change" @click="visableSlide = true"></i>
      <img src="@/assets/image/backMoblie.png" alt="">
    </div>
  </div>

  <!-- 侧边栏弹出框 -->
  <dialog-slide :slideDialog.sync='visableSlide'></dialog-slide>
</div>
</template>
<script>
import dialogSlide from './dialog.vue'

export default {
  name: "pchead",
  data () {
    return {
      visableSlide: false
    }
  },
  components: {
    dialogSlide
  }
}
</script>
<style lang="scss" scoped>
.head {
  width: 100%;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: $border;
    padding: 6px 10px;
    position: relative;
    overflow: hidden;
    img {
      position: absolute;
      width: 17rem;
      top: .5rem;
      right: 1rem;
    }
    i {
      // cursor: pointer;
      display: block;
      // margin: 10px;
      // border: 1px solid #fff;
      padding: 1px 6px;
      color: #fff;
      border-radius: 5px;
      font-size: 1.6rem;
    }
  }
}
</style>
