<template>
  <ul class="well-form">
    <li>
      <h4>客官？(名字)</h4>
      <div>
        <input v-model="state" type="text" placeholder="客官请输入～">
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
  methods: {
    submit (item) {
      this.$store
      console.log(item)
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
        border: 0;
        padding: 10px;
        border: 1px solid #e3e3e3;
        border-radius: 5px;
      }
    }
  }
}
</style>
