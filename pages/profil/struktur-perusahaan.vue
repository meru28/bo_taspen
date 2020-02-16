<template>
  <fragment>
    <Loading
      :active.sync="isLoading"
      :can-cancel="true"
      color="#0f4c75"
      :is-full-page="fullPage" />
    <PageTitle :heading="heading" :subheading="subheading" :icon="icon" />
    <div class="row">
      <div class="col-sm-12 col-lg-12">
        <div class="card-hover-shadow-2x mb-3 card">
          <div class="card-header-tab card-header">
            <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
              <i class="header-icon lnr-database icon-gradient bg-malibu-beach" />Edit Struktur Perusahaan
            </div>
          </div>
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
            <div class="scroll-area-lg">
              <VuePerfectScrollbar class="scrollbar-container">
                <ul class="todo-list-wrapper list-group list-group-flush">
                  <li class="list-group-item">
                    <div class="todo-indicator bg-info" />
                    <div class="widget-content p-0">
                      <div class="widget-content-wrapper">
                        <div class="widget-content-left mr-3">
                          <div class="widget-content-left">
                            <img
                              width="600"
                              class="rounded"
                              :src="imgStruktur.imageUrl"
                              :alt="imgStruktur.label">
                          </div>
                        </div>
                        <div v-if="selectedEditImage === true" class="form-row w-100">
                          <div class="col-lg-6">
                            <div class="position-relative form-group">
                              <label for="struktur" class="">Rubah Foto</label>
                              <input
                                id="struktur"
                                ref="filesih"
                                name="struktur"
                                placeholder="struktur"
                                type="file"
                                class="form-control border-0 pt-1"
                                @focus="resetError"
                                @change="handleFilesUpload">
                            </div>
                          </div>
                          <div class="col-lg-4">
                            <div class="widget-content-left pt-4">
                              <button :disabled="message !== ''" class="border-0 btn-transition btn btn-success" @click="onSubmitEdit">
                                <font-awesome-icon icon="check" /> Simpan
                              </button>
                              <button class="border-0 btn-transition btn btn-outline-danger" @click="editItem">
                                <font-awesome-icon icon="trash-alt" /> Batal
                              </button>
                            </div>
                          </div>
                        </div>
                        <div v-else class="widget-content-left">
                          <button class="border-0 btn-transition btn btn-info" @click="editItem">
                            Edit
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </VuePerfectScrollbar>
            </div>
          </div>
        </div>
      </div>
      <!-- <b-form @submit="onSubmit">
        Pilih gambar :
        <input
          id="filesCarousel"
          ref="filesih"
          type="file"
          name="file"
          class="form-control"
          @change="handleFilesUpload">
        <br>
        <button id="btn_upload" type="submit" class="btn btn-info" value="Upload">
          Upload
        </button>
      </b-form> -->
    </div>
  </fragment>
</template>
<script>
import Vue from 'vue'
import Fragment from 'vue-fragment'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import axios from 'axios'
import Loading from 'vue-loading-overlay'
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faTrashAlt,
  faCheck,
  faCalendarAlt,
  faAngleDown,
  faAngleUp,
  faTh
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import PageTitle from '~/components/_base/PageTitle.vue'

library.add(faTrashAlt, faCheck, faAngleDown, faAngleUp, faTh, faCalendarAlt)
Vue.use(Fragment.Plugin)
export default {
  name: 'Struktur',
  layout: 'sidebar',
  middleware: ['check-auth', 'auth'],
  components: {
    PageTitle,
    VuePerfectScrollbar,
    'font-awesome-icon': FontAwesomeIcon,
    Loading
  },
  data () {
    return {
      heading: 'Struktur Perusahaan',
      subheading: 'Silakan edit struktur perusahaan di bawah ini',
      icon: 'pe-7s-display2 icon-gradient bg-plum-plate',
      selectedEditImage: false,
      imgStruktur: {},
      editImgStruktur: [],
      message: '',
      isLoading: false,
      fullPage: true
    }
  },
  mounted () {
    this.getStruktur()
  },
  methods: {
    editItem () {
      this.selectedEditImage = !this.selectedEditImage
      this.resetError()
    },

    handleFilesUpload () {
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/JPG', 'image/JPEG', 'image/PNG']
      const file = this.$refs.filesih.files[0]
      if (!allowedTypes.includes(file.type)) {
        this.message = 'Pastikan file bertipe jpeg, jpg, atau png'
      } if (file.size > 500000) {
        this.message = 'File Anda terlalu besar, maksimal adalah 500KB'
      } else {
        this.editImgStruktur = file
      }
    },

    resetError () {
      this.message = ''
    },

    async getStruktur () {
      this.isLoading = true
      await axios.get('https://bprtaspen.com/api/profil/struktur')
        .then((res) => {
          this.isLoading = false
          this.imgStruktur = res.data.struktur.imageStruktur
          console.log('struktur', res)
        })
    },

    async onSubmit (evt) {
      evt.preventDefault()
      const formData = new FormData()
      const headers = {
        headers: { 'Content-Type': 'multipart/form-data' }
      }
      formData.append('pictStruktur', this.editImgStruktur[0])
      for (const value of formData.values()) {
        console.log('isi fd ::', value)
      }
      await axios.post('https://bprtaspen.com/api/profil/struktur/add', formData, headers)
        .then((res) => {
          alert('sukses')
          window.location.reload()
        })
        .catch(err => alert('gagal upload', err))
    },

    async onSubmitEdit (evt) {
      if (document.getElementById('struktur').files[0] !== undefined) {
        evt.preventDefault()
        const formData = new FormData()
        const headers = {
          headers: { 'Content-Type': 'multipart/form-data' }
        }
        formData.append('pictStruktur', document.getElementById('struktur').files[0])
        for (const value of formData.values()) {
          console.log('isi fd ::', value)
        }
        await axios.post('https://bprtaspen.com/api/profil/struktur/edit', formData, headers)
          .then((res) => {
            alert('sukses edit img struktur')
            this.selectedEditImage = !this.selectedEditImage
            window.location.reload()
          })
          .catch(err => alert('gagal edit', err))
      } else {
        evt.preventDefault()
        alert('Anda belum memilih gambar pengganti!')
      }
    }
  }
}
</script>
