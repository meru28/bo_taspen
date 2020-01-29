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
                <editor id="myeditor" v-model="deposito" :editor-toolbar="customToolbar" />
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
import { VueEditor } from 'vue2-editor'
import axios from 'axios'
import PageTitle from '~/components/_base/PageTitle'
// import { addProdukDeposito } from '~/api/produk'
// import properties from '~/properties'

Vue.use(Fragment.Plugin)
export default {
  name: 'Sejarah',
  layout: 'sidebar',
  components: {
    PageTitle,
    'editor': VueEditor
  },
  data () {
    return {
      heading: 'Form Deposito',
      subheading: 'Anda dapat merubah deskripsi Deposito BPR DP Taspen pada form di bawah ini',
      icon: 'pe-7s-graph2 icon-gradient bg-warm-flame',
      deposito: '',
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
    this.getDeposit()
  },
  methods: {
    async onSubmit (evt) {
      evt.preventDefault()
      const deposito = this.deposito
      if (confirm('Anda Yakin?')) {
        await axios.post('https://bprtaspen.com/api/produk/edit-deposito', { deposito })
          .then((res) => {
            alert('sukses edit deposito')
          }).catch(err => alert('gagal tambah deposito', err))
      }
    },

    async getDeposit () {
      await axios.get('https://bprtaspen.com/api/produk/deposito')
        .then((res) => {
          this.deposito = res.data.deposito.deposito
        })
        .catch(err => alert('gagal fetch deposito', err))
    }
  }
}
</script>
