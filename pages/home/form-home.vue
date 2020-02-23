<template>
  <fragment>
    <Loading
      :active.sync="isLoading"
      color="#0f4c75"
      :can-cancel="true"
      :is-full-page="fullPage" />
    <PageTitle :heading="heading" :subheading="subheading" :icon="icon" />
    <div class="content">
      <div class="main-card mb-3 card">
        <div class="card-body" style="height : 630px">
          <h5 class="card-title">
            Beranda
          </h5>
          <form class="" @submit="onSubmit">
            <div class="position-relative row form-group">
              <label for="judulBeranda" class="col-sm-2 col-form-label">Judul Beranda</label>
              <div class="col-sm-10">
                <input
                  id="judulBeranda"
                  v-model="titleTaspen"
                  class="form-control"
                  name="judul"
                  placeholder="judul beranda"
                  type="text">
              </div>
            </div>
            <div class="position-relative row form-group">
              <label for="periode" class="col-sm-2 col-form-label">Periode</label>
              <div class="col-sm-10">
                <input
                  id="periode"
                  v-model="periode"
                  class="form-control"
                  type="text"
                  name="periode"
                  placeholder="periode">
              </div>
            </div>
            <div class="position-relative row form-group">
              <label for="jangkaWaktu" class="col-sm-2 col-form-label">Jangka Waktu</label>
              <div class="col-sm-10">
                <input
                  id="jangkaWaktu"
                  v-model="jangkaWaktu"
                  class="form-control"
                  name="jangkaWaktu"
                  placeholder="jangka waktu"
                  type="text">
              </div>
            </div>
            <div class="position-relative row form-group">
              <label for="sukuBunga" class="col-sm-2 col-form-label">Suku Bunga</label>
              <div class="col-sm-10">
                <input
                  id="sukuBunga"
                  v-model="sukuBunga"
                  class="form-control"
                  name="sukuBunga"
                  placeholder="suku bunga"
                  type="text">
              </div>
            </div>
            <div class="form-row">
              <div class="col-md-4">
                <div class="position-relative form-group">
                  <label for="nasabah" class="">Nasabah</label>
                  <input
                    id="nasabah"
                    v-model="dataNasabah.nasabah"
                    class="form-control"
                    name="nasabah"
                    placeholder="jumlah nasabah"
                    type="text">
                </div>
              </div>
              <div class="col-md-4">
                <div class="position-relative form-group">
                  <label for="deposit" class="">Deposit</label>
                  <input
                    id="deposit"
                    v-model="dataNasabah.deposit"
                    class="form-control"
                    name="deposit"
                    placeholder="jumlah deposito"
                    type="text">
                </div>
              </div>
              <div class="col-md-4">
                <div class="position-relative form-group">
                  <label for="kredit" class="">Kredit</label>
                  <input
                    id="kredit"
                    v-model="dataNasabah.kredit"
                    class="form-control"
                    name="kredit"
                    placeholder="jumlah kreditur"
                    type="text">
                </div>
              </div>
            </div>
            <!-- <div class="position-relative row form-group"><label for="exampleSelect" class="col-sm-2 col-form-label">Select</label>
              <div class="col-sm-10"><select name="select" id="exampleSelect" class="form-control"></select></div>
            </div> -->
            <!-- <div class="position-relative row form-group"><label for="exampleSelectMulti" class="col-sm-2 col-form-label">Select Multiple</label>
              <div class="col-sm-10"><select multiple="" name="selectMulti" id="exampleSelectMulti" class="form-control"></select></div>
            </div> -->
            <div class="position-relative row form-group">
              <label for="bprDeskripsi" class="col-sm-2 col-form-label">Deskripsi BPR DP Taspen :</label>
              <div class="col-sm-10">
                <textarea id="bprDeskripsi" v-model="bprDescription" name="text" class="form-control" style="height : 200px" />
              </div>
            </div>
            <div class="position-relative row form-check">
              <div class="col-sm-10 offset-sm-2">
                <button class="btn btn-primary" type="submit">
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
import Loading from 'vue-loading-overlay'
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css'
import PageTitle from '~/components/_base/PageTitle'

Vue.use(Fragment.Plugin)

export default {
  name: 'FormHome',
  layout: 'sidebar',
  middleware: ['check-auth', 'auth'],
  components: {
    PageTitle,
    Loading
  },
  data () {
    return {
      heading: 'Form Beranda',
      subheading: 'Silakan isi beberapa input di bawah ini untuk mengganti konten pada halaman Beranda.',
      icon: 'pe-7s-browser icon-gradient bg-tempting-azure',
      titleTaspen: '',
      periode: '',
      jangkaWaktu: '',
      sukuBunga: 0,
      dataNasabah: {
        nasabah: 0,
        deposit: 0,
        kredit: 0
      },
      bprDescription: '',
      isLoading: false,
      fullPage: true
    }
  },
  mounted () {
    this.getHome()
  },
  methods: {
    async getHome () {
      this.isLoading = true
      await axios.get('https://bprtaspen.com/api/home')
        .then((res) => {
          this.isLoading = false
          this.titleTaspen = res.data.home.titleTaspen
          this.periode = res.data.home.periode
          this.jangkaWaktu = res.data.home.jangkaWaktu
          this.sukuBunga = res.data.home.sukuBunga
          this.dataNasabah.nasabah = res.data.home.dataNasabah.nasabah
          this.dataNasabah.deposit = res.data.home.dataNasabah.deposit
          this.dataNasabah.kredit = res.data.home.dataNasabah.kredit
          this.bprDescription = res.data.home.bprDescription
        }).catch(err => console.log('gagal fetching home', err))
    },

    async onSubmit (evt) {
      evt.preventDefault()
      const titleTaspen = this.titleTaspen
      const periode = this.periode
      const jangkaWaktu = this.jangkaWaktu
      const sukuBunga = this.sukuBunga
      const dataNasabah = this.dataNasabah
      const bprDescription = this.bprDescription
      this.isLoading = true
      await axios.post('https://bprtaspen.com/api/home/edit', {
        titleTaspen, periode, jangkaWaktu, sukuBunga, dataNasabah, bprDescription
      })
        .then((res) => {
          this.isLoading = false
          console.log('sukses update home')
          alert('sukses update home')
          window.location.reload()
        })
        .catch(err => console.log('gagal update home', err))
    }
  }
}
</script>
