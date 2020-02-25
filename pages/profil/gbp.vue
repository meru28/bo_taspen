<template>
  <div>
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
          <VuePerfectScrollbar class="scrollbar-container">
            <ul class="todo-list-wrapper list-group list-group-flush">
              <li class="list-group-item">
                <div class="todo-indicator bg-info" />
                <div class="widget-content p-0">
                  <div class="widget-content-wrapper">
                    <div class="widget-content-left mr-3">
                      <div class="widget-content-left">
                        <img id="imgGbp" width="100" class="rounded" :src="imageSource" alt>
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
                            multiple
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
              <form class>
                <div class="position-relative form-group">
                  <label for="exampleEmail" class>Direktur</label>
                  <input
                    id="direktur"
                    name="direktur"
                    placeholder="ganti direktur"
                    type="text"
                    class="form-control">
                </div>
                <div class="position-relative form-group">
                  <label for="examplePassword" class>Alamat</label>
                  <input
                    id="alamat"
                    name="alamat"
                    placeholder="ganti alamat"
                    type="text"
                    class="form-control">
                </div>
                <!-- <div class="position-relative form-group">
                  <label for="exampleText" class>
                    Kantor Cabang
                  </label>
                  <textarea id="exampleText" name="text" class="form-control" />
                </div> -->
                <!-- <button class="mt-1 btn btn-primary">Submit</!-->
              </form>
            </div>
          </VuePerfectScrollbar>
          <div class="d-block text-right card-footer">
            <!-- <button class="mr-2 btn btn-link btn-sm">
              Batal
            </button> -->
            <button class="btn btn-primary">
              Simpan
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
import PageTitle from '~/components/_base/PageTitle.vue'

library.add(faTrashAlt, faCheck, faAngleDown, faAngleUp, faTh, faCalendarAlt)

export default {
  name: 'Gbp',
  layout: 'sidebar',
  middleware: ['check-auth', 'auth'],
  components: {
    PageTitle,
    VuePerfectScrollbar,
    'font-awesome-icon': FontAwesomeIcon
  },
  data: () => ({
    heading: 'Garis Besar Perusahaan',
    subheading:
      'Anda dapat mengedit gambar dan merubah form input di bawah.',
    icon: 'pe-7s-diamond icon-gradient bg-tempting-azure',
    selectedEditImage: false,
    image: null,
    imageSource: null
  }),
  methods: {
    editItem () {
      this.selectedEditImage = !this.selectedEditImage
    },

    getImage (event) {
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/JPG', 'image/JPEG', 'image/PNG']
      const file = this.$refs.filesImgGbp.files[0]
      if (!allowedTypes.includes(file.type)) {
        this.message = 'Pastikan file bertipe jpeg, jpg, atau png'
      } else if (file.size > 3000000) {
        this.message = 'File Anda terlalu besar, maksimal adalah 3MB'
      } else {
        const reader = new FileReader()
        reader.onload = function () {
          const output = document.getElementById('imgGbp')
          output.src = reader.result
        }
        this.imageSource = reader.readAsDataURL(event.target.files[0])
        this.image = file
        // console.log('edit img carousel ::', this.editImgCarousel)
      }
    }
  }
}
</script>
