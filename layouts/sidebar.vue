<template>
  <div class="app-container app-theme-white">
    <transition name="fade" mode="out-in" appear>
      <Header />
    </transition>
    <div class="app-main">
      <transition name="fade" mode="out-in" appear>
        <Sidebar />
      </transition>
      <div class="app-main__outer">
        <div class="app-main__inner">
          <nuxt />
        </div>
        <Footer />
      </div>
    </div>
    <ModalConfirmation @action-yes="onDeleteImage" />
  </div>
</template>
<script>
import Cookies from 'js-cookie'
import Header from '~/components/Header/Header'
import Sidebar from '~/components/Sidebar/Sidebar'
import Footer from '~/components/Footer/Footer'
import { deleteCarousel } from '~/api/home'
import ModalConfirmation from '~/components/modal/ModalConfirmation'
export default {
  components: {
    Header,
    Sidebar,
    Footer,
    ModalConfirmation
  },
  data () {
    return {
      idImg: ''
    }
  },
  mounted () {
    if (Cookies.get('id')) {
      this.idImg = Cookies.get('id')
    }
  },
  methods: {
    async onDeleteImage () {
      await deleteCarousel(this.idImg)
        .then((res) => {
          Object.keys(Cookies.get()).forEach((id) => {
            Cookies.remove('id')
          })
          alert('sukses hapus image')
          window.location.reload()
        }).catch(err => alert('gagal hapus image', err))
    }
  }
}
</script>
