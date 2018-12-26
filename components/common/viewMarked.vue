<template>
  <div>
    <div v-html="marked" class="viewMarked"></div>
  </div>
</template>
<script>

export default {
  name: 'viewMarked',
  data () {
    return {
      
    }
  },
  props: {
    marked: {
      type: String,
      default: ''
    }
  },
  components: {
  },
  methods: {
    
  }
}
</script>
<style lang="scss">
.viewMarked {
  width: 100%;

  @for $i from 1 to 6 {
    h#{$i} {
      border-bottom: 1px solid #eaecef;
      padding-bottom: 10px;
      margin-top: 24px;
      margin-bottom: 16px;
      font-weight: 600;
      line-height: 1.25;
    }
  }

  .text-img {
    width: 100%;
    img {
      width: 100%;
      cursor: pointer;
    }
    .photo-tip {
      color: #666;
      margin: 10px 0;
      span {
        border-bottom: 1px solid #e3e3e3;
        padding: 5px 0;
      }
    }
  }

  blockquote {
    padding: 0 1em;
    color: #6a737d;
    border-left: 0.25em solid #dfe2e5;
    margin-top: 0;
    margin-bottom: 16px;
  }

  pre {
    display: block;
    padding: 20px;
    background: #f6f8fa;
    overflow-y: hidden;
    overflow-x: auto;
  }

  ol {
    margin-top: 20px;
    margin-bottom: 16px;
    li {
      list-style: none;
      line-height: 2;
    }
  }

  p {
    a {
      color: #666;
    }
    code {
      background: #f9f2f4;
      color: #c7254e;
      padding: 0px 5px;
      margin: 0px 5px;
      
    }
  }

  table {
    width: 100%;
    border: 1px solid #e3e3e3;
    margin: 10px 0;
    tr {
      line-height: 2;
      border: 1px solid #e3e3e3;
      th {
        padding: 10px;
      }
      td {
        padding: 10px;
      }
    }
  }

}
</style>
