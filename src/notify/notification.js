import { h, render } from 'vue'
import notification from './notification.vue'

const vnodeNotifyList = []
let seed = 1
const notify = (options = {}) => {
  const position = options.position || 'top-right'

  let verticalOffset = options.offset || 0

  vnodeNotifyList
    .filter((instance) => instance.component.props.position === position)
    .forEach((instance) => {
      if (instance.el.style.display !== 'none') {
        verticalOffset += (instance.el.offsetHeight || 0) + 16
      }
    })
  verticalOffset += 16
  const vnodeNotify = h(notification, {
    message: '谢谢你',
    // eslint-disable-next-line no-plusplus
    zIndex: seed++,
    offset: verticalOffset.length ? 20 : verticalOffset
  })

  const container = document.createElement('div')

  render(vnodeNotify, container)

  vnodeNotifyList.push(vnodeNotify)

  document.body.appendChild(vnodeNotify.el)
}

export default notify
