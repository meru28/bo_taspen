<template>
  <editor id="myeditor" :options="editorOptions" height="500px" />
</template>
<script>
import 'tui-editor/dist/tui-editor.css'
import 'tui-editor/dist/tui-editor-contents.css'
import 'codemirror/lib/codemirror.css'
import { Editor } from '@toast-ui/vue-editor'
export default {
  name: 'TextEditor',
  components: {
    'editor': Editor
  },
  data () {
    return {
      editorOptions: {
        toolbarItems: [
          'heading',
          'bold',
          'italic',
          'strike',
          'divider',
          'hr',
          'quote',
          'divider',
          'ul',
          'ol',
          // 'task',
          'indent',
          'outdent'
          // 'table',
          // 'image',
          // 'link',
          // 'divider'
          // 'code'
          // 'codeblock'
        ]
      }
    }
  }
}
</script>
<style scoped>
#myeditor {
  background-color: white;
}
</style>
