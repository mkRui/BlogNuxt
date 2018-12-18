import emojiData from './emoji-data'

/**
 * @param {content} 参数
 */

export function emoji (content) {
  let emojiContent = content
  emojiData.forEach(item => {
    emojiContent = emojiContent.replace(item.name, item.icon)
  })
  return emojiContent
}
