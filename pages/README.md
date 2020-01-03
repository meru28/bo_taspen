# PAGES

This directory contains your Application Views and Routes.
The framework reads all the `*.vue` files inside this directory and creates the router of your application.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/routing).

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
                <b-form-group
                  id="exampleInputGroup1"
                  label-for="exampleInput1"
                  description="We'll never share your email with anyone else.">
                  <b-form-input
                    id="exampleInput1"
                    type="email"
                    required
                    placeholder="Enter email..." />
                </b-form-group>
                <b-form-group id="exampleInputGroup2" label-for="exampleInput2">
                  <b-form-input
                    id="exampleInput2"
                    type="password"
                    required
                    placeholder="Enter password..." />
                </b-form-group>
                <b-form-checkbox id="exampleCheck" name="check">
                  Keep me logged in
                </b-form-checkbox>
                <div class="divider" />
                <!-- <h6 class="mb-0">
                  No account?
                  <a href="javascript:void(0);" class="text-primary">Sign up now</a>
                </h6> -->
              </div>
              <div class="modal-footer clearfix">
                <div class="float-left">
                  <a href="javascript:void(0);" class="btn-lg btn btn-link">
                    Lupa
                    Password
                  </a>
                </div>
                <div class="float-right">
                  <b-button variant="primary" size="lg">
                    Login to Dashboard
                  </b-button>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center text-white opacity-8 mt-3">
            Copyright &copy; BPR DP Taspen 2019
          </div>
        </b-col>
      </div>
    </div>

    <template>
  <div>
    <div class="min-vh-100 bg-image" style="background-image: url('assets/images/login/7.png')" />
    <div class="row min-vh-100 bg-transparent justify-content-center align-items-center">
      <div class="col-auto">
        <div class="login-layout animate-fadeout">
          <div class="row bg-white shadow rounded">
            <div class="col">
              <div class="row justify-content-center">
                <div
                  class="col-auto p-0 bg-primary1 rounded-circle shadow"
                  style="position: relative;
                        top: -46px;">
                  <i class="fa fa-fw icon-login" aria-hidden="true" title="Copy to use user"></i>
                </div>
              </div>

              <div class="list-blue" />
              <div class="row pb-4">
                <div class="col">
                  <div class="d-flex flex-column px-4">
                    <h4 class="text-center mb-2" style="margin-top: -30px;">
                      <b>User Login</b>
                    </h4>
                    <h6 class="text-danger text-center invisible" style="font-size: 11px;">
                      Username
                      atau
                      Password yang anda masukan salah !
                    </h6>

                    <div class="col px-0">
                      <input class="input-info my-2" type="text" name placeholder="Username">
                      <i
                        class="fa fa-fw icon-form"
                        aria-hidden="true"
                        title="Copy to use address-book" />
                    </div>

                    <div class="col px-0">
                      <input class="input-info my-2" type="password" name placeholder="Password">
                      <i class="fa fa-fw icon-form" aria-hidden="true" title="Copy to use unlock" />
                    </div>

                    <button class="btn btn-primary1 my-4">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Login'
}
</script>

