<template>
  <div class="leave">
    <!-- 标题 -->
    <header>
      <button @click="dialog = true">留言墙</button>
    </header>

    <!-- 留言墙控制 -->
    <div class="wellControl">
      <well></well>
    </div>

    <!-- 留言评论 -->
    <well-dialog :visible.sync='dialog'>
      <well-form @submit="save" slot="main" ref="wellForm"></well-form>
    </well-dialog>

    

  </div>
</template>
<script>
import well from '@/components/leave/well.vue'

import wellDialog from '@/components/leave/wellDialog.vue'

import wellForm from '@/components/leave/wellForm.vue'

export default {
  name: 'leave',
  // 指定定容器
  layout: 'container',
  data () {
    return {
      dialog: false
    }
  },
  fetch ({ store, params }) {
    return store.dispatch('leave/getLeaveMessage', {
      pageNo: 1,
      pageSize: 20
    })
  },
  components: {
    well,
    wellDialog,
    wellForm,
  },
  methods: {
    async save (item) {
      const res = await this.$store.dispatch('leave/addLeaveMessage', item)
      if (!res) {
        this.$refs.wellForm.cancel()
        this.dialog = false
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', () => {
      let innerH = document.body.scrollHeight - document.documentElement.clientHeight
      if (window.scrollY >= innerH) {
        this.$store.dispatch('leave/moveLeave')
      }
    })
  }
}
</script>
<style lang='scss' scoped>
.leave {
  width: 100%;
  header {
    width: 100%;
    margin-top: 20px;
    text-align: center;
    button {
      color: #fff;
      background: url('./../assets/image/transforma.gif') no-repeat;
      background-size: cover;
    }
  }
}
</style>
