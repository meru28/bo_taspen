<template>
  <editor id="myeditor" :value="editorText" :options="editorOptions" height="500px" />
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
  props: {
    editorText: {
      type: String,
      required: false,
      default: ''
    }
  },
  data () {
    return {
      // editorText: '',
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
