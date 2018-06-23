import { DirectiveOptions } from 'vue'
const scroll: DirectiveOptions = {
  inserted(el, option) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        el.classList.add('show')
      } else {
        el.classList.remove('show')
      }
    })
  }
}

export default scroll
