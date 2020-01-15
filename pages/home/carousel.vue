<template>
  <fragment>
    <PageTitle :heading="heading" :subheading="subheading" :icon="icon" />
    <div class="row">
      <div class="col-sm-12 col-lg-6">
        <div class="card-hover-shadow-2x mb-3 card">
          <div class="card-header-tab card-header">
            <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
              <i class="header-icon lnr-database icon-gradient bg-malibu-beach" />Daftar Galeri Carousel
            </div>
            <div class="col d-block text-right">
              <button class="btn btn-danger" data-toggle="modal" data-target="#uploadModal">
                Tambah Foto
              </button>
            </div>
          </div>
          <div class="card-hover-shadow-2x mb-3 card">
            <div class="scroll-area-lg">
              <VuePerfectScrollbar class="scrollbar-container">
                <ul class="todo-list-wrapper list-group list-group-flush">
                  <li v-for="(carousel) in imgCarousel" :key="carousel._id" class="list-group-item">
                    <div class="todo-indicator bg-info" />
                    <div class="widget-content p-0">
                      <div class="widget-content-wrapper">
                        <div class="widget-content-left mr-3">
                          <div class="widget-content-left">
                            <img
                              width="100"
                              class="rounded"
                              :src="carousel.imageUrl"
                              alt="">
                          </div>
                        </div>
                        <fragment v-if="selectedEditId === carousel._id">
                          <b-form @submit="onSubmitEdit">
                            <div class="col-sm-5">
                              <div class="position-relative form-group">
                                <label for="deskripsi" class="">Rubah Foto</label>
                                <input type="file" name="file" id="editImage" class="form-control" />
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
                            <button class="border-0 btn-transition btn btn-info" @click="editItem(carousel._id)">
                              Edit Foto
                            </button>
                            <button class="border-0 btn-transition btn btn-outline-danger" @click="onDeleteImage(carousel._id)">
                              <font-awesome-icon icon="trash-alt" /> Hapus
                            </button>
                          </div>
                        </fragment>
                      </div>
                    </div>
                  </li>
                  <!-- <li class="list-group-item">
                      <div class="todo-indicator bg-success"></div>
                      <div class="widget-content p-0">
                          <div class="widget-content-wrapper">
                              <div class="widget-content-left mr-2">
                                  <div class="custom-checkbox custom-control"><input type="checkbox"
                                                                                      id="exampleCustomCheckbox3"
                                                                                      class="custom-control-input"><label
                                      class="custom-control-label"
                                      for="exampleCustomCheckbox3">&nbsp;</label>
                                  </div>
                              </div>
                              <div class="widget-content-left flex2">
                                  <div class="widget-heading">Development Task</div>
                                  <div class="widget-subheading">Finish Vue ToDo List App</div>
                              </div>
                              <div class="widget-content-right">
                                  <div class="badge badge-warning mr-2">69</div>
                              </div>
                              <div class="widget-content-right">
                                  <button class="border-0 btn-transition btn btn-outline-success">
                                      <font-awesome-icon icon="check"/>
                                  </button>
                                  <button class="border-0 btn-transition btn btn-outline-danger">
                                      <font-awesome-icon icon="trash-alt"/>
                                  </button>
                              </div>
                          </div>
                      </div>
                  </li> -->
                </ul>
              </VuePerfectScrollbar>
            </div>
            <!-- <div class="d-block text-right card-footer">
              <button class="mr-2 btn btn-link btn-sm">
                Cancel
              </button>
              <button class="btn btn-primary">
                Add Task
              </button>
            </div> -->
          </div>
        </div>
      </div>
      <!-- <div class="row">
        <div class="col-sm-12 col-lg-6">
            <div class="card-hover-shadow-2x mb-3 card">
                <div class="card-header-tab card-header">
                    <div class="card-header-title font-size-lg text-capitalize font-weight-normal"><i
                        class="header-icon lnr-database icon-gradient bg-malibu-beach"> </i>Daftar Gambar Carousel
                    </div>
                </div>
                <div class="scroll-area-lg">
                    <VuePerfectScrollbar class="scrollbar-container" v-once>
                        <ul class="todo-list-wrapper list-group list-group-flush">
                            <li class="list-group-item">
                                <div class="todo-indicator bg-info"></div>
                                <div class="widget-content p-0">
                                    <div class="widget-content-wrapper">
                                        <div class="widget-content-left mr-2">
                                            <div class="custom-checkbox custom-control"><input type="checkbox"
                                                                                                id="exampleCustomCheckbox2"
                                                                                                class="custom-control-input"><label
                                                class="custom-control-label"
                                                for="exampleCustomCheckbox2">&nbsp;</label>
                                            </div>
                                        </div>
                                        <div class="widget-content-left mr-3">
                                            <div class="widget-content-left">
                                                <img width="100" class="rounded" src="@/assets/images/avatars/1.jpg"
                                                      alt="">
                                            </div>
                                        </div>
                                        <div class="widget-content-left">
                                            <div class="widget-heading">Go grocery shopping</div>
                                            <div class="widget-subheading">A short description for this todo item
                                            </div>
                                        </div>
                                        <div class="widget-content-right widget-content-actions">
                                            <button class="border-0 btn-transition btn btn-outline-success">
                                                <font-awesome-icon icon="check"/>
                                            </button>
                                            <button class="border-0 btn-transition btn btn-outline-danger">
                                                <font-awesome-icon icon="trash-alt"/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="todo-indicator bg-primary"></div>
                                <div class="widget-content p-0">
                                    <div class="widget-content-wrapper">
                                        <div class="widget-content-left mr-2">
                                            <div class="custom-checkbox custom-control"><input type="checkbox"
                                                                                                id="exampleCustomCheckbox4"
                                                                                                class="custom-control-input"><label
                                                class="custom-control-label"
                                                for="exampleCustomCheckbox4">&nbsp;</label>
                                            </div>
                                        </div>
                                        <div class="widget-content-left flex2">
                                            <div class="widget-heading">Badge on the right task</div>
                                            <div class="widget-subheading">This task has show on hover actions!
                                            </div>
                                        </div>
                                        <div class="widget-content-right widget-content-actions">
                                            <button class="border-0 btn-transition btn btn-outline-success">
                                                <font-awesome-icon icon="check"/>
                                            </button>
                                        </div>
                                        <div class="widget-content-right ml-3">
                                            <div class="badge badge-pill badge-success">Latest Task</div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="todo-indicator bg-success"></div>
                                <div class="widget-content p-0">
                                    <div class="widget-content-wrapper">
                                        <div class="widget-content-left mr-2">
                                            <div class="custom-checkbox custom-control"><input type="checkbox"
                                                                                                id="exampleCustomCheckbox3"
                                                                                                class="custom-control-input"><label
                                                class="custom-control-label"
                                                for="exampleCustomCheckbox3">&nbsp;</label>
                                            </div>
                                        </div>
                                        <div class="widget-content-left flex2">
                                            <div class="widget-heading">Development Task</div>
                                            <div class="widget-subheading">Finish Vue ToDo List App</div>
                                        </div>
                                        <div class="widget-content-right">
                                            <div class="badge badge-warning mr-2">69</div>
                                        </div>
                                        <div class="widget-content-right">
                                            <button class="border-0 btn-transition btn btn-outline-success">
                                                <font-awesome-icon icon="check"/>
                                            </button>
                                            <button class="border-0 btn-transition btn btn-outline-danger">
                                                <font-awesome-icon icon="trash-alt"/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </VuePerfectScrollbar>
                </div>
                <div class="d-block text-right card-footer">
                    <button class="mr-2 btn btn-link btn-sm">Cancel</button>
                    <button class="btn btn-primary">Add Task</button>
                </div>
            </div>
        </div>
      }
      </div> -->
      <ModalUpload />
      <b-form @submit="onSubmit">
        Pilih gambar :
        <input
          id="filesCarousel"
          ref="filesCarousel"
          type="file"
          name="file"
          class="form-control"
          @change="handleFilesUpload">
        <br>
        <button id="btn_upload" type="submit" class="btn btn-info" value="Upload">
          Upload
        </button>
      </b-form>
    </div>
  </fragment>
</template>

<script>
import Vue from 'vue'
import Fragment from 'vue-fragment'
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
import axios from 'axios'
import instance from '~/plugins/axios'
import PageTitle from '~/components/_base/PageTitle'
import ModalUpload from '~/components/_base/ModalUpload'
import properties from '~/properties'

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
    ModalUpload,
    'font-awesome-icon': FontAwesomeIcon
  },
  data () {
    return {
      heading: 'Galeri Carousel',
      subheading: 'Silakan edit galeri carousel di bawah ini, Anda dapat menambah dan menghapus gambar.',
      icon: 'pe-7s-album icon-gradient bg-plum-plate',
      selectedEditId: '',
      imgCarousel: [],
      editImgCarousel: []
    }
  },
  mounted () {
    this.getHome()
  },
  methods: {
    editItem (id) {
      this.selectedEditId = id
      // console.log('coba ::', this.selectedEditId)
    },

    handleFilesUpload (id) {
      this.editImgCarousel = this.$refs.filesCarousel.files
    },

    getHome () {
      this.home()
        .then((res) => {
          this.imgCarousel = res.data.home.imageCarousel
          // console.log('get home ::', res.data)
        }).catch(err => console.log('gagal fetch home', err))
    },

    async home () {
      const response = await instance({
        url: properties.LIST_API.HOME,
        method: 'get'
      })
      return response
    },

    onSubmit (evt) {
      evt.preventDefault()
      if (this.editImgCarousel[0] !== undefined) {
        const formData = new FormData()
        // const headers = {
        //   headers: { 'Content-Type': 'multipart/form-data' }
        // }
        formData.append('pictCarousel', this.editImgCarousel[0])
        for (const value of formData.values()) {
          console.log('isi fd ::', value)
        }
        // await axios.post(properties.LIST_API.ADD_IMAGE_CAROUSEL, formData, headers)
        this.addImageCarousel(formData)
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

    async addImageCarousel (formData) {
      const headers = {
        headers: { 'Content-Type': 'multipart/form-data' }
      }
      const response = await instance({
        url: properties.LIST_API.ADD_IMAGE_CAROUSEL,
        data: formData,
        headers
      })
      return response
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
        await axios.post(properties.LIST_API.EDIT_IMAGE_CAROUSEL + this.selectedEditId, formData, headers)
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

    async onDeleteImage (id) {
      await axios.delete(properties.LIST_API.DELETE_CAROUSEL + id)
        .then((res) => {
          alert('sukses hapus image')
          // window.location.reload()
        }).catch(err => alert('gagal hapus image', err))
    }
  }
}
</script>
