<template>
  <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
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
  </div>
</template>
<script>
import Header from '~/components/Header/Header'
import Sidebar from '~/components/Sidebar/Sidebar'
import Footer from '~/components/Footer/Footer'
export default {
  components: {
    Header,
    Sidebar,
    Footer
  }
}
</script>
