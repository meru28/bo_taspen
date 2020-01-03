<template>
  <fragment>
    <PageTitle :heading="heading" :subheading="subheading" :icon="icon" />
    <div class="row">
      <div class="col-lg-7 main-card mb-3 card">
        <div class="card-body">
          <h5 class="card-title">
            Daftar Galeri Karyawan
          </h5>
          <div class="card-hover-shadow-2x mb-3 card">
            <div class="scroll-area-lg">
              <ul class="todo-list-wrapper list-group list-group-flush">
                <li class="list-group-item">
                  <div class="todo-indicator bg-info" />
                  <div class="widget-content p-0">
                    <div class="widget-content-wrapper">
                      <div class="widget-content-left mr-3">
                        <div class="widget-content-left">
                          <img
                            width="100"
                            class="rounded"
                            src="@/assets/images/avatars/1.jpg"
                            alt="">
                        </div>
                      </div>
                      <template v-if="selectedEditId === true">
                        <div class="form-row w-100">
                          <div class="col-sm-4">
                            <div class="position-relative form-group">
                              <label for="deskripsi" class="">Rubah Foto</label>
                              <input id="deskripsi" name="city" placeholder="deskripsi" type="file" class="form-control border-0">
                            </div>
                          </div>
                          <div class="col-lg-5">
                            <div class="position-relative form-group">
                              <label for="deskripsi" class="">Judul Deskripsi</label>
                              <textarea id="deskripsi" name="city" placeholder="deskripsi" type="text" class="form-control" />
                            </div>
                          </div>
                          <div class="col-lg-3">
                            <div class="widget-content-left pt-5">
                              <button class="border-0 btn-transition btn btn-success">
                                <font-awesome-icon icon="check" /> Simpan
                              </button>
                              <button class="border-0 btn-transition btn btn-outline-danger" @click="editItem">
                                <font-awesome-icon icon="trash-alt" /> Batal
                              </button>
                            </div>
                          </div>
                        </div>
                      </template>
                      <template v-else>
                        <div class="widget-content-left col-lg-5">
                          <div class="widget-heading">
                            Go grocery shopping
                          </div>
                          <div class="widget-subheading">
                            A short description for this todo item
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <button class="border-0 btn-transition btn btn-info" @click="editItem">
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
  components: {
    PageTitle,
    'font-awesome-icon': FontAwesomeIcon
  },
  data () {
    return {
      heading: 'Galeri Karyawan',
      subheading: 'Anda dapat mengedit gambar karyawan di bawah ini.',
      icon: 'pe-7s-user icon-gradient bg-amy-crisp',
      selectedEditId: false
    }
  },
  methods: {
    editItem () {
      this.selectedEditId = !this.selectedEditId
      console.log('coba ::', this.selectedEditId)
    }
  }
}
</script>
<style lang="css" scoped>
  .height-100{
    height: 100%;
  }
</style>
