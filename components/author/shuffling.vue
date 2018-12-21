<template>
  <div class="development">
    <p>{{ title }}</p>
    <el-carousel height="120px">
      <el-carousel-item v-for="item in author.codeCooperation.split(',')" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  name: 'developments',
  data () {
    return {
      title: '联合开发人 and 贡献人'
    }
  },
  computed: {
    author () {
      return this.$store.state.global.global
    }
  }
}
</script>
<style lang='scss' scoped>
  .development {
    margin-top: 20px;
    padding:10px 10px 10px 20px;
    border-left: 1px solid $border;
    border-top: 1px solid $border;
    margin-left: 20px;
    > p {
      margin-bottom: 10px;
    }
    .el-carousel__item h3 {
      color: #444;
      font-size: 18px;
      opacity: 0.75;
      margin: 0;
      text-align: center;
      line-height: 120px;
    }
    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
      border-radius: 5px;
    }
    .el-carousel__item:nth-child(2n+1) {
      background-color: #d3dce6;
      border-radius: 5px;
    }
  }
</style>
