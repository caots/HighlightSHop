<template>
  <footer>
    <section class="subscribe row">
      <div class="col-md-6 col-sm-12">
        <h3 class="text-center">
          <i class="far fa-envelope"></i> &nbsp; Nhận mẫu mới thông qua Email
        </h3>
      </div>
      <div class="col-md-6 col-sm-12">
        <div class="row">
          <div class="form-group search col-sm-8 col-12">
            <input
              type="email"
              placeholder="Enter your e-mail address"
              class="email-client"
              v-model.lazy="contactForm.email"
            />
          </div>
          <div class="col-sm-4 col-12">
            <input
              type="submit"
              value="SUBSCRIBE"
              class="btn btn-outline-success"
              @click="ResponseContactForm()"
            />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="footer-info mt-5 row justify-content-center">
        <div class="col-lg-3 col-md-4 col-sm-4 col-6 mt-3 mb-3">
          <strong>Service</strong>
          <ul>
            <li>
              <i class="fas fa-tshirt"></i>&nbsp;
              <span>Your Orders</span>
            </li>
            <li>
              <i class="fas fa-question"></i> &nbsp;
              <span>Help</span>
            </li>
            <li>
              <i class="fas fa-envelope"></i>&nbsp;
              <span>Contact</span>
            </li>
            <li>
              <i class="fas fa-phone"></i> &nbsp;
              <span>0948 856 496</span>
            </li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-4 col-6 mt-3 mb-3">
          <strong>The Company</strong>
          <ul>
            <li>About Us</li>
            <li>Press</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-4 col-12 mt-3 mb-3">
          <strong>Follow</strong>
          <div class="list-contact">
            <div class="ft-social-channel">
              <a href>
                <i class="fab fa-google-plus-g"></i> &nbsp;
                <span>Email</span>
              </a>
            </div>
            <div class="ft-social-channel">
              <a href>
                <i class="fab fa-facebook-f"></i> &nbsp;
                <span>Facebook</span>
              </a>
            </div>
            <div class="ft-social-channel">
              <a href>
                <i class="fab fa-twitter"></i> &nbsp;
                <span>Twitter</span>
              </a>
            </div>
            <div class="ft-social-channel">
              <a href>
                <i class="fab fa-instagram"></i> &nbsp;
                <span>Instagram</span>
              </a>
            </div>
            <div class="ft-social-channel">
              <a href>
                <i class="fab fa-youtube"></i> &nbsp;
                <span>Youtube</span>
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-8 mt-3 mb-4">
          <strong>Facebook Page</strong>
          <div
            class="fb-page"
            data-href="https://www.facebook.com/aothunit/"
            data-tabs="timeline"
            data-width="300"
            data-height="200"
            data-small-header="false"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="true"
          >
            <blockquote cite="https://www.facebook.com/aothunit/" class="fb-xfbml-parse-ignore">
              <a href="https://www.facebook.com/aothunit/">Áo Thun IT</a>
            </blockquote>
          </div>
        </div>
      </div>
      <div class="seo-wrappter-footer">
        <div class="footer-content">
          <span>
            Spreadshirt prints a huge variety of custom clothing like T-shirts, hoodies and more. Your
            order
            is handled daily with a lot of love ❤️ from USA and delivered worldwide!
          </span>
        </div>
      </div>
    </section>
  </footer>
</template>
<script>
import { ResponseContactFormAPI } from "../../api/ContactFormAPI.js";
import FormContact from "../../mixins/FormContact.vue";
export default {
  name: "footerPage",
  mixins: [FormContact],
  data() {
    return {};
  },
  methods: {
    ResponseContactForm() {
      this.contactForm.title = "Đăng kí nhận thông báo ";
      this.contactForm.content =
        "Tôi muốn nhận nhận lời khuyên, tin tức và khuyến mãi từ Thật Fruit !";
      if (this.contactForm.email != "") {
        ResponseContactFormAPI(this.contactForm)
          .then(response => {
            this.$toastr.s("Đăng kí nhận email thành công", "Success!");
          })
          .catch(err => {
            this.$toastr.e("Đăng kí nhận email không thành công", "FAIL!");
          });
      } else {
        this.$toastr.e("Đăng kí nhận email không thành công", "FAIL!");
      }
    }
  }
};
</script>
