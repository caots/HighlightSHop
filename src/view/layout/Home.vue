<template>
  <div>
    <loader-app v-show="isLoader"></loader-app>
    <template v-if="!isLoader">
      <section class="shop-slider container-fluid mt-2">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
          style="z-index:5"
        >
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-block w-100"
                src="../../assets/bannercheckoutcart.jpg"
                alt="First slide"
              />
              <div class="carousel-caption d-none d-md-block" style="top:40%; padding: 0">
                <h1 style="font-size:2vw; font-weight:500">Giao sản phẩm tốt nhất cho người sử dụng</h1>
                <h1 style="font-size:3vw; font-weight:600">THỰC PHẨM ORGANIC</h1>
                <p style="font-size:1vw;">Chúng tôi cung cấp các sản phẩm hữu cơ chất lượng cao</p>
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="../../assets/slider-6.png" alt="Second slide" />
              <div class="carousel-caption d-none d-md-block" style="top:40%; padding: 0">
                <h1 style="font-size:2vw; font-weight:500">Giao sản phẩm tốt nhất cho người sử dụng</h1>
                <h1 style="font-size:3vw; font-weight:600">THỰC PHẨM ORGANIC</h1>
                <p style="font-size:1vw;">Chúng tôi cung cấp các sản phẩm hữu cơ chất lượng cao</p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="../../assets/bannercheckoutcart.jpg"
                alt="Third slide"
              />
              <div class="carousel-caption d-none d-md-block" style="top:40%; padding: 0">
                <h1 style="font-size:2vw; font-weight:500">Giao sản phẩm tốt nhất cho người sử dụng</h1>
                <h1 style="font-size:3vw; font-weight:600">THỰC PHẨM ORGANIC</h1>
                <p style="font-size:1vw;">Chúng tôi cung cấp các sản phẩm hữu cơ chất lượng cao</p>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        <div class="wrap-shop-category mt-2">
          <div class="container shop-category">
            <div class="row" style="flex-wrap: nowrap;">
              <div class="sc-title p-2">
                <h3 class="pr-3">Sản phẩm</h3>
              </div>
              <ul class="sc-list d-flex ml-auto">
                <li>
                  <a href="#">
                    <i class="fas fa-gift"></i> &nbsp; Gift
                  </a>
                </li>
                <li v-for="(tag, index) in listTag" :key="index+ Math.random()">
                  <a href="#">{{tag.name}}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="shop-homepage-topics mt-5">
        <div class="shop-honepage-titles row">
          <div class="col-12 col-sm-7 order-1 mb-3">
            <a href="#hot_product" class="homepgae-topic-links">
              <picture class="homepage-topic-picture">
                <img src="../../assets/slide-home3.png" alt />
              </picture>
              <div class="homepage-topic-overlay">
                <span class="homepage-topic-text">Sản phẩm của tuần</span>
              </div>
            </a>
          </div>
          <div class="col-12 col-sm-5 order-1 order-sm-0 mb-3">
            <div class="topic-child" style="height: auto">
              <router-link
                tag="a"
                :to="{
                  name:'productPage',
                  query:{ type :'sale'}
                 }"
                class="homepgae-topic-links mb-4"
              >
                <picture class="homepage-topic-picture">
                  <img src="../../assets/bannercheckoutcart.jpg" alt />
                </picture>
                <div class="homepage-topic-overlay">
                  <span class="homepage-topic-text">Giảm giá shock</span>
                </div>
              </router-link>
              <router-link
                tag="a"
                :to="{
                  name:'productPage',
                  query:{ type :'hot'}
                 }"
                class="homepgae-topic-links"
              >
                <picture class="homepage-topic-picture">
                  <img src="../../assets/bannercheckoutcart.jpg" alt />
                </picture>
                <div class="homepage-topic-overlay">
                  <span
                    style="background: #3339;color:#fff"
                    class="homepage-topic-text"
                  >Sản phẩm bán chạy</span>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <div class="shop-honepage-titles row">
          <div class="col-12 col-sm-7 order-1 mb-3">
            <a href="#about-me" class="homepgae-topic-links">
              <picture class="homepage-topic-picture">
                <img src="../../assets/slide-home2.jpg" alt />
              </picture>
              <div class="homepage-topic-overlay">
                <span class="homepage-topic-text">Về chúng tôi</span>
              </div>
            </a>
          </div>
          <div class="col-12 col-sm-5 order-1 order-sm-0 mb-3">
            <div class="topic-child" style="height: auto">
              <a href="#benefit" class="homepgae-topic-links mb-4">
                <picture class="homepage-topic-picture">
                  <img src="../../assets/bannercheckoutcart.jpg" alt />
                </picture>
                <div class="homepage-topic-overlay">
                  <span
                    style="background: #3339;color:#fff"
                    class="homepage-topic-text"
                  >Lợi ích khách hàng</span>
                </div>
              </a>
              <a href="#customer-comment" class="homepgae-topic-links">
                <picture class="homepage-topic-picture">
                  <img src="../../assets/bannercheckoutcart.jpg" alt />
                </picture>
                <div class="homepage-topic-overlay">
                  <span class="homepage-topic-text">Khách hàng chia sẻ</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section class="shop-homepage-content mt-5" id="hot_product">
        <div class="back-line">
          <h2>Sản phẩm bán chạy trong tuần</h2>
        </div>
        <div class="row">
          <template v-for="(item,index) in listProduct">
            <div
              class="col-sm-6 col-md-6 col-lg-4 mt-2 hot-product-home"
              v-if="index < 2"
              :key="index+Math.random()"
            >
              <router-link
                tag="a"
                :to="{
                    name:'detailsProductPage',
                    query:{
                      id :item.id,
                      small_category: item.smallCategory.id
                      }
                  }"
                class="homepage-product-links d-flex"
              >
                <picture class="homepgae-product-picture">
                  <img :src="item.image" alt />
                </picture>
                <div class="homepgae-product-text mt-2">
                  <span>{{item.name}} &nbsp;</span>
                </div>
              </router-link>
            </div>
          </template>

          <div class="col-12 col-lg-4 mt-2">
            <div class="row">
              <template v-for="(item,index) in listProduct">
                <div
                  class="col-6 col-sm-3 col-lg-6 hot-product-home"
                  v-if="index > 1 && index < 6"
                  :key="index+Math.random()"
                >
                  <router-link
                    tag="a"
                    :to="{
                    name:'detailsProductPage',
                    query:{
                      id :item.id,
                      small_category: item.smallCategory.id
                    }
                  }"
                    class="homepage-product-links d-flex"
                  >
                    <picture class="homepgae-product-picture" style="width: 100% ;height: 100%">
                      <img :src="item.image" alt style="width: 100% ;height: 100%" />
                    </picture>
                    <div class="homepgae-product-text mt-2">{{item.name}} &nbsp;</div>
                  </router-link>
                </div>
              </template>
            </div>
          </div>
        </div>
      </section>
      <section class="homepage-designs mt-5" id="about-me">
        <div class="back-line">
          <h2>Về chúng tôi</h2>
        </div>
        <div class="row">
          <div class="col-12 col-md-6 mt-2 mb-2">
            <a href class="homepgae-design-product">
              <div class="tile-overlay bg-1 d-flex">
                <div class="homepgae-design-overlay">
                  <div class="tile-title">Fresh Fruit</div>
                  <h3>High</h3>
                  <div>
                    About team development&nbsp;
                    <i class="fas fa-chevron-right"></i>
                  </div>
                </div>
                <picture class="picture-child ml-auto">
                  <img
                    src="https://image.spreadshirtmedia.com/content/q_auto/f_png,f_auto,w_225,h_225/v3/CMS/Startpage/Designs/featuredDesigner_deco"
                    alt
                  />
                </picture>
              </div>
            </a>
          </div>
          <div class="col-12 col-md-6 mt-2">
            <a href class="homepgae-design-product">
              <div class="tile-overlay bg-2 d-flex">
                <div class="homepgae-design-overlay">
                  <div class="tile-title">Health guaranteed</div>
                  <h3>Light</h3>
                  <div>
                    About me &nbsp;
                    <i class="fas fa-chevron-right"></i>
                  </div>
                </div>
                <picture class="picture-child ml-auto">
                  <img
                    src="https://image.spreadshirtmedia.com/content/q_auto/f_png,f_auto,w_225,h_225/v4/CMS/Startpage/Designs/collections_deco"
                    alt
                  />
                </picture>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section class="homepage-info" id="benefit">
        <div class="row mb-4">
          <div class="col-12 info-text">
            <h2 style="font-weight: 600;">THỰC PHẨM ORGANIC</h2>
            <h3>Chúng tôi cung cấp các sản phẩm hữu cơ chất lượng cao, an toàn cho người sử dụng</h3>
          </div>
          <div class="col-12 icons">
            <div class="row justify-content-center">
              <div class="col-4 col-sm-3 mt-5">
                <img
                  src="https://image.spreadshirtmedia.com/content/t_std/f_png,q_60/asset/icons/icon_design_greenbg"
                  alt
                />
                <div class="mt-2" style="font-size: 18px;">Tin cậy</div>
              </div>
              <div class="col-4 col-sm-3 mt-5">
                <img
                  src="https://image.spreadshirtmedia.com/content/t_std/f_png,q_60/asset/icons/icon_upload_greenbg"
                  alt
                />
                <div class="mt-2" style="font-size: 18px;">An toàn</div>
              </div>
              <div class="col-4 col-sm-3 mt-5">
                <img
                  src="https://image.spreadshirtmedia.com/content/t_std/f_png,q_60/asset/icons/icon_sell_greenbg"
                  alt
                />
                <div class="mt-2" style="font-size: 18px;">Tiết kiệm</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="homepage-about mt-5">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 col-md-10 col-lg-8 homepage-about-text">
              <div class="content-about">
                <h2>This is CS SHOP</h2>
                <p>
                  At Spreadshirt, we are dedicated to providing beautifully-printed apparel and
                  accessories at
                  fair prices, created with responsible and eco-friendly production practices. What
                  began
                  as a
                  start-up in 2002 soon grew into one of the world's most successful print-on-demand
                  ventures.
                  We value fair employment, transparent manufacturing methods, and sound working
                  conditions at
                  all of our locations worldwide.
                </p>
                <a href>
                  Get To Know Us &nbsp;
                  <i class="fas fa-chevron-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="feedback text-center mt-5" id="customer-comment">
        <div class="back-line">
          <h2>Khách hàng chia sẻ</h2>
        </div>
        <div class="col-12">
          <div id="carousel3Column12" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carousel3Column12" data-slide-to="0" class="active"></li>
              <li data-target="#carousel3Column12" data-slide-to="1" class></li>
              <li data-target="#carousel3Column12" data-slide-to="2" class></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="row">
                  <div class="col-12">
                    <div class="aboutme__fb-wp">
                      <div class="abmefbwp-img">
                        <img
                          src="https://scontent.fhan11-1.fna.fbcdn.net/v/t1.0-1/p320x320/26113873_1988347458083530_1429125041908949849_n.jpg?_nc_cat=101&_nc_ohc=JSsqA4k7IqIAQnsb6j3cKY2lk9DEs3PaAvB8o3ftoLA1cbta8XZdGBwBw&_nc_ht=scontent.fhan11-1.fna&oh=04fdabf92ffe9e32c0bdb368ac2188dd&oe=5E7A6E40"
                          alt
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="abmefbwp-text" style="margin:0">
                      <p>Trái cây của các bạn rất tuyệt</p>
                      <span class="ver"></span>
                      <span class="d-block fb-name">Trần Sỹ Cao</span>
                      <span class="d-block">Our happy customer</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row">
                  <div class="col-12">
                    <div class="aboutme__fb-wp">
                      <div class="abmefbwp-img">
                        <img
                          src="https://scontent.fhan11-1.fna.fbcdn.net/v/t1.0-1/c0.83.320.320a/p320x320/75295864_1176113242593877_5888612072207417344_n.jpg?_nc_cat=107&_nc_ohc=BcqPU4hXHBcAQnnhVi4aC9-D1Fi2daHDMUS_iWCfZasMhal7Ml2ZZuVdg&_nc_ht=scontent.fhan11-1.fna&oh=b1ceef1461e6b18ed2988efbe933c13e&oe=5E800608"
                          alt
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="abmefbwp-text">
                      <p>"Sản phẩm sạch và đảm bảo"</p>
                      <span class="ver"></span>
                      <span class="d-block fb-name">Trương Thị Sáng</span>
                      <span class="d-block">Our happy customer</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row">
                  <div class="col-12">
                    <div class="aboutme__fb-wp">
                      <div class="abmefbwp-img">
                        <img
                          src="https://scontent.fhan11-1.fna.fbcdn.net/v/t1.0-9/70957441_1120470384824830_5144087188027211776_n.jpg?_nc_cat=108&_nc_ohc=mpndFgDy6vgAQnhtvo-KATAVGbX-oyV4oquh8BnTiiuvGzfg9L5iOwpkA&_nc_ht=scontent.fhan11-1.fna&oh=ad740881fab41e559739ae5e690194c5&oe=5E78C0C8"
                          alt
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="abmefbwp-text">
                      <p>"Sản phẩm sạch và đảm bảo"</p>
                      <span class="ver"></span>
                      <span class="d-block fb-name">Trương Thị Sáng</span>
                      <span class="d-block">Our happy customer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </template>
  </div>
</template>
<script>
import $ from "jquery";
import { findAllTagAPI } from "../../api/TagAPI.js";
import { loaderMixins } from "../../mixins/LoaderMixins.js";
import LoaderApp from "../../component/Loader.vue";
import { getAllHotProductByPage } from "../../api/ProductAPI.js";
export default {
  name: "home",
  components: {
    LoaderApp
  },
  mixins: [loaderMixins],
  created() {
    this.getAllTag();
    this.getAllHotProduct();
  },
  mounted() {
    $(document).on("click", 'a[href^="#"]', function(event) {
      event.preventDefault();
      $("html, body").animate(
        {
          scrollTop: $($.attr(this, "href")).offset().top
        },
        500
      );
    });
  },
  data() {
    return {
      listTag: [],
      listProduct: []
    };
  },
  methods: {
    getAllTag() {
      this.isLoader = true;
      findAllTagAPI()
        .then(response => {
          this.listTag = response;
        })
        .catch(err => console.log(err))
        .finally(() => (this.isLoader = false));
    },
    getAllHotProduct() {
      this.isLoader = true;
      getAllHotProductByPage(1)
        .then(response => {
          this.listProduct = response;
        })
        .catch(err => console.log(err))
        .finally(() => (this.isLoader = false));
    }
  }
};
</script>
<style >
.aboutme__fb-wp {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 40px;
}
.hot-product-home:hover {
  box-shadow: 0px 2px 7px 0px rgb(0, 178, 165);
}
.homepgae-product-text{
  text-align: center
}
.aboutme__fb-wp .abmefbwp-img {
  width: 105px;
  height: 105px;
  border-radius: 50%;
  border: 1px solid #00b2a5;
  overflow: hidden;
  transition: 0.4s all;
}
.aboutme__fb-wp .abmefbwp-img img {
  padding: 10px;
  width: 100%;
  height: 100%;
  transition: 0.4s all;
  border-radius: 50%;
}
.aboutme__fb-wp .abmefbwp-img:hover {
  border-style: dashed;
}
.aboutme__fb-wp .abmefbwp-img:hover img {
  padding: 5px;
}

.abmefbwp-text .ver {
  width: 2px;
  height: 25px;
  margin-left: 50%;
  display: block;
  background-color: #00b2a5;
}

.feedback .carousel-indicators {
  top: 50% !important;
}
.feedback .carousel-indicators li {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #fff;
  border: 1px solid #00b2a5;
  display: inline-block;
  margin: 5px;
  cursor: pointer;
  transition: 0.4s;
}

.feedback .carousel-indicators li.active {
  background-color: #00b2a5;
}
</style>