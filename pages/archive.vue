<template>
  <div class="archive-list">
    <div class="tag">
      <!-- 热门标签 -->
      <hot-tag :mode='true'></hot-tag>
    </div>

    <div class="main">
      <ul>
        <li v-for="(item, index) in archiveList" :key="index">
          <h4>{{ item.year }}</h4>
          <div v-for="(elem, logo) in item.child" :key="logo">
            <p>{{ elem.month }}月</p>
            <ol>
              <li v-for="data in elem.child" :key="data.id">
                <span>{{ data.createTime.split('-')[2] }}</span>
                <nuxt-link :to="`/article/${data.id}`">{{ data.articleTitle }}</nuxt-link>
              </li>
            </ol>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import hotTag from '@/components/article/hotTag.vue'

export default {
  // 指定定容器
  layout: 'container',
  name: 'archive',
  data () {
    return {
      list: []
    }
  },
  fetch ({ store, params, query }) {
    return Promise.all([
      store.dispatch('common/getHotTag'),
      store.dispatch('article/articleArchive')
    ])
  },
  computed: {
    archiveList () {
      return this.$store.state.article.archiveList
    }
  },
  components: {
    hotTag
  }
}
</script>
<style lang='scss' scoped>
.archive-list {
  width: 956px;
  margin: 0 auto;
  > .tag {
    padding: 15px 0px;
    border-bottom: 2px solid #E3E3E3;
  }
  > .main {
    > ul {
      > li {
        margin-bottom: 20px;
        > h4 {
          font-size: 22px;
          font-weight: normal;
          letter-spacing: 3px;
          color: rgba(0,0,0,.6);
          margin-bottom: 10px;
          margin-top: 10px;
        }
        > h4 ~ div {
          margin-left: 20px;
          font-weight: normal;
          letter-spacing: 3px;
          color: rgba(0,0,0,.64);
          margin-bottom: 10px;
          margin-top: 10px;
          > ol {
            margin: 10px 20px;
            li {
              line-height: 2.5;
              display: flex;
              align-items: center;
              &::before {
                content: '';
                display: block;
                width: 10px;
                height: 10px;
                background: #e3e3e3;
                border-radius: 50%;
                margin-right: 10px;
              }
              span {
                font-size: 13px;
                color: #999;
                margin-right: 15px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
