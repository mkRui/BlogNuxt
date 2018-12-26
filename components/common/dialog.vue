<template>
  <div class="dialog">
    <transition name="fade" mode="out-in">
      <div class="view" v-if="visible">
        <span class="close el-icon-close" @click="cancel"></span>
        <img :src="imgSrc">
        <span class="mask" @click="cancel"></span>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'dialogView',
  props: {
    visible: {
      type: Boolean,
      default: true
    },
    imgSrc: {
      type: String,
      default: ''
    }
  },
  methods: {
    cancel () {
      this.$emit('update:visible', false)
    }
  }
}
</script>
<style lang="scss" scoped>
.dialog {
  .view {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 20001;
    .mask {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: #666;
    }
    img {
      width: 60%;
      position: absolute;
      z-index: 1;
      display: block;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    .close {
      position: absolute;
      top: 20px;
      right: 20px;
      z-index: 1;
      color: #fff;
    }
  }
}
</style>
