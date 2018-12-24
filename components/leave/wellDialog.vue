<template>
  <transition name="slide-up" mode="out-in">
    <div class="well-dialog" @click.stop="close" v-if='visible'>
      <div class='control' @click.stop=''>
        <header>
          <img src="@/assets/image/loginOne.png" alt="">
          <i class="el-icon-close" @click.stop="close"></i>
        </header>
        <div class="main">
          <slot name="main"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'wellDialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    visible: {
      handler: function () {
        this.$store.dispatch('bodyState', this.visible)
      },
      immediate: true
    }
  },
  methods: {
    close () {
      this.$emit('update:visible', false)
    }
  }
}
</script>
<style lang="scss" scoped>
.well-dialog {
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;
  top: 0px;
  z-index: 2000;
  background: rgba(102, 102, 102, 0.6);
  .control {
    width: 630px;
    height: 291px;
    position: fixed;
    top: 50%;
    left: 50%;
    margin-left: -315px;
    margin-top: -145px;
    background: #fff;
    z-index: 2001;
    > header {
      width: 100%;
      padding: 20px 10px;
      display: flex;
      justify-content: flex-end;
      border-bottom: 1px solid #e3e3e3;
      position: relative;
      overflow: hidden;
      i {
       cursor: pointer;
      }
      img {
        position: absolute;
        width: 65px;
        height: 83px;
        left: 50%;
        top: -10px;
      }
    }
  }
}
</style>
