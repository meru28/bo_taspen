<template>
  <fragment>
    <PageTitle :heading="heading" :subheading="subheading" :icon="icon" />
    <div class="content">
      <div class="main-card mb-3 card">
        <div class="card-body">
          <h5 class="card-title">
            Galeri Video
          </h5>
          <div class="col-md-6">
            <div class="i-frame-yt">
              <iframe
                width="50%"
                height="100%"
                :src="hiddenSource"
                frameborder="0"
                allowfullscreen
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" />
            </div>
          </div>
          <b-form @submit="onSubmitEdit">
            <div class="position-relative row form-group">
              <label for="embedVideo" class="col-sm-2 col-form-label">Sumber Embed Video :</label>
              <div class="col-sm-10">
                <textarea
                  id="embedVideo"
                  v-model="videoTaspen"
                  placeholder="Paste seluruh kode embed dari youtube Anda disini"
                  name="videoTaspen"
                  class="form-control" />
              </div>
            </div>
            <!-- Pilih gambar :
            <input
              id="filesInfoBank"
              ref="filesInfoBank"
              type="file"
              name="filesInfoBank"
              class="form-control"
              multiple
              @change="handleFilesUpload"> -->
            <br>
            <div class="position-relative row form-check">
              <div class="col-sm-10 offset-sm-2">
                <button class="btn btn-primary" type="submit">
                  Simpan
                </button>
              </div>
            </div>
          </b-form>
        </div>
      </div>
    </div>
  </fragment>
</template>

<script>
import Vue from 'vue'
import Fragment from 'vue-fragment'
import axios from 'axios'
import { JSDOM } from 'jsdom'
// import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faTrashAlt,
  faCheck,
  faCalendarAlt,
  faAngleDown,
  faAngleUp,
  faTh
} from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import PageTitle from '~/components/_base/PageTitle'
import { toFormData } from '~/helpers/custom-helpers'

library.add(
  faTrashAlt,
  faCheck,
  faAngleDown,
  faAngleUp,
  faTh,
  faCalendarAlt
)
Vue.use(Fragment.Plugin)

export default {
  name: 'GaleriVideoBank',
  layout: 'sidebar',
  components: {
    PageTitle
    // VuePerfectScrollbar,
    // 'font-awesome-icon': FontAwesomeIcon
  },
  data () {
    return {
      heading: 'Galeri Video Bank',
      subheading: 'Silakan edit galeri video bank di bawah ini, input embed kode yang telah Anda dapatkan dari youtube.',
      icon: 'pe-7s-mouse icon-gradient bg-love-kiss',
      imgGaleriBank: [],
      videoTaspen: '',
      hiddenSource: ''
    }
  },
  mounted () {
    this.getInfoBank()
  },
  methods: {
    handleFilesUpload () {
      this.imgGaleriBank = this.$refs.filesInfoBank.files
    },

    async getInfoBank () {
      await axios.get('https://bprtaspen.com/api/info-bank')
        .then((res) => {
          console.log('info bank', res)
          this.hiddenSource = res.data.infoBank.videoTaspen
        }).catch(err => console.log('gagal fetch info bank', err))
    },

    async onSubmit (evt) {
      evt.preventDefault()
      const source = this.getSourceYt()
      const formData = new FormData()
      const headers = {
        headers: { 'Content-Type': 'multipart/form-data' }
      }
      toFormData(formData, this.imgGaleriBank, 'pictInfoBank')
      formData.append('videoTaspen', JSON.stringify(source))
      for (const value of formData.values()) {
        console.log('isi fd ::', value)
      }
      console.log('form data', formData)
      await axios.post('https://bprtaspen.com/api/info-bank/add', formData, headers)
        .then(res => alert('sukses tambah video'))
        .catch(err => console.log('sukses video error :', err))
    },

    async onSubmitEdit (evt) {
      evt.preventDefault()
      const source = this.getSourceYt()
      // console.log('test', source)
      await axios.put('https://bprtaspen.com/api/info-bank/video', {
        source
      })
        .then((res) => {
          alert('sukses edit img video bank')
          window.location.reload()
        })
        .catch(err => alert('gagal edit', err))
    },

    getSourceYt () {
      const doc = new JSDOM(this.videoTaspen, { includeNodeLocations: true })
      const src = doc.window.document.querySelector('iframe').getAttribute('src')
      return src
    }
  }
}
</script>
