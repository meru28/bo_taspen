<template>
  <div class="position-absolute w-100 h-100">
    <div class="container h-100">
      <div class="row h-100">
        <div class="col-12 align-self-center">
          <div class="row">
            <div class="col-10 offset-1 col-md-4 offset-md-4 text-center">
              <img src="https://bprtaspen.com/_nuxt/img/6f2c36d.png" class="img-fluid mb-20">
            </div>
            <div class="col-12 text-center">
              <h4 class="fw3">
                Oops!
              </h4>
              <template v-if="statusCode === 404">
                <h4>
                  Maaf, halaman yang Anda cari tidak ditemukan
                </h4>
                <p>Silahkan periksa kembali alamat URL yang Anda tuju atau klik button di bawah untuk kembali ke beranda (404)</p>
              </template>
              <template v-else>
                <h4>
                  Maaf, Kami Sedang Mengalami Masalah
                </h4>
                <p>Tim kami sedang berusaha memperbaiki masalah ini, mohon dicoba beberapa saat lagi (500)</p>
              </template>
              <a :href="taspenBaseUrl">
                <button type="button" class="btn btn-primary rounded-pill mt-20">KEMBALI KE BERANDA</button>
              </a>
            </div>
          </div>
        </div>
        <div class="col-12 border-top p-15 text-center align-self-end">
          <i class="far fa-copyright" /> <span class="fw5">2016-{{ new Date().getFullYear() }} BPR DP TASPEN. All Rights Reserved</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import properties from '~/properties/index'
export default {
  name: 'NuxtError',
  layout: 'error-layout',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      taspenBaseUrl: properties.TASPEN.DASHBOARD
    }
  },
  computed: {
    statusCode () {
      return (this.error && this.error.statusCode) || 500
    },
    message () {
      return this.error.message || 'Error'
    }
  },
  head () {
    return {
      title: this.message,
      meta: [
        {
          name: 'viewport',
          content:
              'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'
        }
      ]
    }
  }
}
</script>
