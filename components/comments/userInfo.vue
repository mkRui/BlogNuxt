<template>
  <div class="info">
    <div>
      <input placeholder="请输入昵称（* 必填）" v-model="info.user" @blur="validInput('user')" type="text">
      <transition name="slide-up">
        <span v-show="validState.user">请输入昵称</span>
      </transition>
    </div>
    <div>
      <input placeholder="请输入邮箱（* 必填）非公开" v-model="info.email"  @blur="validInput('email')" type="text">
      <transition name="slide-up">
        <span v-show="validState.email">请输入邮箱的正确格式</span>
      </transition>
    </div>
    <div>
      <input placeholder="请输入您的网址" v-model="info.url" type="text">
    </div>
  </div>
</template>
<script>
export default {
  name: 'userInfo',
  data () {
    return {
      info: {
        user: '',
        email: '',
        url: ''
      },
      validState: {
        user: false,
        email: false
      }
    }
  },
  methods: {
    validate (dataFun) {
      for (let i in this.info) {
        if (i !== 'url') {
          if (!this.info[i]) {
            this.validState[i] = true
          } else {
            this.validState[i] = false
            if (i === 'email' && /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(this.info[i])) {
              this.validState[i] = false
            } else if (i === 'email') {
              this.validState[i] = true
            }
          }
        }
      }
      return dataFun(!Object.values(this.validState).includes(true))
    },
    validInput (item) {
      if (item === 'email' && !/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(this.info[item])) {
        this.validState[item] = true
      } else {
        if (!this.info[item]) {
          this.validState[item] = true
        } else {
          this.validState[item] = false
        }
      }
    }
  },
  mounted () {
    if (JSON.parse(localStorage.getItem('user'))) {
      const data = JSON.parse(localStorage.getItem('user'))
      this.info = {
        user: data.user,
        email: data.email,
        url: data.url
      }
    }
  }
}
</script>
<style lang='scss' scoped>
.info {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  div {
    width: 33.3%;
    padding: 5px 5px 5px 0px;
    input {
      width: 100%;
      border: 1px solid #dbdfe6;
      padding: 5px;
      border-radius: 5px;
    }
    span {
      color: #f56c6c;
      font-size: 13px;
      padding-top: 10px;
    }
  }
}
</style>
