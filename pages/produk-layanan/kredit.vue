<template>
  <fragment>
    <PageTitle :heading="heading" :subheading="subheading" :icon="icon" />
    <ul class="body-tabs body-tabs-layout tabs-animated body-tabs-animated nav">
      <li class="nav-item">
        <a
          id="tab-0"
          role="tab"
          class="nav-link active"
          data-toggle="tab"
          href="#tabPensiun"
          @click="getKreditUsahaPensiun">
          <span>Kredit Usaha Pensiun</span>
        </a>
      </li>
      <li class="nav-item">
        <a
          id="tab-1"
          role="tab"
          class="nav-link"
          data-toggle="tab"
          href="#tabUmum"
          @click="getKreditUsaha">
          <span>Kredit Usaha</span>
        </a>
      </li>
    </ul>
    <div class="tab-content">
      <div id="tabPensiun" class="tab-pane tabs-animation fade show active" role="tabpanel">
        <div class="row">
          <div class="col-lg-12">
            <div class="main-card mb-3 card">
              <div class="card-header">
                <i class="header-icon lnr-license icon-gradient bg-plum-plate" />Kredit Usaha Pensiun
              </div>
              <div class="card-body">
                <div class="tab-content">
                  <div id="tab-eg1-0" class="tab-pane active" role="tabpanel">
                    <editor id="myeditor" v-model="kreditUsahaPensiun" :editor-toolbar="customToolbar" />
                  </div>
                </div>
              </div>
              <div class="d-block text-right card-footer">
                <button class="btn-wide btn btn-success" @click="onSubmitKup">
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
                <i class="header-icon lnr-license icon-gradient bg-plum-plate" />Kredit Pensiun
              </div>
              <div class="card-body">
                <div class="tab-content">
                  <div id="tab-eg1-0" class="tab-pane active" role="tabpanel">
                    <editor id="myeditor" v-model="kreditUsaha" :editor-toolbar="customToolbar" />
                  </div>
                </div>
              </div>
              <div class="d-block text-right card-footer">
                <button class="btn-wide btn btn-success" @click="onSubmitKu">
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
import axios from 'axios'
import { VueEditor } from 'vue2-editor'
import PageTitle from '~/components/_base/PageTitle'

Vue.use(Fragment.Plugin)
export default {
  name: 'Kredit',
  layout: 'sidebar',
  components: {
    PageTitle,
    'editor': VueEditor
  },
  data () {
    return {
      heading: 'Kredit',
      subheading: 'Silakan pilih tab kredit yang ingin Anda edit',
      icon: 'pe-7s-credit icon-gradient bg-plum-plate',
      kreditUsahaPensiun: '',
      kreditUsaha: '',
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
    this.getKreditUsahaPensiun()
  },
  methods: {
    async onSubmitKup (evt) {
      evt.preventDefault()
      const kreditUsahaPensiun = this.kreditUsahaPensiun
      if (confirm('Anda Yakin?')) {
        await axios.post('https://bprtaspen.com/api/produk/kredit/edit-kredit-up', { kreditUsahaPensiun })
          .then((res) => {
            alert('sukses tambah kredit usaha pensiun')
            window.location.reload()
          }).catch(err => alert('gagal edit kredit usaha pensiun', err))
      }
    },

    async onSubmitKu (evt) {
      evt.preventDefault()
      const kreditUsaha = this.kreditUsaha
      if (confirm('Anda Yakin?')) {
        await axios.post('https://bprtaspen.com/api/produk/kredit/edit-kredit-u', { kreditUsaha })
          .then((res) => {
            alert('sukses tambah kredit usaha')
            window.location.reload()
          }).catch(err => alert('gagal edit kredit usaha', err))
      }
    },

    async getKreditUsahaPensiun () {
      await axios.get('https://bprtaspen.com/api/produk/kredit-up')
        .then((res) => {
          this.kreditUsahaPensiun = res.data.kredit.kreditUsahaPensiun
        })
        .catch(err => alert('gagal fetch kredit usaha pensiun', err))
    },
    async getKreditUsaha () {
      await axios.get('https://bprtaspen.com/api/produk/kredit-u')
        .then((res) => {
          this.kreditUsaha = res.data.kredit.kreditUsaha
        })
        .catch(err => alert('gagal fetch kredit usaha', err))
    }
  }
}
</script>
