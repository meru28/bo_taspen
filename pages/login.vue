<template>
  <div>
    <div class="h-100 bg-plum-plate bg-animation">
      <div class="d-flex h-100 justify-content-center align-items-center">
        <b-col md="8" class="mx-auto app-login-box">
          <div class="app-logo-inverse mx-auto mb-3" />

          <div class="modal-dialog w-100 mx-auto">
            <div class="modal-content">
              <div class="modal-body">
                <div class="h5 modal-title text-center">
                  <h4 class="mt-2">
                    <div>Selamat Datang,</div>
                    <!-- <span>Please sign in to your account below.</span> -->
                  </h4>
                </div>
                <b-form v-if="!$store.state.authUser" @submit.prevent="login">
                  <b-form-group
                    id="exampleInputGroup1"
                    label-for="exampleInput1"
                    description="We'll never share your user with anyone else.">
                    <b-form-input
                      id="exampleInput1"
                      v-model="formUsername"
                      type="text"
                      required
                      placeholder="Enter user..." />
                  </b-form-group>
                  <b-form-group id="exampleInputGroup2" label-for="exampleInput2">
                    <b-form-input
                      id="exampleInput2"
                      v-model="formPassword"
                      type="password"
                      required
                      placeholder="Enter password..." />
                  </b-form-group>
                  <div class="divider" />
                  <div class="modal-footer clearfix">
                    <div class="float-right">
                      <b-button variant="primary" size="lg" type="submit">
                        Login to Dashboard
                      </b-button>
                    </div>
                  </div>
                </b-form>
              </div>
            </div>
          </div>
          <div class="text-center text-white opacity-8 mt-3">
            Copyright &copy; BPR DP Taspen {{ $store.getters.getYear }}
          </div>
        </b-col>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
      formError: null,
      formUsername: '',
      formPassword: '',
      token: null,
      year: 0
    }
  },
  mounted () {
    this.$store.dispatch('getYear')
  },
  methods: {
    login () {
      this.$store.dispatch('login', {
        email: this.formUsername,
        password: this.formPassword
      })
    }
  }
}
</script>
