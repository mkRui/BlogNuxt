import { DirectiveOptions } from 'vue'
const fix: DirectiveOptions = {
  inserted(el, option) {
    let scroll: number = 0
    let arr: Object[] = []
    window.addEventListener('scroll', () => {
      scroll++
      arr.push(window.scrollY)
      if (window.scrollY > 30) {
        var boola = window.scrollY > arr[scroll - 2] ? 1 : 0
        if (boola) {
          el.classList.add('hide')
        } else {
          setTimeout(() => {
            el.classList.remove('hide')
          }, 500)
        }
      }
    })
  }
}

export default fix
