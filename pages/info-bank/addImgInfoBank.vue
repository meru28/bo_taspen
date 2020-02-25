<template>
  <div>
    <!-- <PageTitle :heading="heading" :subheading="subheading" :icon="icon" /> -->
    <Loading
      :active.sync="isLoading"
      color="#0f4c75"
      :can-cancel="true"
      :is-full-page="fullPage" />
    <div class="row">
      <div class="col-12">
        <div v-show="message !== ''" id="toast-container" class="toast-bottom-left">
          <div class="toast toast-error" aria-live="assertive" style="">
            <div class="toast-title">
              Perhatian!
            </div>
            <div class="toast-message">
              {{ message }}
            </div>
          </div>
        </div>
        <div class="card-hover-shadow-2x mb-3 card">
          <div class="card-header-tab card-header">
            <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
              <h5 class="card-title">
                Galeri Info Bank
              </h5>
            </div>
          </div>
          <VuePerfectScrollbar class="scrollbar-container">
            <div class="card-body">
              <h5 class="card-title">
                Form Info Bank
              </h5>
              <div class="form-row w-100">
                <div class="col-lg-4">
                  <div class="position-relative form-group">
                    <label for="deskripsi" class="">Tambah Foto</label>
                    <input
                      id="deskripsi"
                      ref="filesInfoBank"
                      name="deskripsi"
                      type="file"
                      class="form-control border-0"
                      @focus="resetError"
                      @change="handleFilesUpload">
                  </div>
                </div>
              </div>
              <div class="position-relative form-group">
                <label for="exampleEmail" class>Label</label>
                <input
                  id="labelCabang"
                  v-model="formInfoBank.label"
                  placeholder="isi label"
                  type="text"
                  class="form-control">
              </div>
              <div class="position-relative form-group">
                <label for="examplePassword" class>Deskripsi</label>
                <input
                  id="deskripsi"
                  v-model="formInfoBank.deskripsi"
                  placeholder="isi deskripsi"
                  type="text"
                  class="form-control">
              </div>
              <!-- <div class="position-relative form-group">
                <label for="exampleText" class>
                  Link Download
                </label>
                <textarea id="alamat" v-model="formCabang.alamatCabang" placeholder="Jl. xxxx...." name="text" class="form-control" />
              </div> -->
              <div class="d-block text-right">
                <button class="mr-2 btn btn-link btn-sm" @click="$router.push('/galeri-info')">
                  Batal
                </button>
                <button class="btn btn-primary" @click="onSubmit">
                  Simpan
                </button>
              </div>
            </div>
          </VuePerfectScrollbar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import { library } from '@fortawesome/fontawesome-svg-core'
import axios from 'axios'
import Loading from 'vue-loading-overlay'
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css'
import {
  faTrashAlt,
  faCheck,
  faCalendarAlt,
  faAngleDown,
  faAngleUp,
  faTh
} from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import PageTitle from '~/components/_base/PageTitle.vue'

library.add(faTrashAlt, faCheck, faAngleDown, faAngleUp, faTh, faCalendarAlt)

export default {
  name: 'FotoInfoBank',
  layout: 'sidebar',
  components: {
    // PageTitle,
    VuePerfectScrollbar,
    Loading
  },
  props: {
    heading: {
      type: String,
      default: ''
    },
    subHeading: {
      type: String,
      default: ''
    }
  },
  middleware: ['check-auth', 'auth'],
  data: () => ({
    // heading: 'Garis Besar Perusahaan',
    // subheading:
    //   'Anda dapat mengedit gambar dan merubah form input di bawah.',
    icon: 'pe-7s-diamond icon-gradient bg-tempting-azure',
    selectedEditImage: false,
    message: '',
    imgInfoBank: [],
    fullPage: true,
    formInfoBank: {
      label: '',
      deskripsi: '',
      linkDownload: ''
    }
  }),
  computed: {
    isLoading () {
      return this.$store.getters.getLoading
    }
  },
  methods: {
    handleFilesUpload (id) {
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/JPG', 'image/JPEG', 'image/PNG']
      const file = this.$refs.filesInfoBank.files[0]
      if (!allowedTypes.includes(file.type)) {
        this.message = 'Pastikan file bertipe jpeg, jpg, atau png'
      } else if (file.size > 3000000) {
        this.message = 'File Anda terlalu besar, maksimal adalah 3MB'
      } else {
        this.imgInfoBank = file
        // console.log('edit img carousel ::', this.editImgCarousel)
      }
    },

    async onSubmit (evt) {
      evt.preventDefault()
      if (this.imgInfoBank) {
        const formData = new FormData()
        const headers = {
          headers: { 'Content-Type': 'multipart/form-data' }
        }
        formData.append('pictInfoBank', this.imgInfoBank)
        formData.append('isianInfoBank', JSON.stringify(this.formInfoBank))
        // for (const value of formData.values()) {
        //   console.log('isi fd ::', value)
        // }
        // this.isLoading = true
        this.$store.commit('SET_LOADING', true)
        await axios.post('https://bprtaspen.com/api/info-bank/image', formData, headers)
          .then((res) => {
            // this.isLoading = false
            this.$store.commit('SET_LOADING', false)
            alert('sukses tambah cabang')
            window.location.reload()
          })
          .catch(err => alert('gagal upload', err))
      } else {
        evt.preventDefault()
        alert('Periksa kembali isian Anda belum lengkap!')
      }
    },

    resetError () {
      this.message = ''
    },

    editItem () {
      this.selectedEditImage = !this.selectedEditImage
    }
  }
}
</script>
