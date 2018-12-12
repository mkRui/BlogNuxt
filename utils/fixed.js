
// 用以监听页面 滚动大小
export const fixed = {
  inserted (el, data) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        el.classList.add(data.arg === 'top' ? 'show' : 'reduction')
      } else {
        el.classList.remove(data.arg === 'top' ? 'show' : 'reduction')
      }
    })
  }
}

// 自动获取焦点
export const focus = {
  inserted(el, option) {
    var defClass = 'el-input'
    var defTag = 'input'
    var value = option.value || true
    if (typeof value === 'boolean') {
      value = { cls: defClass, tag: defTag, foc: value }
    } else {
      value = { cls: value.cls || defClass, tag: value.tag || defTag, foc: value.foc || false }
    }
    if (el.classList.contains(value.cls) && value.foc) {
      el.getElementsByTagName(value.tag)[0].focus()
    }
  }
}