import marked from 'marked'
// 引入
import Hljs from './highlight'

// 规定的语法列表
const languages = ['cpp', 'xml', 'bash', 'coffeescript', 'css', 'markdown', 'http', 'java', 'javascript', 'json', 'less', 'makefile', 'nginx', 'php', 'python', 'scss', 'sql', 'stylus']

const markedDown =  new marked.Renderer()

marked.setOptions({
  renderer: markedDown,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight (code, lang) {
    // 查看是否再 规定的语法内
    if (!~languages.indexOf(lang)) {
      // 不在规定的语法内  向该语法的库内添加该语言
      return Hljs.highlightAuto(code).value
    }
    // 默认使用
    return Hljs.highlight(lang, code).value
  }
})

// 段落解析
const textParse = text => {
  const textParse = text.includes('<img')
  if (textParse) return `<div class="text-img">${text}</div>`
  return `<p>${text}</p>`
}

const commentImageParse = (src, title, alt) => {
  return `<img
            src="${src}"
            title="${alt || 'scrscript.com'}"
            data-src="${src}"
            class="img-View"/>
          <div class="photo-tip">
            <span>
              ${alt || ''}
            </span>
          </div>
          `
}

const listParse = (body, ordered) => {
  let listArr = []
  body.split('\n').forEach((item, index) => {
    listArr.push(item.replace('<li>', `<li>${index + 1}.`))
  })
  return `<ol>${listArr.join('\n')}</ol>`
}

markedDown.image = commentImageParse
markedDown.paragraph = textParse
markedDown.list = listParse

export default (content, tags, parseHtml = false) => {
  if (typeof content !== 'string') {
    return ''
  }

  // console.log(content)

  // 生成目录树
  // var toc = []

  // const headingParse = function (text, level, raw) {
  //   var anchor = this.options.headerPrefix + raw.toLowerCase().replace(/[^\w]+/g, '-')
  //   if (level >= 4 || level === 1) return `<h${level} id="${anchor}">${text}</h${level}>\n`
  //   toc.push({
  //     anchor: `#header-${toc.length}`,
  //     level: level,
  //     text: text
  //   })
  //   return `<h${level} id="header-${toc.length - 1}">${text}</h${level}>\n`
  // }

  // markedDown.heading = headingParse

  // 不解析html标签相关内容
  // marked.setOptions({ sanitize: !parseHtml })

  // 返回解析
  return marked(content, { markedDown })
}

