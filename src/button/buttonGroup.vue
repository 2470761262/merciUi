<script lang="ts">
import { defineComponent, h } from 'vue'

export default defineComponent({
  name: 'MButtonGroup',
  setup (props, ctx) {
    return () => [
      h('div', {
        class: 'button-group'
      }, ctx.slots.default())
    ]
  }
})
</script>
