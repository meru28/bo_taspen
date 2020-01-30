<template>
  <fragment>
    <PageTitle :heading="heading" :subheading="subheading" :icon="icon" />
    <div class="content">
      <div class="main-card mb-3 card">
        <div class="card-body">
          <h5 class="card-title">
            Layanan
          </h5>
          <form class="">
            <div class="position-relative row form-group">
              <label for="bprDeskripsi" class="col-sm-2 col-form-label">Deskripsi Layanan BPR DP Taspen :</label>
              <div class="col-sm-10">
                <editor id="myeditor" v-model="layanan" :editor-toolbar="customToolbar" />
              </div>
            </div>
            <div class="position-relative row form-check">
              <div class="col-sm-10 offset-sm-2">
                <button class="btn btn-primary" @click="onSubmit">
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
import axios from 'axios'
import { VueEditor } from 'vue2-editor'
import PageTitle from '~/components/_base/PageTitle'

Vue.use(Fragment.Plugin)
export default {
  name: 'Layanan',
  layout: 'sidebar',
  components: {
    PageTitle,
    'editor': VueEditor
  },
  data () {
    return {
      heading: 'Form Layanan',
      subheading: 'Anda dapat merubah deskripsi Layanan BPR DP Taspen pada form di bawah ini',
      icon: 'pe-7s-help2 icon-gradient bg-warm-flame',
      layanan: '',
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
    this.getLayanan()
  },
  methods: {
    async onSubmit (evt) {
      evt.preventDefault()
      const layanan = this.layanan
      if (confirm('Anda Yakin?')) {
        await axios.post('https://bprtaspen.com/api/produk/edit-layanan', { layanan })
          .then((res) => {
            alert('sukses edit layanan')
            window.location.reload()
          }).catch(err => alert('gagal edit layanan', err))
      }
    },
    async getLayanan () {
      await axios.get('https://bprtaspen.com/api/produk/layanan')
        .then((res) => {
          this.layanan = res.data.layanan.layanan
        })
        .catch(err => alert('gagal fetch layanan', err))
    }
  }
}
</script>
