<template>
<transition name='fadeIn' mode="out-in">
  <div class="mobile-dialog" v-show="slideDialog" @touchstart="close">
    <transition name='left' mode="out-in">
      <div class="main" v-if="slideDialog"></div>
    </transition>
  </div>
</transition>
</template>
<script>
export default {
  name: 'mobileDialog',
  data () {
    return {

    }
  },
  props: {
    slideDialog: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    slideDialog: {
      handler: function () {
        this.$store.dispatch('bodyState', this.slideDialog)
      },
      immediate: true
    }
  },
  methods: {
    close () {
      this.$emit('update:slideDialog', false)
      console.log(1)
    }
  }
}
</script>
<style lang='scss' scoped>
.mobile-dialog {
  background: rgba(102, 102, 102, .8);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  .main {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    background: #fff;
  }
}
</style>
