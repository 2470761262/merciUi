
<script >
import { defineComponent, getCurrentInstance, resolveComponent, h } from 'vue'

export default defineComponent({
  name: 'notificationTest',
  setup () {
    const { proxy } = getCurrentInstance()

    const button = resolveComponent('MButton')

    return () => h(button, {
      onClick () {
        proxy.$notify()
      }
    }, {
      default: () => '点我创建notify'
    })
  }
})
</script>
