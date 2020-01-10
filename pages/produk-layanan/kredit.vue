<template>
  <fragment>
    <PageTitle :heading="heading" :subheading="subheading" :icon="icon" />
    <div class="content">
      <b-row>
        <b-col md="12">
          <b-card class="mb-3" no-body>
            <b-tabs pills card>
              <b-tab title="Kredit Usaha Pensiun" active>
                <div class="position-relative row form-group">
                  <div class="col-sm-10">
                    <ckeditor v-model="kreditPensiun" type="classic" :config="editorConfig" />
                  </div>
                </div>
                <div class="position-relative row form-check">
                  <div class="col-sm-10 offset-sm-2">
                    <button class="btn btn-primary">
                      Simpan
                    </button>
                  </div>
                </div>
              </b-tab>
              <b-tab title="Kredit Usaha">
                <div class="position-relative row form-group">
                  <div class="col-sm-10">
                    <ckeditor v-model="kreditUsaha" type="classic" :config="editorConfig" />
                  </div>
                </div>
                <div class="position-relative row form-check">
                  <div class="col-sm-10 offset-sm-2">
                    <button class="btn btn-primary">
                      Simpan
                    </button>
                  </div>
                </div>
              </b-tab>
            </b-tabs>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </fragment>
</template>
<script>
import Vue from 'vue'
import Fragment from 'vue-fragment'
import PageTitle from '~/components/_base/PageTitle'

Vue.use(Fragment.Plugin)
export default {
  name: 'Kredit',
  layout: 'sidebar',
  components: {
    PageTitle
  },
  data () {
    return {
      heading: 'Kredit',
      subheading: 'Silakan pilih tab kredit yang ingin Anda edit',
      icon: 'pe-7s-credit icon-gradient bg-plum-plate',
      kreditPensiun: '',
      kreditUsaha: '',
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
