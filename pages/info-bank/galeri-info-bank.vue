<template>
  <fragment>
    <Loading
      :active.sync="isLoading"
      color="#0f4c75"
      :can-cancel="true"
      :is-full-page="fullPage" />
    <PageTitle :heading="heading" :subheading="subheading" :icon="icon" />
    <div class="row">
      <div class="col-12 main-card mb-3 card">
        <div class="card-body" style="height: 630px">
          <h5 class="card-title">
            Daftar Galeri Info Bank
          </h5>
          <div class="py-4 mb-4 form-row w-100 border-bottom">
            <div class="col">
              <div class="widget-content-right">
                <label for="judulBeranda" class="col-sm-2 col-form-label" style="display: inline">Tambah Gambar</label>
                <button id="btn_upload" class="btn btn-info" @click="redirect">
                  Tambah
                </button>
              </div>
            </div>
          </div>
          <div class="card-hover-shadow-2x mb-3 card">
            <div class="scroll-area-lg">
              <ul class="todo-list-wrapper list-group list-group-flush">
                <li v-for="(img, idx) in imgGaleriBank" :key="img._id" class="list-group-item">
                  <div class="todo-indicator bg-info" />
                  <div class="widget-content p-0">
                    <div class="widget-content-wrapper">
                      <div class="widget-content-left mr-3">
                        <div class="widget-content-left">
                          <span style="margin-right: 20px">{{ idx+1 }}</span>
                          <img
                            width="100"
                            class="rounded"
                            :src="img.imageUrl"
                            alt="">
                        </div>
                      </div>
                      <fragment v-if="selectedEditId === img._id">
                        <b-form ref="formContainer" class="w-100" @submit="onSubmitEdit">
                          <div class="col-sm-5">
                            <div class="position-relative form-group">
                              <label for="deskripsi" class="">Rubah Foto</label>
                              <input
                                id="editImage"
                                type="file"
                                name="file"
                                class="form-control">
                            </div>
                          </div>
                          <div class="col-lg-3">
                            <div class="widget-content-left pt-3">
                              <button class="border-0 btn-transition btn btn-success" @click="onSubmitEdit">
                                <font-awesome-icon icon="check" /> Simpan
                              </button>
                              <button class="border-0 btn-transition btn btn-outline-danger" @click="editItem(0)">
                                <font-awesome-icon icon="trash-alt" /> Batal
                              </button>
                            </div>
                          </div>
                        </b-form>
                      </fragment>
                      <fragment v-else>
                        <div class="widget-content-left">
                          <!-- <button class="border-0 btn-transition btn btn-info" @click="editItem(img._id)">
                            Edit Foto
                          </button> -->
                          <button class="border-0 btn-transition btn btn-outline-danger" data-toggle="modal" data-target="#myModal" @click="onDeleteImage(img._id)">
                            <font-awesome-icon icon="trash-alt" /> Hapus
                          </button>
                        </div>
                      </fragment>
                    </div>
                  </div>
                </li>
              </ul>
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
  name: 'GaleriInfoBank',
  layout: 'sidebar',
  middleware: ['check-auth', 'auth'],
  components: {
    PageTitle,
    'font-awesome-icon': FontAwesomeIcon,
    Loading
  },
  data () {
    return {
      heading: 'Galeri Info Bank',
      subheading: 'Silakan edit galeri info bank di bawah ini, Anda dapat menambah dan menghapus gambar.',
      icon: 'pe-7s-mouse icon-gradient bg-plum-plate',
      selectedEditId: '',
      imgGaleriBank: [],
      editImgGaleriBank: [],
      isLoading: false,
      fullPage: true
    }
  },
  mounted () {
    this.getInfoBank()
  },
  methods: {
    editItem (id) {
      this.selectedEditId = id
      // console.log('coba ::', this.selectedEditId)
    },

    handleFilesUpload () {
      this.imgGaleriBank = this.$refs.filesInfoBank.files
    },

    redirect () {
      this.$router.push('/tambah-info-bank')
    },

    onDeleteImage (id) {
      this.$store.commit('SET_ID_IMAGE', id)
      this.$store.commit('SET_FROM_PAGE', this.$router.history.current.name)
    },

    async getInfoBank () {
      this.isLoading = true
      await axios.get('https://bprtaspen.com/api/info-bank')
        .then((res) => {
          this.isLoading = false
          // console.log('info bank', res)
          this.imgGaleriBank = res.data.infoBank.imageGallery
        }).catch(err => console.log('gagal fetch info bank', err))
    },

    async onSubmit (evt) {
      evt.preventDefault()
      this.isLoading = true
      const formData = new FormData()
      const headers = {
        headers: { 'Content-Type': 'multipart/form-data' }
      }
      toFormData(formData, this.imgGaleriBank, 'pictInfoBank')
      // for (const value of formData.values()) {
      //   console.log('isi fd ::', value)
      // }
      await axios.post('https://bprtaspen.com/api/info-bank', formData, headers)
        .then((res) => {
          this.isLoading = false
          alert('sukses update video')
        })
        .catch(err => console.log('update video error :', err))
    },

    async onSubmitEdit (evt) {
      if (document.getElementById('editImage').files[0] !== undefined) {
        evt.preventDefault()
        const formData = new FormData()
        const headers = {
          headers: { 'Content-Type': 'multipart/form-data' }
        }
        formData.append('pictEditCarousel', document.getElementById('editImage').files[0])
        for (const value of formData.values()) {
          console.log('isi fd ::', value)
        }
        await axios.post('https://bprtaspen.com/api/home/edit-carousel/' + this.selectedEditId, formData, headers)
          .then((res) => {
            alert('sukses edit img carousel')
            this.selectedEditId = ''
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
