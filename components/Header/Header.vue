<template>
  <div class="app-header header-shadow">
    <div class="app-header__logo">
      <div class="logo-src" />
      <div class="header__pane ml-auto">
        <div>
          <button
            type="button"
            class="hamburger close-sidebar-btn hamburger--elastic"
            data-class="closed-sidebar">
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
        <button
          type="button"
          class="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
          <span class="btn-icon-wrapper">
            <i class="fa fa-ellipsis-v fa-w-6" />
          </span>
        </button>
      </span>
    </div>
    <div class="app-header__content">
      <div class="app-header-left">
        <div class="search-wrapper">
          <div class="input-holder">
            <input type="text" class="search-input" placeholder="Type to search">
            <button class="search-icon">
              <span />
            </button>
          </div>
          <button class="close" />
        </div>
      </div>
      <div class="app-header-right">
        <div class="header-btn-lg pr-0">
          <div class="widget-content p-0">
            <div class="widget-content-wrapper">
              <div class="widget-content-left">
                <div class="btn-group">
                  <a
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    class="p-0 btn">
                    <img width="42" class="rounded-circle" src="~assets/images/avatars/13.jpg" alt>
                    <i class="fa fa-angle-down ml-2 opacity-8" />
                  </a>
                  <div
                    tabindex="-1"
                    role="menu"
                    aria-hidden="true"
                    class="dropdown-menu dropdown-menu-right">
                    <!-- <button type="button" tabindex="0" class="dropdown-item">
                      User Account
                    </button>
                    <button type="button" tabindex="0" class="dropdown-item">
                      Settings
                    </button>
                    <h6 tabindex="-1" class="dropdown-header">
                      Header
                    </h6>
                    <button type="button" tabindex="0" class="dropdown-item">
                      Actions
                    </button> -->
                    <!-- <div tabindex="-1" class="dropdown-divider" /> -->
                    <button type="button" tabindex="0" class="dropdown-item" @click="onLogout">
                      Logout
                    </button>
                  </div>
                </div>
              </div>
              <div class="widget-content-left ml-3 header-user-info">
                <div class="widget-heading">
                  Admin BPRDP TASPEN
                </div>
                <div class="widget-subheading">
                  {{ userEmail }}
                </div>
              </div>
              <!-- <div class="widget-content-right header-user-info ml-3">
                <button
                  type="button"
                  class="btn-shadow p-1 btn btn-primary btn-sm show-toastr-example">
                  <i class="fa text-white fa-calendar pr-1 pl-1" />
                </button>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import Cookie from 'js-cookie'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import UserArea from './HeaderUserArea'
library.add(faEllipsisV)
export default {
  name: 'Header',
  components: {
    // UserArea,
    // 'font-awesome-icon': FontAwesomeIcon
  },
  data () {
    return {
      isOpen: false,
      isOpenMobileMenu: false,
      userEmail: ''
    }
  },
  mounted () {
    this.userEmail = Cookie.get('user')
  },
  methods: {
    toggleMobile (className) {
      const el = document.body
      this.isOpen = !this.isOpen

      if (this.isOpen) {
        el.classList.add(className)
      } else {
        el.classList.remove(className)
      }
    },

    toggleMobile2 (className) {
      const el = document.body
      this.isOpenMobileMenu = !this.isOpenMobileMenu

      if (this.isOpenMobileMenu) {
        el.classList.add(className)
      } else {
        el.classList.remove(className)
      }
    },

    onLogout () {
      this.$store.dispatch('logout')
      this.$router.push('/login')
    }
  }
}
</script>
