<template>
  <div>
    <Loading
      :active.sync="isLoading"
      :can-cancel="true"
      color="#0f4c75"
      :is-full-page="fullPage" />
    <PageTitle :heading="heading" :subheading="subheading" :icon="icon" />
    <div class="row">
      <div class="col-12">
        <div class="card-hover-shadow-2x mb-3 card">
          <div class="card-header-tab card-header">
            <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
              <h5 class="card-title">
                Foto Gbp
              </h5>
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
          <VuePerfectScrollbar class="scrollbar-container">
            <ul class="todo-list-wrapper list-group list-group-flush">
              <li class="list-group-item">
                <div class="todo-indicator bg-info" />
                <div class="widget-content p-0">
                  <div class="widget-content-wrapper">
                    <div class="widget-content-left mr-3">
                      <div class="widget-content-left">
                        <client-only>
                          <img id="imgGbp" width="100" class="rounded" :src="image" alt>
                        </client-only>
                      </div>
                    </div>
                    <div v-if="selectedEditImage === true" class="form-row w-100">
                      <div class="col-lg-4">
                        <div class="position-relative form-group">
                          <label for="rubahFoto" class="">Rubah Foto</label>
                          <input
                            id="gantiFoto"
                            ref="filesImgGbp"
                            name="foto"
                            placeholder="ganti foto"
                            type="file"
                            accept="image/*"
                            class="form-control border-0"
                            @change="getImage">
                        </div>
                      </div>
                      <div class="col-lg-2">
                        <div class="widget-content-left pt-4">
                          <!-- <button class="border-0 btn-transition btn btn-outline-success">
                            <font-awesome-icon icon="check" /> Simpan
                          </button> -->
                          <button class="border-0 btn-transition btn btn-outline-danger" @click="editItem">
                            <font-awesome-icon icon="trash-alt" /> Batal
                          </button>
                        </div>
                      </div>
                    </div>
                    <div v-else class="widget-content-left">
                      <button class="border-0 btn-transition btn btn-info" @click="editItem">
                        Edit Foto
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div class="card-body">
              <h5 class="card-title">
                Form Gbp
              </h5>
              <form @submit="onSubmitEdit">
                <div class="position-relative form-group">
                  <label for="konsolidasi" class>Konsolidasi</label>
                  <input
                    id="konsolidasi"
                    v-model="dataGbp.konsolidasi"
                    name="konsolidasi"
                    placeholder="konsolidasi"
                    type="text"
                    class="form-control">
                </div>
                <div class="position-relative form-group">
                  <label for="exampleEmail" class>Direktur</label>
                  <input
                    id="direktur"
                    v-model="dataGbp.direktur"
                    name="direktur"
                    placeholder="ganti direktur"
                    type="text"
                    class="form-control">
                </div>
                <div class="position-relative form-group">
                  <label for="examplePassword" class>Alamat</label>
                  <textarea
                    id="alamat"
                    v-model="dataGbp.alamat"
                    name="alamat"
                    placeholder="ganti alamat"
                    type="text"
                    class="form-control" />
                </div>
                <!-- <button class="mt-1 btn btn-primary">Submit</!-->
                <div class="d-block text-right">
                  <!-- <button class="mr-2 btn btn-link btn-sm">
                    Batal
                  </button> -->
                  <button class="btn btn-primary" type="submit">
                    Simpan
                  </button>
                </div>
              </form>
            </div>
          </VuePerfectScrollbar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
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

export default {
  name: 'Gbp',
  layout: 'sidebar',
  middleware: ['check-auth', 'auth'],
  components: {
    PageTitle,
    VuePerfectScrollbar,
    'font-awesome-icon': FontAwesomeIcon,
    Loading
  },
  data: () => ({
    heading: 'Garis Besar Perusahaan',
    subheading:
      'Anda dapat mengedit gambar dan merubah form input di bawah.',
    icon: 'pe-7s-diamond icon-gradient bg-tempting-azure',
    selectedEditImage: false,
    image: null,
    imageSource: null,
    message: '',
    isLoading: false,
    fullPage: true,
    dataGbp: {
      konsolidasi: '',
      direktur: '',
      alamat: ''
    }
  }),
  created () {
    this.getGbp()
  },
  mounted () {
  },
  methods: {
    editItem () {
      this.selectedEditImage = !this.selectedEditImage
      this.message = ''
    },

    getImage (event) {
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/JPG', 'image/JPEG', 'image/PNG']
      let file = this.$refs.filesImgGbp.files[0]
      if (!allowedTypes.includes(file.type)) {
        console.log('masuk if')
        this.message = 'Pastikan file bertipe jpeg, jpg, atau png'
        this.image = null
      } else if (file.size > 3000000) {
        file = null
        this.image = null
        console.log('masuk if pengecekan size')
        this.message = 'File Anda terlalu besar, maksimal adalah 3MB'
      } else {
        console.log('lolos')
        const reader = new FileReader()
        reader.onload = function () {
          const output = document.getElementById('imgGbp')
          output.src = reader.result
        }
        this.imageSource = reader.readAsDataURL(event.target.files[0])
        this.image = file
        // console.log('edit img carousel ::', this.editImgCarousel)
      }
    },

    async getGbp () {
      this.isLoading = true
      await this.$axios.get('https://bprtaspen.com/api/profil/gbp')
        .then((res) => {
          this.isLoading = false
          this.image = res.data.imageGbp.imageUrl
          this.dataGbp.konsolidasi = res.data.konsolidasi
          this.dataGbp.direktur = res.data.direktur
          this.dataGbp.alamat = res.data.alamat
          console.log('response :', res.data)
        }).catch(err => console.log('err :', err))
    },

    async onSubmit (evt) {
      evt.preventDefault()
      console.log('isi :', this.image)
      if (this.image) {
        const formData = new FormData()
        const headers = {
          headers: { 'Content-Type': 'multipart/form-data' }
        }
        formData.append('pictGbp', this.image)
        formData.append('dataGbp', JSON.stringify(this.dataGbp))
        for (const value of formData.values()) {
          console.log('isi fd ::', value)
        }
        await this.$axios.post('https://bprtaspen.com/api/profil/gbp/add', formData, headers)
          .then((res) => {
            console.log('response :', res)
          }).catch(err => console.log('error :', err))
      }
    },

    async onSubmitEdit (evt) {
      evt.preventDefault()
      this.isLoading = true
      // console.log('isi :', this.image)
      const formData = new FormData()
      // const headers = {
      //   headers: { 'Content-Type': 'multipart/form-data' }
      // }
      if (this.image) {
        formData.append('pictEditGbp', this.image)
      }
      formData.append('replaceData', JSON.stringify(this.dataGbp))
      // for (const value of formData.values()) {
      //   console.log('isi fd ::', value)
      // }
      await this.$axios.post('https://bprtaspen.com/api/profil/gbp/edit', formData)
        .then((res) => {
          this.isLoading = false
          console.log('response :', res)
        }).catch(err => console.log('error :', err))
    }
  }
}
</script>
