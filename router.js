import Vue from 'vue'
import Router from 'vue-router'

import Index from '~/pages/index'
import Login from '~/pages/login'
import Carousel from '~/pages/home/carousel'
import FormHome from '~/pages/home/form-home'
import GaleriKaryawan from '~/pages/home/galeri-karyawan'
import GaleriCabang from '~/pages/home/galeri-cabang'
import AddImage from '~/pages/home/addImage'
import Gbp from '~/pages/profil/gbp'
import Sejarah from '~/pages/profil/sejarah'
import Struktur from '~/pages/profil/struktur-perusahaan'
import Tabungan from '~/pages/produk-layanan/tabungan'
import Kredit from '~/pages/produk-layanan/kredit'
import Deposito from '~/pages/produk-layanan/deposito'
import Layanan from '~/pages/produk-layanan/layanan'
import InfoBank from '~/pages/info-bank/galeri-info-bank'
import AddInfoBank from '~/pages/info-bank/addImgInfoBank'
import VideoBank from '~/pages/info-bank/galeri-video-bank'
import LapPublikasi from '~/pages/laporan-publikasi/laporan-publikasi'

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
        path: '/galeri-cabang',
        component: GaleriCabang,
        name: 'GaleriCabang'
      },
      {
        path: '/tambah-foto',
        component: AddImage,
        name: 'TambahFoto',
        props: route => ({
          params: route.params
        })
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
      },
      {
        path: '/galeri-video',
        component: VideoBank,
        name: 'VideoBank'
      },
      {
        path: '/tambah-info-bank',
        component: AddInfoBank,
        name: 'FotoInfoBank',
        props: route => ({
          params: route.params
        })
      },
      {
        path: '/laporan-publikasi',
        component: LapPublikasi,
        name: 'LaporanPublikasi'
      }
    ]
  })
}
