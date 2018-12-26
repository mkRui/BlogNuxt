<template>
  <ul class="well-form">
    <li>
      <h4>客官？(名字)</h4>
      <div>
        <input v-model="well.name" type="text" placeholder="客官请输入名称～">
      </div>
    </li>
    <li>
      <h4>要标题吗？</h4>
      <div>
        <input v-model="well.title" type="text" placeholder="客官请输入标题～">
      </div>
    </li>
    <li>
      <h4>客官请讲～</h4>
      <div>
        <comments @save='submit' ref="commentsBox"></comments>
      </div>
    </li>
  </ul>
</template>
<script>
import comments from '@/components/comments/commentsBox.vue'

export default {
  name: 'well-form',
  components: {
    comments
  },
  data () {
    return {
      well: {
        name: '',
        title: ''
      }
    }
  },
  methods: {
    submit (item) {
      this.$emit('submit', {
        ...this.well,
        content: item
      })
    },
    cancel () {
      this.well = {
        name: '',
        title: ''
      }
      this.$refs.commentsBox.cancel()
    }
  }
}
</script>
<style lang="scss" scoped>
.well-form {
  padding: 10px;
  > li {
    display: flex;
    margin-bottom: 10px;
    h4 {
      width: 140px;
      padding: 20px 10px 10px 10px;
    }
    > div {
      width: 100%;
      padding: 10px;
      > input {
        width: 100%;
        border: 0;
        padding: 10px;
        border: 1px solid #e3e3e3;
        border-radius: 5px;
      }
    }
  }
}
</style>
