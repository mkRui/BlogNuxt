<template>
  <section class="container">
    <h1 class="title">
      {{ error.statusCode }}
    </h1>
    <h2 class="info">
      {{ error.message }}
    </h2>
    <nuxt-link class="button" to="/" v-if="error.statusCode === 404">
      HomePage
    </nuxt-link>
  </section>
</template>
<script>
export default {
  props: ['error']
}
</script>

<style scoped lang='scss'>
.container {
  text-align: center;
}
.title
{
  margin-top: 15px;
  font-size: 35em;
  color: #274156;
}
.info
{
  font-weight: 300;
  color: #9aabb1;
  margin-bottom: 20px;
  font-size: 2em;
}
.button
{
  font-size: 1.5em;
  margin-top: 50px;
}
</style>
