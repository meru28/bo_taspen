import Vue from 'vue'
import Router from 'vue-router'

import Index from '~/pages/index'
import Login from '~/pages/login'
import Carousel from '~/pages/home/carousel'
import FormHome from '~/pages/home/form-home'
import GaleriKaryawan from '~/pages/home/galeri-karyawan'
import Gbp from '~/pages/profil/gbp'
import Sejarah from '~/pages/profil/sejarah'
import Struktur from '~/pages/profil/struktur-perusahaan'
import Tabungan from '~/pages/produk-layanan/tabungan'
import Kredit from '~/pages/produk-layanan/kredit'
import Deposito from '~/pages/produk-layanan/deposito'
import Layanan from '~/pages/produk-layanan/layanan'
import InfoBank from '~/pages/info-bank/galeri-info-bank'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    // linkActiveClass: 'mm-active',
    // linkExactActiveClass: 'mm-active',
    routes: [
      {
        path: '/',
        component: Index,
        name: 'Index'
      },
      {
        path: '/login',
        component: Login,
        name: 'Login'
      },
      {
        path: '/carousel',
        component: Carousel,
        name: 'Carousel'
      },
      {
        path: '/form-home',
        component: FormHome,
        name: 'FormHome'
      },
      {
        path: '/galeri-karyawan',
        component: GaleriKaryawan,
        name: 'GaleriKaryawan'
      },
      {
        path: '/gbp',
        component: Gbp,
        name: 'Gbp'
      },
      {
        path: '/sejarah',
        component: Sejarah,
        name: 'Sejarah'
      },
      {
        path: '/struktur',
        component: Struktur,
        name: 'Struktur'
      },
      {
        path: '/tabungan',
        component: Tabungan,
        name: 'Tabungan'
      },
      {
        path: '/kredit',
        component: Kredit,
        name: 'Kredit'
      },
      {
        path: '/deposito',
        component: Deposito,
        name: 'Deposito'
      },
      {
        path: '/layanan',
        component: Layanan,
        name: 'Layanan'
      },
      {
        path: '/galeri-info',
        component: InfoBank,
        name: 'InfoBank'
      }
    ]
  })
}
