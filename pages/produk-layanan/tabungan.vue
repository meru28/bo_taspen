<template>
  <fragment>
    <Loading
      :active.sync="isLoading"
      :can-cancel="true"
      color="#0f4c75"
      :is-full-page="fullPage" />
    <PageTitle :heading="heading" :subheading="subheading" :icon="icon" />
    <ul class="body-tabs body-tabs-layout tabs-animated body-tabs-animated nav">
      <li class="nav-item">
        <a
          id="tab-0"
          role="tab"
          class="nav-link active"
          data-toggle="tab"
          href="#tabPensiun"
          @click="getTabunganPensiun">
          <span>Tabungan Pensiun</span>
        </a>
      </li>
      <li class="nav-item">
        <a
          id="tab-1"
          role="tab"
          class="nav-link"
          data-toggle="tab"
          href="#tabUmum"
          @click="getTabunganUmum">
          <span>Tabungan Umum</span>
        </a>
      </li>
    </ul>
    <div class="tab-content">
      <div id="tabPensiun" class="tab-pane tabs-animation fade show active" role="tabpanel">
        <div class="row">
          <div class="col-lg-12">
            <div class="main-card mb-3 card">
              <div class="card-header">
                <i class="header-icon lnr-license icon-gradient bg-plum-plate" />Tabungan Pensiun
              </div>
              <div class="card-body">
                <div class="tab-content">
                  <div id="tab-eg1-0" class="tab-pane active" role="tabpanel">
                    <editor id="myeditor" v-model="tabunganPensiun" :editor-toolbar="customToolbar" />
                  </div>
                </div>
              </div>
              <div class="d-block text-right card-footer">
                <button class="btn-wide btn btn-success" @click="onSubmitPensiun">
                  Simpan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="tabUmum" class="tab-pane tabs-animation fade" role="tabpanel">
        <div class="row">
          <div class="col-lg-12">
            <div class="main-card mb-3 card">
              <div class="card-header">
                <i class="header-icon lnr-license icon-gradient bg-plum-plate" />Tabungan Umum
              </div>
              <div class="card-body">
                <div class="tab-content">
                  <div id="tab-eg1-0" class="tab-pane active" role="tabpanel">
                    <editor id="myeditor" v-model="tabunganUmum" :editor-toolbar="customToolbar" />
                  </div>
                </div>
              </div>
              <div class="d-block text-right card-footer">
                <button class="btn-wide btn btn-success" @click="onSubmitUmum">
                  Simpan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </fragment>
</template>
<script>
import Vue from 'vue'
import Fragment from 'vue-fragment'
import { VueEditor } from 'vue2-editor'
import axios from 'axios'
import Loading from 'vue-loading-overlay'
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css'
import PageTitle from '~/components/_base/PageTitle'

Vue.use(Fragment.Plugin)
export default {
  name: 'Tabungan',
  layout: 'sidebar',
  middleware: ['check-auth', 'auth'],
  components: {
    PageTitle,
    'editor': VueEditor,
    Loading
  },
  data () {
    return {
      heading: 'Tabungan',
      subheading: 'Silakan pilih tab tabungan yang ingin Anda edit',
      icon: 'pe-7s-cash icon-gradient bg-plum-plate',
      tabunganPensiun: '',
      tabunganUmum: '',
      isLoading: false,
      fullPage: true,
      customToolbar: [
        [{ font: [] }],
        [{ header: [false, 1, 2, 3, 4, 5, 6] }],
        ['bold', 'italic', 'underline', 'strike'],
        [
          { align: '' },
          { align: 'center' },
          { align: 'right' },
          { align: 'justify' }
        ],
        [{ header: 1 }, { header: 2 }],
        ['blockquote'],
        [{ list: 'ordered' }, { list: 'bullet' }, { list: 'check' }],
        [{ script: 'sub' }, { script: 'super' }],
        [{ indent: '-1' }, { indent: '+1' }]
        // [{ color: [] }, { background: [] }],
        // ['link', 'image', 'video', 'formula'],
        // [{ direction: 'rtl' }],
        // ['clean']
      ]
    }
  },
  mounted () {
    this.getTabunganPensiun()
  },
  methods: {
    async onSubmitPensiun (evt) {
      evt.preventDefault()
      this.isLoading = true
      const tabunganPensiun = this.tabunganPensiun
      if (confirm('Anda Yakin?')) {
        await axios.post('https://bprtaspen.com/api/produk/tabungan/edit-tabungan-pensiun', { tabunganPensiun })
          .then((res) => {
            this.isLoading = false
            alert('sukses tambah tabungan pensiun')
            window.location.reload()
          }).catch(err => alert('gagal edit tabungan pensiun', err))
      }
    },
    async onSubmitUmum (evt) {
      evt.preventDefault()
      this.isLoading = true
      const tabunganUmum = this.tabunganUmum
      if (confirm('Anda Yakin?')) {
        await axios.post('https://bprtaspen.com/api/produk/tabungan/edit-tabungan-umum', { tabunganUmum })
          .then((res) => {
            this.isLoading = false
            alert('sukses tambah tabungan umum')
            window.location.reload()
          }).catch(err => alert('gagal edit tabungan umum', err))
      }
    },
    async getTabunganPensiun () {
      this.isLoading = true
      await axios.get('https://bprtaspen.com/api/produk/tabungan-pensiun')
        .then((res) => {
          this.isLoading = false
          this.tabunganPensiun = res.data.tabungan.tabunganPensiun
        })
        .catch(err => alert('gagal fetch tabungan pensiun', err))
    },
    async getTabunganUmum () {
      this.isLoading = true
      await axios.get('https://bprtaspen.com/api/produk/tabungan-umum')
        .then((res) => {
          this.isLoading = false
          this.tabunganUmum = res.data.tabungan.tabunganUmum
        })
        .catch(err => alert('gagal fetch tabungan umum', err))
    }
  }
}
</script>
