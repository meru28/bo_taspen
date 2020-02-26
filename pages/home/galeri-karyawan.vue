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
        <div class="card-body">
          <h5 class="card-title">
            Daftar Galeri Karyawan
          </h5>
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
            <div class="scroll-area-lg" style="height : 415px">
              <ul class="todo-list-wrapper list-group list-group-flush">
                <li v-for="(emp) in imgEmployee" :key="emp._id" class="list-group-item">
                  <div class="todo-indicator bg-info" />
                  <div class="widget-content p-0">
                    <div class="widget-content-wrapper">
                      <div class="widget-content-left mr-3">
                        <div class="widget-content-left">
                          <img
                            id="imgEmp"
                            width="200"
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
                                <input
                                  id="editImgEmp"
                                  ref="filesImgEmp"
                                  name="employee"
                                  placeholder="ganti foto"
                                  type="file"
                                  multiple
                                  accept="image/*"
                                  class="form-control border-0"
                                  @focus="resetError"
                                  @change="getImage">
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
                        <div class="widget-content-left col-lg-5">
                          <div class="widget-heading">
                            {{ emp.label }}
                          </div>
                          <!-- <div class="widget-subheading">
                            {{ emp.label }}
                          </div> -->
                        </div>
                        <div class="col-lg-6">
                          <button class="border-0 btn-transition btn btn-info" @click="editItem(emp._id)">
                            Edit
                          </button>
                        </div>
                      </template>
                      <!-- <div class="widget-content-right widget-content-actions">
                      </div> -->
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
  name: 'GaleriKaryawan',
  layout: 'sidebar',
  middleware: ['check-auth', 'auth'],
  components: {
    PageTitle,
    'font-awesome-icon': FontAwesomeIcon,
    Loading
  },
  data () {
    return {
      heading: 'Galeri Karyawan',
      subheading: 'Anda dapat mengedit gambar karyawan di bawah ini.',
      icon: 'pe-7s-user icon-gradient bg-amy-crisp',
      selectedEditId: '',
      imgEmployee: [],
      editImgEmployee: null,
      imageSource: null,
      message: '',
      labelEmp: 'Edit Deskripsi Anda',
      isLoading: false,
      fullPage: true
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

    resetError () {
      this.message = ''
    },

    getImage (event) {
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/JPG', 'image/JPEG', 'image/PNG']
      let file = document.getElementById('editImgEmp').files[0]
      if (!allowedTypes.includes(file.type)) {
        // console.log('masuk if')
        this.message = 'Pastikan file bertipe jpeg, jpg, atau png'
        this.image = null
      } else if (file.size > 3000000) {
        file = null
        this.image = null
        // console.log('masuk if pengecekan size')
        this.message = 'File Anda terlalu besar, maksimal adalah 3MB'
      } else {
        // console.log('lolos')
        const reader = new FileReader()
        reader.onload = function () {
          const output = document.getElementById('imgEmp')
          output.src = reader.result
        }
        this.imageSource = reader.readAsDataURL(event.target.files[0])
        this.image = file
        // console.log('edit img carousel ::', this.editImgCarousel)
      }
    },

    async employee () {
      this.isLoading = true
      await getHome()
        .then((res) => {
          this.isLoading = false
          this.imgEmployee = res.data.home.imageEmployee
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
      if (this.image !== undefined) {
        formData.append('pictEditEmployee', this.image)
      }
      formData.append('labelEmp', JSON.stringify(this.labelEmp))
      // for (const value of formData.values()) {
      //   console.log('isi fd ::', value)
      // }
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
