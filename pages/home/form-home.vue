<template>
  <fragment>
    <PageTitle :heading="heading" :subheading="subheading" :icon="icon" />
    <div class="content">
      <div class="main-card mb-3 card">
        <div class="card-body">
          <h5 class="card-title">
            Beranda
          </h5>
          <form class="">
            <div class="position-relative row form-group">
              <label for="judulBeranda" class="col-sm-2 col-form-label">Judul Beranda</label>
              <div class="col-sm-10">
                <input id="judulBeranda" name="judul" placeholder="judul beranda" type="text" class="form-control">
              </div>
            </div>
            <div class="position-relative row form-group">
              <label for="periode" class="col-sm-2 col-form-label">Periode</label>
              <div class="col-sm-10">
                <input id="periode" name="periode" placeholder="periode" type="text" class="form-control">
              </div>
            </div>
            <div class="position-relative row form-group">
              <label for="jangkaWaktu" class="col-sm-2 col-form-label">Jangka Waktu</label>
              <div class="col-sm-10">
                <input id="jangkaWaktu" name="jangkaWaktu" placeholder="jangka waktu" type="text" class="form-control">
              </div>
            </div>
            <div class="form-row">
              <div class="col-md-4">
                <div class="position-relative form-group">
                  <label for="nasabah" class="">Nasabah</label>
                  <input id="nasabah" name="city" placeholder="jumlah nasabah" type="text" class="form-control">
                </div>
              </div>
              <div class="col-md-4">
                <div class="position-relative form-group">
                  <label for="deposit" class="">Deposit</label>
                  <input id="deposit" name="state" placeholder="jumlah deposito" type="text" class="form-control">
                </div>
              </div>
              <div class="col-md-4">
                <div class="position-relative form-group">
                  <label for="kredit" class="">Kredit</label>
                  <input id="kredit" name="zip" placeholder="jumlah kreditur" type="text" class="form-control">
                </div>
              </div>
            </div>
            <!-- <div class="position-relative row form-group"><label for="exampleSelect" class="col-sm-2 col-form-label">Select</label>
              <div class="col-sm-10"><select name="select" id="exampleSelect" class="form-control"></select></div>
            </div> -->
            <!-- <div class="position-relative row form-group"><label for="exampleSelectMulti" class="col-sm-2 col-form-label">Select Multiple</label>
              <div class="col-sm-10"><select multiple="" name="selectMulti" id="exampleSelectMulti" class="form-control"></select></div>
            </div> -->
            <div class="position-relative row form-group">
              <label for="bprDeskripsi" class="col-sm-2 col-form-label">Deskripsi BPR DP Taspen :</label>
              <div class="col-sm-10">
                <textarea id="bprDeskripsi" name="text" class="form-control" />
              </div>
            </div>
            <div class="position-relative row form-check">
              <div class="col-sm-10 offset-sm-2">
                <button class="btn btn-primary">
                  Simpan
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </fragment>
</template>
<script>
import Vue from 'vue'
import Fragment from 'vue-fragment'
import PageTitle from '~/components/_base/PageTitle'

Vue.use(Fragment.Plugin)

export default {
  name: 'FormHome',
  layout: 'sidebar',
  components: {
    PageTitle
  },
  data () {
    return {
      heading: 'Form Beranda',
      subheading: 'Silakan isi beberapa input di bawah ini untuk mengganti konten pada halaman Beranda.',
      icon: 'pe-7s-browser icon-gradient bg-tempting-azure'
    }
  }
}
</script>
