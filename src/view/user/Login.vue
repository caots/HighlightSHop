<template>
  <div class="modal-body loginpage">
    <div class="container">
      <div class="row">
        <div class="col-12 mx-auto text-center mt-5">
          <h1 style="color: #FFC700;">Đăng nhập</h1>
        </div>
        <div class="col-6 mx-auto">
          <div class="card card-signin mb-5" style="background: inherit;">
            <div class="card-body">
              <div class="form-signin">
                <div class="form-label-group">
                  <input
                    type="email"
                    id="inputEmail"
                    class="form-control formlogin"
                    placeholder="Email address"
                    required
                    autofocus
                    style="padding:1rem"
                    v-model.lazy="loginForm.username"
                  />
                  <div class="invalid-feedback" v-if="messageError==1">Chưa điền tài khoản</div>
                </div>
                <div class="form-label-group">
                  <input
                    type="password"
                    id="inputPassword"
                    class="form-control formlogin"
                    placeholder="Password"
                    required
                    style="padding:1rem"
                    v-model.lazy="loginForm.password"
                  />
                  <div class="invalid-feedback" v-if="messageError==2">Chưa điền mật khẩu</div>
                </div>

                <div class="form-label-group d-flex">
                  <div class="custom-control custom-checkbox mb-3" style="padding-left:10px">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="customCheck1"
                      v-model="remember"
                    />
                    <label class="custom-control-label" for="customCheck1" style="color:#FFC700">
                      Remember
                      password
                    </label>
                  </div>
                  <div class="ml-auto">
                    <span style="color:#FFC700">Sign Up</span>
                    <a href style="color:#007bff">Here</a>
                  </div>
                </div>
                <button
                  class="btn btn-primary btn-block text-uppercase"
                  type="submit"
                  @click="authenticate()"
                >Sign in</button>
                <hr class="my-4" />
                <button class="btn btn-google btn-block text-uppercase" type="submit">
                  <i class="fab fa-google mr-2"></i> Sign in with
                  Google
                </button>
                <button class="btn btn-facebook btn-block text-uppercase" type="submit">
                  <i class="fab fa-facebook-f mr-2"></i> Sign in with
                  Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
import { mapActions } from "vuex";
export default {
  name: "login",
  mounted() {
    $("#ModelLogin").on("show.bs.modal", function(event) {
      var button = $(event.relatedTarget); // Button that triggered the modal
      var recipient = button.data("whatever"); // Extract info from data-* attributes
      // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
      // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
      var modal = $(this);
      modal.find(".modal-title").text("Sign In");
      modal.find(".modal-body input").val(recipient);
    });
  },
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      },
      remember: false,
      messageError: 0
    };
  },
  methods: {
    ...mapActions(["loginUser", "getUser"]),
    authenticate() {
      if (this.loginForm.username == "") {
        this.messageError = 1;
      } else {
        if (this.loginForm.password == "") {
          this.messageError = 2;
        } else {
          this.messageError = 0;
        }
      }
      if (this.messageError == 0) {
        this.loginUser({
          loginForm: this.loginForm,
          remember: this.remember
        })
          .then(response => {
            this.$toastr.s("Chào mừng trở lại CSShop", "Login Success!");
            this.$router.push("/user");
          })
          .catch(err => {
            this.$toastr.w("Đăng nhập thất bại", "Warning!");
          });
      }
    }
  }
};
</script>
<style scoped>
:root {
  --input-padding-x: 1.5rem;
  --input-padding-y: 0.75rem;
}

.invalid-feedback {
  display: block !important;
  padding-left: 10px;
  color: #ffc700;
}
.loginpage {
  background: url(../../assets/bannercheckoutcart.jpg) no-repeat right bottom;
}
.card-signin {
  border: 0;
  border-radius: 1rem;
  margin-top: 0 !important;
  border: none !important;
}

.card-signin .card-title {
  margin-bottom: 2rem;
  font-weight: 300;
  font-size: 1.5rem;
}

.form-signin {
  width: 100%;
}

.form-signin .btn {
  font-size: 80%;
  border-radius: 5rem;
  letter-spacing: 0.1rem;
  font-weight: bold;
  padding: 1rem;
  transition: all 0.2s;
}

.form-label-group {
  position: relative;
  margin-bottom: 1rem;
}

.form-label-group > input {
  height: auto;
  border-radius: 2rem;
}

.form-label-group .formlogin {
  padding: 10px;
}
.form-label-group > label {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  margin-bottom: 0;
  /* Override default `<label>` margin */
  line-height: 1.5;
  color: #495057;
  border-radius: 0.25rem;
  transition: all 0.1s ease-in-out;
}

.form-label-group input::-webkit-input-placeholder {
  color: transparent;
}

.form-label-group input:-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-moz-placeholder {
  color: transparent;
}

.form-label-group input::placeholder {
  color: transparent;
}

.form-label-group input:not(:placeholder-shown) {
  padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));
  padding-bottom: calc(var(--input-padding-y) / 3);
}

.form-label-group input:not(:placeholder-shown) ~ label {
  padding-bottom: calc(var(--input-padding-y) / 3);
  font-size: 12px;
  color: #777;
  padding-left: 20px;
  padding-top: 3px;
}

.btn-google {
  color: white;
  background-color: #ea4335;
}

.btn-facebook {
  color: white;
  background-color: #3b5998;
}

/* Fallback for Edge
  -------------------------------------------------- */

@supports (-ms-ime-align: auto) {
  .form-label-group > label {
    display: none;
  }
  .form-label-group input::-ms-input-placeholder {
    color: #777;
  }
}

/* Fallback for IE
  -------------------------------------------------- */

@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .form-label-group > label {
    display: none;
  }
  .form-label-group input:-ms-input-placeholder {
    color: #777;
  }
}
</style>