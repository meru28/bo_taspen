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
              <button class="btn btn-danger">
                Tambah Foto
              </button>
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
                              width="100"
                              class="rounded"
                              src="@/assets/images/avatars/1.jpg"
                              alt="">
                          </div>
                        </div>
                        <fragment v-if="selectedEditId === true">
                          <div class="col-sm-5">
                            <div class="position-relative form-group">
                              <label for="deskripsi" class="">Rubah Foto</label>
                              <input id="deskripsi" name="city" placeholder="deskripsi" type="file" class="form-control border-0">
                            </div>
                          </div>
                          <div class="col-lg-3">
                            <div class="widget-content-left pt-3">
                              <button class="border-0 btn-transition btn btn-success">
                                <font-awesome-icon icon="check" /> Simpan
                              </button>
                              <button class="border-0 btn-transition btn btn-outline-danger" @click="editItem">
                                <font-awesome-icon icon="trash-alt" /> Batal
                              </button>
                            </div>
                          </div>
                        </fragment>
                        <fragment v-else>
                          <div class="widget-content-left">
                            <button class="border-0 btn-transition btn btn-info" @click="editItem">
                              Edit Foto
                            </button>
                            <button class="border-0 btn-transition btn btn-outline-danger">
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
      </div> -->
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
