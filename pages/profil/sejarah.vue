<template>
  <fragment>
    <PageTitle :heading="heading" :subheading="subheading" :icon="icon" />
    <div class="content">
      <div class="main-card mb-3 card">
        <div class="card-body">
          <h5 class="card-title">
            Sejarah
          </h5>
          <form class="">
            <div class="position-relative row form-group">
              <label for="bprDeskripsi" class="col-sm-2 col-form-label">Deskripsi Sejarah BPR DP Taspen :</label>
              <div class="col-sm-10">
                <TextEditor v-model="text" />
                <!-- <ckeditor v-model="sejarah" type="classic" :config="editorConfig" /> -->
                <!-- <textarea id="bprDeskripsi" name="text" class="form-control" /> -->
              </div>
            </div>
            <div class="position-relative row form-check">
              <div class="col-sm-10 offset-sm-2">
                <button class="btn btn-primary" @click="save">
                  Simpan
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </fragment>
</template>
<script>
import Vue from 'vue'
import Fragment from 'vue-fragment'
import PageTitle from '~/components/_base/PageTitle'
import TextEditor from '~/components/TextEditor/TextEditor'

Vue.use(Fragment.Plugin)
export default {
  name: 'Sejarah',
  layout: 'sidebar',
  components: {
    PageTitle,
    TextEditor
  },
  data () {
    return {
      text: '',
      heading: 'Form Sejarah',
      subheading: 'Anda dapat merubah deskripsi Sejarah BPR DP Taspen pada form di bawah ini',
      icon: 'pe-7s-car icon-gradient bg-warm-flame',
      sejarah: '',
      editorConfig: {
        // The configuration of the editor.
        // removePlugins: [ 'Heading', 'Link', 'Image' ]
        toolbar: [
          'heading',
          'bold',
          'italic',
          'bulletedList',
          'numberedList',
          'blockQuote',
          'undo',
          'redo'
        ]
      }
    }
  },
  methods: {
    save (e) {
      e.preventDefault()
      console.log(this.text)
    }
  }
}
</script>
