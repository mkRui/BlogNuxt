<template>
  <div class="head">
    <div class="header">
      <h2>he<span>llo</span>  world </h2>
      <p>hi Welcome to the blog</p>
    </div>
    <div class="nav">
      <div>
          <ul class="clearfix">
            <li v-for="i in nav" :key="i" @click="Link(i)"> {{ i }} </li>
          </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "pchead",
  data () {
    return {
      nav: ['技术', '读书', '娱乐', '电子']
    }
  }
}
</script>
<style lang="scss" scoped>
.head {
    width: 100%;
    min-width: 1200px;
    position: fixed;
    top: 0;
    z-index: 99;
    background-color: rgb(235,235,235);
    .header {
      width: 1024px;
      height: 84px;
      margin: 0 auto;
      font-family: 'Monda', sans-serif;
      text-transform: uppercase;
      box-sizing: border-box;
      padding-left: 30px;
      // background-image: url('./../../assets/image/back.png');
      background-position-y: -515px;
      background-position-x: -170px;
      h2 {
        color: #444;
        font-size: 40px;
        font-weight: bolder;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        span {
          color: $border;
        }
      }
      p {
        color: #444444;
        font-size: 14px;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      }
    }
    .nav {
      width: 100%;
      height: 40px;
      background-color: $head;

      div {
        width: 1024px;
        height: 40px;
        margin: 0 auto;

        ul {
          li {
            width: 100px;
            height: 30px;
            color: #fff;
            float: left;
            text-align: center;
            line-height: 40px;
            font-weight: bolder;
            font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
          }
          li:hover {
            background-color: $border;
          }
        }
      }
    }
  }
</style>
