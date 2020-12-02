<template>
  <fragment>
    <Loading
      :active.sync="isLoading"
      color="#0f4c75"
      :can-cancel="true"
      :is-full-page="fullPage" />
    <PageTitle :heading="heading" :subheading="subheading" :icon="icon" />
    <div id="tab-content-0" class="tab-pane tabs-animation fade show active" role="tabpanel">
      <div class="row">
        <div class="col-md-6">
          <div class="main-card mb-3 card">
            <div class="card-body">
              <h5 class="card-title">
                Laporan Publikasi
              </h5>
              <form class="">
                <div class="position-relative form-group">
                  <label for="fileLaporan" class="">File PDF</label>
                  <input
                    id="fileLaporan"
                    ref="fileLaporan"
                    name="fileLaporan"
                    type="file"
                    accept="application/pdf"
                    class="form-control-file">
                  <small class="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>
                </div>
                <div class="position-relative form-group">
                  <label for="judulLaporan" class="">Judul</label>
                  <input id="judulLaporan" v-model="dataLaporan.judulLaporan" name="judul" placeholder="judul laporan" type="text" class="form-control">
                </div>
                <div class="position-relative form-group">
                  <label for="tglLaporan" class="">Tanggal Laporan</label><br>
                  <DatePicker id="tglLaporan" v-model="dataLaporan.tglLaporan" :format="momentFormat" placeholder="pilih tanggal laporan" />
                  <!-- <input id="tglLaporan" name="tglLaporan" placeholder="pilih tanggal laporan" type="password" class="form-control"> -->
                </div>
                <div class="position-relative form-group">
                  <label for="periodeLaporan" class="">Pilih Periode Laporan</label>
                  <select id="periodeLaporan" v-model="dataLaporan.periodeLaporan" name="select" class="form-control">
                    <option v-for="(item, i) in listPeriode" :key="i" :value="item">
                      {{ item }}
                    </option>
                  </select>
                </div>
                <!-- <div class="position-relative form-group">
                  <label for="exampleText" class="">Text Area</label>
                  <textarea id="exampleText" name="text" class="form-control" />
                </div> -->
                <button class="mt-1 btn btn-primary" @click.prevent="onSubmit">
                  Submit
                </button>
              </form>
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
import Loading from 'vue-loading-overlay'
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'
import moment from 'moment'
import PageTitle from '~/components/_base/PageTitle'
import { toFormData } from '~/helpers/custom-helpers'
Vue.use(Fragment.Plugin)

export default {
  name: 'LaporanPublikasi',
  layout: 'sidebar',
  middleware: ['check-auth', 'auth'],
  components: {
    PageTitle,
    Loading,
    DatePicker
  },
  data () {
    return {
      dataLaporan: {
        judulLaporan: '',
        tglLaporan: '',
        periodeLaporan: 'Bulanan'
      },
      listPeriode: ['Bulanan', 'Triwulan', 'Tahunan'],
      fileLaporan: [],
      heading: 'Form Laporan Publikasi',
      subheading: 'Silakan upload laporan publikasi Anda, untuk saat ini upload hanya bisa per file',
      icon: 'pe-7s-notebook icon-gradient bg-premium-dark',
      momentFormat: {
        stringify: (date) => {
          moment.locale('id')
          return date ? moment(date).format('LL') : ''
        }
      },
      isLoading: false,
      fullPage: true
    }
  },
  methods: {
    async onSubmit (evt) {
      evt.preventDefault()
      const formData = new FormData()
      const fileLaporan = this.$refs.fileLaporan.files
      const tahun = this.dataLaporan.tglLaporan.getFullYear()
      const headers = {
        headers: { 'Content-Type': 'multipart/form-data' }
      }
      toFormData(formData, fileLaporan, 'laporan')
      formData.append('dataLaporan', JSON.stringify(this.dataLaporan))
      // this.isLoading = true
      for (const value of formData.values()) {
        console.log('isi fd ::', value)
      }
      // await this.$axios.$post('http://localhost:8081/api/upload-pdf', { breng: 'ucluk' })
      await this.$axios.$post('http://localhost:8081/api/upload-pdf/' + tahun + '/' + this.dataLaporan.periodeLaporan, formData, headers)
    }
  }
}
</script>
