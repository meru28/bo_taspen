<template>
  <fragment>
    <PageTitle :heading="heading" :subheading="subheading" :icon="icon" />
    <div class="content">
      <b-row>
        <b-col md="12">
          <b-card class="mb-3" no-body>
            <b-tabs pills card>
              <b-tab title="Tabungan Pensiun" active>
                <div class="position-relative row form-group">
                  <div class="col-sm-10">
                    <ckeditor v-model="tabunganPensiun" type="classic" :config="editorConfig" />
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
              <b-tab title="Tabungan Umum">
                <div class="position-relative row form-group">
                  <div class="col-sm-10">
                    <ckeditor v-model="tabunganUmum" type="classic" :config="editorConfig" />
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
  name: 'Tabungan',
  layout: 'sidebar',
  components: {
    PageTitle
  },
  data () {
    return {
      heading: 'Tabungan',
      subheading: 'Silakan pilih tab tabungan yang ingin Anda edit',
      icon: 'pe-7s-cash icon-gradient bg-plum-plate',
      tabunganPensiun: '',
      tabunganUmum: '',
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
