<template>
  <div class="container">
    <loader-app v-if="isLoader"></loader-app>
    <template v-if="!isLoader">
      <div class="row mb-5">
        <div class="col-md-6 col-lg-6 col-xs-12">
          <div class="clearfix details-product-page d-flex">
            <div class="dpp-image" style="width:80%">
              <figure
                class="zoom"
                :style="[{'background':'url('+ imageProductDisplay+ ')'},{'margin':'0px'},{'width':'100%'}]"
                @mousemove="zoomImage($event)"
              >
                <img :src="imageProductDisplay" />
              </figure>
            </div>
          </div>
          <div class="clearfix thumbnails">
            <div class="bx-product-wrap">
              <div class="bx-viewport">
                <ul class="thumblist">
                  <li :class="imageActive==1 ? 'active-details-product' : ''">
                    <a href="#" @click.prevent="changeImageDisplay(1,dataProduct.image)">
                      <img :src="dataProduct.image" alt />
                    </a>
                  </li>
                  <li :class="imageActive==2 ? 'active-details-product' : ''">
                    <a href="#" @click.prevent="changeImageDisplay(2,dataProduct.imageOne)">
                      <img :src="dataProduct.imageOne" alt />
                    </a>
                  </li>
                  <li :class="imageActive==3 ? 'active-details-product' : ''">
                    <a href="#" @click.prevent="changeImageDisplay(3,dataProduct.imageTwo)">
                      <img :src="dataProduct.imageTwo" alt />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-6 col-xs-12 details-product-info">
          <div class="product-review">
            <h3>{{dataProduct.name}}</h3>
            <a href="#">20 lượt xem</a>
          </div>
          <hr style="margin-right:100px" />
          <div class="price">
            <template v-if="dataProduct.originCostRetail!=dataProduct.saleCostRetail">
              <span style="font-size: 18px;color:red">
                <strike>{{dataProduct.originCostRetail}}</strike>
              </span>
              <span>{{dataProduct.saleCostRetail}} VNĐ</span>
            </template>
            <template v-else>
              <span>{{dataProduct.saleCostRetail}} VNĐ</span>
            </template>
          </div>
          <div class="availability">
            Trạng thái
            <span>
              <span class="in-stock"></span>
              {{dataProduct.productStatus ? 'Còn hàng' : 'Hết hàng'}}
            </span>
          </div>
          <hr style="margin-right:100px;clear: both;" />
          <p class="data-info">
            Mã sản phẩm:
            <span>{{dataProduct.productCode}}</span>
          </p>
          <p class="data-info">
            Xuất sứ
            <span>{{dataProduct.origin}}</span>
          </p>
          <p class="data-info">
            Tags:
            <span>
              <a
                href="#"
                v-for="(tag,index) in dataProduct.tags"
                :key="index+Math.random()"
              >{{tag.name}}</a>
            </span>
          </p>
          <p class="data-info">
            Danh mục:
            <span>
              <a href>{{dataProduct.smallCategory.name}}</a>
            </span>
          </p>
          <hr style="margin-right:100px;clear: both;" />
          <div>{{dataProduct.productInfo}}</div>
          <hr style="margin-right:100px;clear: both;" />
          <span class="data-info">
            MÀU SẮC:
            <span>
              <a href>Black</a>
            </span>
          </span>
          <span style="color: #828385;">&nbsp;|&nbsp;#161616</span>
          <div class="color-block">
            <a href></a>
          </div>
          <hr style="margin-right:100px;clear: both;" />
          <span class="data-info">SIZE SẴN CÓ</span>
          <div class="size-blocks">
            <div class="radio-inline size">
              <input type="radio" value="1" name="size" id="radio-size-1" />
              <lable for="radio-size-1" class="active-radio">XL</lable>
            </div>
            <div class="radio-inline size">
              <input type="radio" value="1" name="size" id="radio-size-2" />
              <lable for="radio-size-2">L</lable>
            </div>
            <div class="radio-inline size">
              <input type="radio" value="1" name="size" id="radio-size-3" />
              <lable for="radio-size-3">M</lable>
            </div>
            <div class="radio-inline size">
              <input type="radio" value="1" name="size" id="radio-size-4" />
              <lable for="radio-size-4">XS</lable>
            </div>
            <div class="radio-inline size">
              <input type="radio" value="1" name="size" id="radio-size-5" />
              <lable for="radio-size-5">S</lable>
            </div>
          </div>
          <hr style="margin-right:100px;clear: both;" />
          <div class="cart_quantity_button row">
            <div class="col-lg-6 col-md-12 col-sm-6 col-6 mt-2">
              <span class="mr-3">Số lượng</span>
              <input type="number" min="1" v-model="quantity" />
            </div>
            <button
              class="btn btn-info col-lg-4 col-md-8 col-sm-6 col-5 mt-2"
              style="background:#26cdb3;"
              @click="addToCart()"
            >Thêm vào giỏ hàng</button>
          </div>
        </div>
      </div>
      <div class="backline">
        <h3>Sản phẩm liên quan</h3>
      </div>
      <div class="col-12 product-relative mt-3" v-if="!isLoader">
        <carousel :nav="false" :dots="true" :items="4" :autoplay="true" :key="keyCarousel">
          <router-link
            v-for="(product) in ListProductRelated"
            :key="product.id"
            tag="a"
            :to="{
              path: `/detail-product`,
              query: {
                id: product.id,
                small_category: product.smallCategory.id
              }
            }"
          >
            <img :src="product.image" alt="..." />
            <div class="text-center info-product-related">{{product.name}}</div>
            <div class="text-center info-product-related">{{product.saleCostRetail}} VNĐ</div>
          </router-link>
        </carousel>
      </div>
      <div class="backline mt-5">
        <h3>Thông tin sản phẩm</h3>
      </div>
      <div class="row mt-4 mb-4" id="details-product-info">
        <div class="col-12 col-sm-6 pt-details">
          <h3>Product Details</h3>
          <h4>Men's Premium T-Shirt</h4>
          <div class="dt-details-star">
            <span>
              <i class="fas fa-star"></i>
            </span>
            <span>
              <i class="fas fa-star"></i>
            </span>
            <span>
              <i class="fas fa-star"></i>
            </span>
            <span>
              <i class="fas fa-star"></i>
            </span>
            <span>
              <i class="fas fa-star"></i>
            </span>
          </div>
          <div
            class="pt-details_text"
          >This premium T-shirt is as close to perfect as can be. It's optimized for all types of print and will quickly become your favorite T-shirt. Soft, comfortable and durable, this is a definite must-own.</div>
          <ul>
            <li>Brand: Spreadshirt</li>
            <li>
              100% cotton (heather gray and heather ice blue are 95% cotton /5% viscose. Heather blue & charcoal gray are 80% cotton/20% polyester. Heather burgundy is 60% cotton/40% polyester. Heather oatmeal is 99% cotton/1% viscose) | Fabric
              Weight: 4.42 oz (lightweight)
            </li>
            <li>Wide range of sizes from S-5XL</li>
            <li>Fairly produced, certified and triple audited.</li>
            <li>Double stitched, reinforced seams at shoulder, sleeve, collar and waist</li>
            <li>Optimized for beautiful brilliance across all printing methods</li>
          </ul>
        </div>
        <div class="col-12 col-sm-6 pt-size">
          <h3>Product Size</h3>
          <h4>
            <i class="fas fa-ruler"></i>&nbsp; Slim fit
          </h4>
          <div class="pt-size_text mt-4">
            <b>Find the right size:</b>Compare thesemeasurements with a similar product you have at home. Place the product on a flat surface to get the best results.
          </div>
          <div class="pt-sizes__wrapper-img">
            <img
              src="https://image.spreadshirtmedia.com/image-server/v1/mp/productTypes/812/variants/size,width=190,height=190.jpg"
              alt
            />
            <div class="pt-sizes">
              <div class>A – Length in inch</div>
              <div class>B – Width in inch</div>
              <div class>C – Length in inch</div>
            </div>
            <table class="table table-striped mt-3">
              <tbody>
                <tr>
                  <td scope="col">Size</td>
                  <td scope="col">A (inch)</td>
                  <td scope="col">B (inch)</td>
                  <td scope="col">C (inch)</td>
                </tr>
                <tr>
                  <td scope="row">S</td>
                  <td>26.5</td>
                  <td>17.48</td>
                  <td>7.99</td>
                </tr>
                <tr>
                  <td scope="row">M</td>
                  <td>26.5</td>
                  <td>17.48</td>
                  <td>7.99</td>
                </tr>
                <tr>
                  <td scope="row">L</td>
                  <td>26.5</td>
                  <td>17.48</td>
                  <td>7.99</td>
                </tr>
                <tr>
                  <td scope="row">XL</td>
                  <td>26.5</td>
                  <td>17.48</td>
                  <td>7.99</td>
                </tr>
                <tr>
                  <td scope="row">S</td>
                  <td>26.5</td>
                  <td>17.48</td>
                  <td>7.99</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="backline">
        <h3>Phản hồi khách hàng</h3>
      </div>
      <div class="row mt-3">
        <div class="col-sm-12 col-md-6">
          <div
            class="fb-comments"
            data-href="http://127.0.0.1:5500/html/details-product.html"
            data-numposts="5"
            data-width="1000px"
          ></div>
        </div>
        <div class="col-sm-12 col-md-6" style="justify-content: center;
            display: flex;">
          <div
            class="fb-page"
            data-href="https://www.facebook.com/aothunit/"
            data-tabs="timeline"
            data-width="400"
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
    </template>
  </div>
</template>
<script>
import { getProductById } from "../../api/ProductAPI.js";
import { getListProductBySmallCategory } from "../../api/ProductAPI.js";
import LoaderApp from "../../component/Loader.vue";
import { loaderMixins } from "../../mixins/LoaderMixins.js";
import carousel from "vue-owl-carousel";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import { LocalStorageStore } from "../../mixins/LocalStorageStore.js";
export default {
  name: "detailsProduct",
  created() {
    this.getProductById();
    this.getListProductRelated();
  },
  mounted() {},
  components: {
    LoaderApp,
    carousel
  },
  mixins: [loaderMixins, LocalStorageStore],
  computed: {
    productId() {
      return this.$route.query.id;
    },
    ...mapState({
      cartStore: "cartStore"
    })
  },
  data() {
    return {
      categoryId: this.$route.query.small_category,
      dataProduct: {},
      imageProductDisplay: "",
      ListProductRelated: [],
      imageActive: 1,
      keyCarousel: 1,
      quantity: 1
    };
  },
  methods: {
    ...mapActions(["addProductToCart"]),

    getProductById() {
      this.isLoader = true;
      getProductById(this.productId)
        .then(response => {
          this.dataProduct = response;
          this.imageProductDisplay = response.image;
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => {
          this.isLoader = false;
        });
    },
    getListProductRelated() {
      this.isLoader = true;
      getListProductBySmallCategory(this.categoryId, 1)
        .then(response => {
          this.ListProductRelated = response;
          this.keyCarousel++;
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => {
          this.isLoader = false;
        });
    },
    changeImageDisplay(index, image) {
      this.imageActive = index;
      this.imageProductDisplay = image;
    },
    zoomImage(e) {
      let zoomer = e.currentTarget;
      let offsetX;
      let offsetY;
      e.offsetX ? (offsetX = e.offsetX) : (offsetX = e.touches[0].pageX);
      e.offsetY ? (offsetY = e.offsetY) : (offsetX = e.touches[0].pageX);
      let x = (offsetX / zoomer.offsetWidth) * 100;
      let y = (offsetY / zoomer.offsetHeight) * 100;
      zoomer.style.backgroundPosition = x + "% " + y + "%";
    },
    addToCart() {
      this.addProductToCart({
        product: this.dataProduct,
        quantity: this.quantity
      }).then(msg => {
        this.$toastr.s(msg, "Success!");
      });
    }
  },
  watch: {
    productId() {
      this.getProductById();
      this.getListProductRelated();
    }
  }
};
</script>

<style scoped>
.details-product-page {
  position: relative;
  margin: 30px 0;
  justify-content: center;
}

.details-product-page .dpp-image {
  position: relative;
  border: 1px solid #d7d9db;
}

.details-product-page .dpp-image img {
  width: 100%;
  height: 100%;
}

.bx-product-wrap {
  max-width: 400px;
  margin: 0 auto;
}

.bx-product-wrap .bx-viewport {
  width: 100%;
  overflow: hidden;
  position: relative;
  height: 100px;
  display: flex;
  justify-content: center;
}
.thumblist {
  padding: 0;
}
.thumblist li {
  float: left;
  list-style: none;
  position: relative;
  margin-right: 10px;
  width: 100px;
  height: 100px;
}

.active-details-product {
  border: 2px solid #dccc99;
}

.thumblist li a img {
  width: 100%;
  height: 100%;
}

.product-review h3 {
  font-family: HelveticaNeue, Arial, Helvetica, sans-serif;
  font-weight: 300;
  margin-top: 20px;
  color: #212224;
  line-height: 24px;
}

.product-review a {
  margin-bottom: 20px;
  text-decoration: none;
  color: #737880;
}

.details-product-info .price {
  font: 500 30px/30px HelveticaNeue, Arial, Helvetica, sans-serif;
  color: black;
  vertical-align: middle;
  float: left;
  margin-bottom: 20px;
  margin-right: 20px;
}

.details-product-info .availability {
  float: right;
  margin-right: 100px;
}

.details-product-info .availability span {
  color: #9198a1;
  margin-left: 5px;
}

.availability span span.in-stock {
  background-color: #26cdb3;
  display: inline-block;
  width: 11px;
  height: 11px;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  vertical-align: -1px;
}

.data-info {
  font: 13px "Open Sans", sans-serif;
  color: #212224;
  margin-bottom: 5px;
}

.data-info span {
  color: #9198a1;
  margin-left: 10px;
}

.data-info span a {
  color: #737880;
  transition: 0.2s;
  -moz-transition: 0.2s;
  -webkit-transition: 0.2s;
  -o-transition: 0.2s;
  outline: none !important;
  cursor: pointer;
  font-size: 13px;
}

.data-info span a:hover {
  color: #26cdb3;
}

.color-block a {
  width: 33px;
  height: 34px;
  border: 1px solid #828385;
  background: #161616;
  padding: 1px;
  background-clip: content-box;
  cursor: pointer;
  float: left;
  margin-bottom: 20px;
  /* -moz-user-select: -moz-none;
    -ms-user-select: none; 
     -webkit-user-select: none; 
     user-select: none;*/
}

.size-blocks {
  margin-top: 8px;
  margin-bottom: 6px;
}

.size-blocks .radio-inline {
  display: inline-block;
  margin-bottom: 0;
  vertical-align: middle;
  font-weight: normal;
  cursor: pointer;
}

.size-blocks .radio-inline lable {
  width: 33px;
  height: 34px;
  border: 1px solid #828385;
  background-clip: content-box;
  cursor: pointer;
  float: left;
  margin: 0 7px 7px 0;
  color: #71747a;
  font: 13px/32px HelveticaNeue, Arial, Helvetica, sans-serif;
  text-align: center;
  text-transform: uppercase;
  /* -moz-user-select: -moz-none;
    -ms-user-select: none;
    -webkit-user-select: none;
    user-select: none; */
}

.size-blocks .radio-inline input {
  display: none;
}

.size-blocks .radio-inline .active-radio {
  border-width: 2px;
}

.cart_quantity_button span {
  font-size: 1.5rem;
}
.cart_quantity_button input {
  width: 50px;
  height: 34px;
  font: 13px/32px HelveticaNeue, Arial, Helvetica, sans-serif;
  padding: 0;
  background-color: #fff;
  border: 1px solid #212224;
  box-shadow: 1px 1px 1px 0px #333;
  border-radius: 2px;
  text-indent: 0;
  text-align: center;
  text-decoration: none;
  color: #212224;
}

.cart_quantity_button input:hover {
  cursor: pointer;
}
.backline {
  position: relative;
  text-align: center;
}

.backline h3 {
  padding: 0 20px;
  background: #fff;
  display: inline;
}

.backline:after {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  background: #333;
  height: 2px;
  z-index: -1;
}

.pt-size,
.pt-details {
  font-size: 13px;
}

.pt-details h3,
.pt-size h3 {
  font-size: 1.5rem;
  font-weight: 600;
}

.pt-details h4,
.pt-size h4 {
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0;
}

.pt-details ul {
  margin-left: 1em;
  padding: 0;
}

.table tr:nth-child(1) {
  background-color: #f2f2f2 !important;
  color: #413231;
  font-weight: 600;
}

figure.zoom {
  background-position: 50% 50%;
  position: relative;
  width: 400px;
  overflow: hidden;
  cursor: zoom-in;
}

figure.zoom img:hover {
  opacity: 0;
}

figure.zoom img {
  transition: opacity 0.5s;
  display: block;
  width: 100%;
  background: #fff;
}
.product-relative .info-product-related {
  text-decoration: none;
  color: #333;
  font-size: 15px;
}
@media (max-width: 768px) {
  .product-relative .info-product-related {
    font-size: 13px;
  }
}
</style>