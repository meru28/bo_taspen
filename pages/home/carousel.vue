<template>
  <fragment>
    <PageTitle :heading="heading" :subheading="subheading" :icon="icon" />
    <div class="content">
      <div class="main-card mb-3 card">
        <div class="card-body">
          <!-- <div class="card-header-tab card-header"> -->
          <h5 class="card-title">
            Galeri Carousel
          </h5>
          <!-- </div> -->
          <div class="card-hover-shadow-2x mb-3 card">
            <div class="scroll-area-lg">
              <VuePerfectScrollbar class="scrollbar-container">
                <ul class="todo-list-wrapper list-group list-group-flush">
                  <li v-for="(carousel, idx) in imgCarousel" :key="carousel._id" class="list-group-item">
                    <div class="todo-indicator bg-info" />
                    <div class="widget-content p-0">
                      <div class="widget-content-wrapper">
                        <div class="widget-content-left mr-2">
                          <div class="custom-checkbox custom-control">
                            <!-- <input
                              :id="carousel._id"
                              v-model="selected"
                              type="checkbox"
                              :value="carousel._id"
                              class="custom-control-input"> -->
                            <p>{{ idx+1 }}</p>
                            <!-- <label
                              class="custom-control-label"
                              for="exampleCustomCheckbox2">&nbsp;</label> -->
                          </div>
                        </div>
                        <div class="widget-content-left mr-3">
                          <div class="widget-content-left">
                            <img
                              width="100"
                              class="rounded"
                              :src="carousel.imagePath"
                              alt="">
                          </div>
                        </div>
                        <fragment v-if="selectedEditId === carousel._id">
                          <b-form @submit="onSubmitEdit">
                            <div class="form-row w-100">
                              <div class="col-lg-7">
                                <div class="position-relative form-group">
                                  <label for="deskripsi" class="">Rubah Foto</label>
                                  <input id="editImage" type="file" name="file" class="form-control border-0">
                                </div>
                              </div>
                              <div class="col-lg-5">
                                <div class="widget-content-left pt-4">
                                  <button class="border-0 btn-transition btn btn-success" @click="onSubmitEdit">
                                    <font-awesome-icon icon="check" /> Simpan
                                  </button>
                                  <button class="border-0 btn-transition btn btn-outline-danger" @click="editItem(0)">
                                    <font-awesome-icon icon="trash-alt" /> Batal
                                  </button>
                                </div>
                              </div>
                            </div>
                          </b-form>
                        </fragment>
                        <fragment v-else>
                          <div class="form-row w-100">
                            <div class="col-lg-4">
                              <div class="d-flex height-100 pt-2">
                                <button class="border-0 btn-transition btn btn-info" @click="editItem(carousel._id)">
                                  Edit Foto
                                </button>
                                <button class="border-0 btn-transition btn btn-outline-danger" data-toggle="modal" data-target="#myModal" @click="getIdCarousel(carousel._id)">
                                  <font-awesome-icon icon="trash-alt" /> Hapus
                                </button>
                              </div>
                            </div>
                          </div>
                        </fragment>
                      </div>
                    </div>
                  </li>
                </ul>
              </VuePerfectScrollbar>
            </div>
          </div>
          <b-form @submit="onSubmit">
            <div class="form-row w-100">
              <div class="col-lg-7">
                <div class="position-relative form-group">
                  <label for="judulBeranda" class="col-sm-2 col-form-label">Tambah Gambar</label>
                  <input
                    id="filesCarousel"
                    ref="filesCarousel"
                    type="file"
                    name="file"
                    class="form-control border-0"
                    @change="handleFilesUpload">
                </div>
              </div>
              <div class="col-lg-2">
                <div class="widget-content-right pt-4">
                  <button id="btn_upload" type="submit" class="btn btn-info" value="Upload">
                    Upload
                  </button>
                </div>
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
import Cookies from 'js-cookie'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
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
import { getHome, addImageCarousel, editCarousel, deleteCarousel } from '~/api/home'
import PageTitle from '~/components/_base/PageTitle'

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
  name: 'Carousel',
  layout: 'sidebar',
  components: {
    PageTitle,
    VuePerfectScrollbar,
    'font-awesome-icon': FontAwesomeIcon
  },
  data () {
    return {
      heading: 'Galeri Carousel',
      subheading: 'Silakan edit galeri carousel di bawah ini, Anda dapat menambah dan menghapus gambar.',
      icon: 'pe-7s-album icon-gradient bg-plum-plate',
      selectedEditId: '',
      imgCarousel: [],
      editImgCarousel: [],
      selected: []
    }
  },
  mounted () {
    this.home()
  },
  methods: {
    editItem (id) {
      this.selectedEditId = id
    },

    handleFilesUpload (id) {
      this.editImgCarousel = this.$refs.filesCarousel.files
    },

    getIdCarousel (_id) {
      // this.testId = document.querySelector('.custom-control-input:checked').value
      Cookies.set('id', _id)
    },

    async home () {
      await getHome()
        .then((res) => {
          this.imgCarousel = res.data.home.imageCarousel
        }).catch(err => console.log('gagal fetch home', err))
    },

    async onSubmit (evt) {
      evt.preventDefault()
      if (this.editImgCarousel[0] !== undefined) {
        const formData = new FormData()
        formData.append('pictCarousel', this.editImgCarousel[0])
        for (const value of formData.values()) {
          console.log('isi fd ::', value)
        }
        await addImageCarousel(formData)
          .then((res) => {
            alert('sukses')
            window.location.reload()
          })
          .catch(err => alert('gagal upload', err))
      } else {
        evt.preventDefault()
        alert('Anda belum memilih gambar!')
      }
    },

    async onSubmitEdit (evt) {
      if (document.getElementById('editImage').files[0] !== undefined) {
        evt.preventDefault()
        const formData = new FormData()
        formData.append('pictEditCarousel', document.getElementById('editImage').files[0])
        for (const value of formData.values()) {
          console.log('isi fd ::', value)
        }
        await editCarousel(formData, this.selectedEditId)
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
    },

    async onDeleteImage () {
      await deleteCarousel(this.selectedEditId)
        .then((res) => {
          alert('sukses hapus image')
          // window.location.reload()
        }).catch(err => alert('gagal hapus image', err))
    }
  }
}
</script>
