<template>
  <div class="app-sidebar sidebar-shadow">
    <div class="app-header__logo">
      <div class="logo-src" />
      <div class="header__pane ml-auto">
        <div>
          <button type="button" class="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar">
            <span class="hamburger-box">
              <span class="hamburger-inner" />
            </span>
          </button>
        </div>
      </div>
    </div>
    <div class="app-header__mobile-menu">
      <div>
        <button type="button" class="hamburger hamburger--elastic mobile-toggle-nav">
          <span class="hamburger-box">
            <span class="hamburger-inner" />
          </span>
        </button>
      </div>
    </div>
    <div class="app-header__menu">
      <span>
        <button type="button" class="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
          <span class="btn-icon-wrapper">
            <i class="fa fa-ellipsis-v fa-w-6" />
          </span>
        </button>
      </span>
    </div>
    <div class="scrollbar-sidebar">
      <div class="app-sidebar__inner">
        <ul class="vertical-nav-menu">
          <li class="app-sidebar__heading">
            Beranda
          </li>
          <li>
            <router-link to="/carousel">
              <i class="metismenu-icon pe-7s-album" />
              Galeri Carousel
            </router-link>
          </li>
          <li>
            <router-link to="/form-home">
              <i class="metismenu-icon pe-7s-browser" />
              Form Beranda
            </router-link>
          </li>
          <li>
            <router-link to="/galeri-karyawan">
              <i class="metismenu-icon pe-7s-user" />
              Galeri Karyawan
            </router-link>
          </li>
          <li>
            <router-link to="/galeri-karyawan">
              <i class="metismenu-icon pe-7s-culture" />
              Galeri Kantor Cabang
            </router-link>
          </li>
          <li class="app-sidebar__heading">
            Profil
          </li>
          <li>
            <router-link to="/gbp">
              <i class="metismenu-icon pe-7s-diamond" />
              Garis Besar Perusahaan
            </router-link>
          </li>
          <li>
            <router-link to="/sejarah">
              <i class="metismenu-icon pe-7s-car" />
              Sejarah
            </router-link>
          </li>
          <li>
            <router-link to="/struktur">
              <i class="metismenu-icon pe-7s-display2" />
              Struktur Perusahaan
            </router-link>
          </li>
          <li class="app-sidebar__heading">
            Produk Layanan
          </li>
          <li>
            <router-link to="/tabungan">
              <i class="metismenu-icon pe-7s-cash" />
              Tabungan
            </router-link>
          </li>
          <li>
            <router-link to="/deposito">
              <i class="metismenu-icon pe-7s-graph2" />
              Deposito
            </router-link>
          </li>
          <li>
            <router-link to="/kredit">
              <i class="metismenu-icon pe-7s-credit" />
              Kredit
            </router-link>
          </li>
          <li>
            <router-link to="/layanan">
              <i class="metismenu-icon pe-7s-help2" />
              Layanan
            </router-link>
          </li>
          <li class="app-sidebar__heading">
            Info Bank
          </li>
          <li>
            <router-link to="/galeri-video">
              <i class="metismenu-icon pe-7s-mouse" />
              Galeri Video Bank
            </router-link>
          </li>
          <li>
            <router-link to="/galeri-info">
              <i class="metismenu-icon pe-7s-magic-wand" />
              Galeri Info Bank
            </router-link>
          </li>
          <li class="app-sidebar__heading">
            Inbox
          </li>
          <li>
            <router-link to="/kotal-saran">
              <i class="metismenu-icon pe-7s-mail" />
              Kotak Saran
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
// import { SidebarMenu } from 'vue-sidebar-menu'
// import VuePerfectScrollbar from 'vue-perfect-scrollbar'

export default {
  name: 'Sidebar',
  components: {
    // SidebarMenu,
    // VuePerfectScrollbar
  },
  data () {
    return {
      isOpen: false,
      sidebarActive: false,
      collapsed: true,
      windowWidth: 0
    }
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.getWindowWidth)
  },
  mounted () {
    this.$nextTick(function () {
      window.addEventListener('resize', this.getWindowWidth)

      // Init
      this.getWindowWidth()
    })
    console.log('tes', this.$route.path)
  },
  methods: {
    toggleBodyClass (className) {
      const el = document.body
      this.isOpen = !this.isOpen

      if (this.isOpen) {
        el.classList.add(className)
      } else {
        el.classList.remove(className)
      }
    },
    toggleSidebarHover (add, className) {
      const el = document.body
      this.sidebarActive = !this.sidebarActive

      this.windowWidth = document.documentElement.clientWidth

      if (this.windowWidth > '992') {
        if (add === 'add') {
          el.classList.add(className)
        } else {
          el.classList.remove(className)
        }
      }
    },
    getWindowWidth () {
      const el = document.body

      this.windowWidth = document.documentElement.clientWidth

      if (this.windowWidth < '1350') {
        el.classList.add('closed-sidebar', 'closed-sidebar-md')
      } else {
        el.classList.remove('closed-sidebar', 'closed-sidebar-md')
      }
    },
    isRouteActive (url) {
      if (url === this.$route.path) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>
