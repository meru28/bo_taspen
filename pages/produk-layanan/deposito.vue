<template>
  <fragment>
    <PageTitle :heading="heading" :subheading="subheading" :icon="icon" />
    <div class="content">
      <div class="main-card mb-3 card">
        <div class="card-body">
          <h5 class="card-title">
            Deposito
          </h5>
          <form class="">
            <div class="position-relative row form-group">
              <label for="bprDeskripsi" class="col-sm-2 col-form-label">Deskripsi Deposito BPR DP Taspen :</label>
              <div class="col-sm-10">
                <ckeditor v-model="deposito" type="classic" :config="editorConfig" />
                <!-- <textarea id="bprDeskripsi" name="text" class="form-control" /> -->
              </div>
            </div>
            <div class="position-relative row form-check">
              <div class="col-sm-10 offset-sm-2">
                <button class="btn btn-primary">
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

Vue.use(Fragment.Plugin)
export default {
  name: 'Sejarah',
  layout: 'sidebar',
  components: {
    PageTitle
  },
  data () {
    return {
      heading: 'Form Deposito',
      subheading: 'Anda dapat merubah deskripsi Deposito BPR DP Taspen pada form di bawah ini',
      icon: 'pe-7s-graph2 icon-gradient bg-warm-flame',
      deposito: '',
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
  }
}
</script>
