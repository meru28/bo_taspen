<template>
  <!-- <div class="app-footer">
    <div class="app-footer__inner">
      Copyright 2019 BPR DP Taspen
    </div>
  </div> -->
  <div class="app-wrapper-footer">
    <div class="app-footer">
      <div class="app-footer__inner">
        <div class="app-footer-left">
          Copyright {{ year }} BPR DP Taspen
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Cookie from 'js-cookie'
export default {
  name: 'Footer',
  data () {
    return {
      year: 0
    }
  },
  mounted () {
    this.year = Cookie.get('year')
  }
}
</script>
