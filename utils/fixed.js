
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

