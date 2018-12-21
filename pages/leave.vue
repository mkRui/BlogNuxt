<template>
  <div class="leave">
    <header>
      <button>留言墙</button>
    </header>
  </div>
</template>
<script>
export default {
  name: 'leave',
  // 指定定容器
  layout: 'container',
}
</script>
<style lang='scss'>
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
