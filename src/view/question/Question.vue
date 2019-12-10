<template>
  <div>
    <div class="home-teaser">
      <div class="container">
        <h1>How Can We Help You?</h1>
        <section class="form-question">
          <div>
            <div class="form-group row">
              <div class="col-sm-8">
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="@example.com"
                  v-model.lazy="contactForm.email"
                />
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-8">
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="content"
                  v-model.lazy="contactForm.content"
                ></textarea>
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-8">
                <button class="btn btn-info" @click="ResponseContactForm()">SEND</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <section class="home-knowledge-base">
      <ul class="category-list">
        <li class="cl-1 bg-qs1">
          <a href>
            <span class="title">Customer help</span>
            <br />
            <span>Orders and shipping information</span>
          </a>
        </li>
        <li class="cl-1 bg-qs2">
          <a href>
            <span class="title">Partner help</span>
            <br />
            <span>Your design sales and Shop operation</span>
          </a>
        </li>
      </ul>
      <h3>Top Articles</h3>
      <div class="row">
        <div class="col-12 col-12 col-sm-6">
          <ul class="article-list">
            <li>
              <a href>Shipping Times and Costs</a>
            </li>
            <li>
              <a href>Printing Costs for Customized Products by Spreadshirt</a>
            </li>
            <li>
              <a href>Shipping Times and Costs</a>
            </li>
            <li>
              <a href>Shipping Times and Costs</a>
            </li>
            <li>
              <a href>Shipping Times and Costs</a>
            </li>
          </ul>
        </div>
        <div class="col-12 col-12 col-sm-6">
          <ul class="article-list">
            <li>
              <a href>Shipping Times and Costs</a>
            </li>
            <li>
              <a href>Printing Costs for Customized Products by Spreadshirt</a>
            </li>
            <li>
              <a href>Shipping Times and Costs</a>
            </li>
            <li>
              <a href>Shipping Times and Costs</a>
            </li>
            <li>
              <a href>Shipping Times and Costs</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import ContactForm from "../../mixins/FormContact.vue";
import { ResponseContactFormAPI } from "../../api/ContactFormAPI.js";
export default {
  name: "question",
  mixins: [ContactForm],
  data() {
    return {};
  },
  methods: {
    ResponseContactForm() {
      this.contactForm.title = "Hỏi đáp";
      if (this.contactForm.email != "" || this.contactForm.content != "") {
        ResponseContactFormAPI(this.contactForm)
          .then(response => {
            this.$toastr.s("Gửi yêu cầu thành công", "Success!");
          })

          .catch(err => {
            this.$toastr.e("Gửi yêu cầu không thành công", "FAIL!");
          });
      } else {
        this.$toastr.e("Gửi yêu cầu không thành công", "FAIL!");
      }
    }
  }
};
</script>
<style scoped>
.home-teaser {
  background-color: #a3e8e6;
}

.home-teaser > div {
  text-align: center;
  padding-top: 75px;
  padding-bottom: 75px;
  background: url(../../assets/teaser-startpage.png) no-repeat right bottom;
}

.form-question .row {
  justify-content: center;
}
.home-teaser > div h1 {
  font-size: 1.75rem;
  font-weight: 400;
  line-height: 1.2;
  margin: 0 0 1.2em 0;
  font-weight: 600;
}

.home-teaser .form-question {
  display: block;
  position: relative;
}

.home-knowledge-base,
.knowledge-base {
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
  max-width: 1200px;
}

.category-list {
  display: flex;
  margin-top: 10px;
  padding: 0;
}

.category-list li {
  display: grid;
  width: 50%;
  height: 100%;
  float: left;
  padding: 0;
  margin: 10px;
}

.category-list > .cl-1 > a {
  margin-top: 10px;
  padding-top: 150px;
  padding-bottom: 30px;
  font-size: 14px;
  color: inherit;
  text-decoration: none;
  width: 100%;
  text-align: center;
}

.category-list .bg-qs1 > a {
  background: #f6f6f6 url(../../assets/shoppingcard.png) no-repeat center 20px;
}
.category-list .bg-qs2 > a {
  background: #f6f6f6 url(../../assets/shop.png) no-repeat center 20px;
}
.category-list > .cl-1 > a .title {
  font-size: 1.25rem;
  font-weight: 600;
}

.home-knowledge-base h3 {
  font-size: 1.5rem;
  padding: 10px;
}
.home-knowledge-base .article-list {
  margin: 0 0 1.875em;
  padding-left: 2.5em;
}
.home-knowledge-base .article-list li {
  margin-bottom: 10px;
}
.home-knowledge-base .article-list li a {
  text-decoration: none;
  cursor: pointer;
  color: #00b2a5;
}
@media (max-width: 768px) {
  .category-list {
    display: grid;
  }

  .category-list .cl-1 {
    width: 96.5%;
    margin-top: 10px;
    height: 100%;
  }

  .home-knowledge-base h3 {
    font-size: 1.25rem;
  }
}
</style>