<template>
  <fragment>
    <Loading
      :active.sync="isLoading"
      :can-cancel="true"
      color="#0f4c75"
      :is-full-page="fullPage" />
    <PageTitle :heading="heading" :subheading="subheading" :icon="icon" />
    <div class="row">
      <div class="col-12 main-card mb-3 card">
        <div class="card-body" style="height: 630px">
          <h5 class="card-title">
            Daftar Galeri Kantor Cabang
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
            <div class="scroll-area-lg" style="height: 415px">
              <ul class="todo-list-wrapper list-group list-group-flush">
                <li v-for="(emp, idx) in imgEmployee" :key="emp._id" class="list-group-item">
                  <div class="todo-indicator bg-info" />
                  <div class="widget-content p-0">
                    <div class="widget-content-wrapper">
                      <div class="widget-content-left mr-3">
                        <div class="widget-content-left">
                          <span style="margin-right: 20px">{{ idx+1 }}</span>
                          <img
                            width="70"
                            class="rounded"
                            :src="emp.imageUrl"
                            alt="">
                        </div>
                      </div>
                      <template v-if="selectedEditId === emp._id">
                        <b-form @submit="onSubmitEdit">
                          <div class="form-row w-100">
                            <div class="col-sm-4">
                              <div class="position-relative form-group">
                                <label for="editEmp" class="">Rubah Foto</label>
                                <input id="editImgEmp" name="employee" placeholder="deskripsi" type="file" class="form-control border-0">
                              </div>
                            </div>
                            <div class="col-lg-5">
                              <div class="position-relative form-group">
                                <label for="deskripsi" class="">Judul Deskripsi</label>
                                <textarea
                                  id="editDesEmp"
                                  v-model="labelEmp"
                                  name="employeeDeskripsi"
                                  type="text"
                                  class="form-control"
                                  style="height : 100px" />
                              </div>
                            </div>
                            <div class="col-lg-3">
                              <div class="widget-content-left pt-5">
                                <button class="border-0 btn-transition btn btn-success" type="submit">
                                  <font-awesome-icon icon="check" /> Simpan
                                </button>
                                <button class="border-0 btn-transition btn btn-outline-danger" @click="editItem(0)">
                                  <font-awesome-icon icon="trash-alt" /> Batal
                                </button>
                              </div>
                            </div>
                          </div>
                        </b-form>
                      </template>
                      <template v-else>
                        <div class="widget-content-left col-4">
                          <div class="widget-heading">
                            {{ emp.label }}
                          </div>
                          <div class="widget-subheading">
                            {{ emp.alamatCabang }}
                          </div>
                        </div>
                        <div class="col-2">
                          <!-- <button class="border-0 btn-transition btn btn-info" @click="editItem(emp._id)">
                            Edit
                          </button> -->
                          <button class="border-0 btn-transition btn btn-outline-danger" data-toggle="modal" data-target="#myModal" @click="onDeleteImage(emp._id)">
                            <font-awesome-icon icon="trash-alt" /> Hapus
                          </button>
                        </div>
                      </template>
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
import { getHome, editEmployee } from '~/api/home'
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
  name: 'GaleriCabang',
  layout: 'sidebar',
  middleware: ['check-auth', 'auth'],
  components: {
    PageTitle,
    'font-awesome-icon': FontAwesomeIcon,
    Loading
  },
  data () {
    return {
      heading: 'Galeri Kantor Cabang',
      subheading: 'Anda dapat mengedit gambar kantor cabang di bawah ini.',
      icon: 'pe-7s-culture icon-gradient bg-amy-crisp',
      selectedEditId: '',
      imgEmployee: [],
      editImgEmployee: [],
      labelEmp: 'Edit Deskripsi Anda',
      isLoading: false,
      fullPage: true,
      message: ''
    }
  },
  mounted () {
    this.employee()
  },
  methods: {
    editItem (id) {
      this.selectedEditId = id
      if (this.selectedEditId !== 0) {
        // console.log(this.selectedEditId)
        // console.log('masuk boy')
        const ids = this.imgEmployee.find(obj => obj._id === id.toString())
        this.labelEmp = ids.label
        // console.log(ids)
      }
    },

    redirect () {
      this.$router.push('/tambah-foto')
    },

    onDeleteImage (id) {
      this.$store.commit('SET_ID_IMAGE', id)
      this.$store.commit('SET_FROM_PAGE', this.$router.history.current.name)
    },

    async employee () {
      this.isLoading = true
      await getHome()
        .then((res) => {
          this.isLoading = false
          this.imgEmployee = res.data.home.imageCabang
          // const keys = Object.keys(this.imgEmployee)
          // for (const key of keys) {
          //   console.log('test :', key.length)
          //   this.labelEmp = key
          //   console.log('isi labelemp :', this.labelEmp)
          // }
        // eslint-disable-next-line handle-callback-err
        }).catch(err => console.log('gagal fetch employee'))
    },

    async onSubmitEdit (evt) {
      evt.preventDefault()
      this.isLoading = true
      const formData = new FormData()
      if (document.getElementById('editImgEmp').files[0] !== undefined) {
        formData.append('pictEditEmployee', document.getElementById('editImgEmp').files[0])
      }
      formData.append('labelEmp', JSON.stringify(this.labelEmp))
      await editEmployee(formData, this.selectedEditId)
        .then((res) => {
          this.isLoading = false
          alert('sukses edit img employee Anda')
          this.selectedEditId = ''
          window.location.reload()
        })
        .catch(err => alert('gagal edit', err))
    }
  }
}
</script>
<style lang="css" scoped>
  .height-100{
    height: 100%;
  }
</style>
