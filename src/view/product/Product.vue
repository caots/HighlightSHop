<template>
  <div class="productpage container-fluid mt-2">
    <loader-app v-show="isLoader"></loader-app>
    <template v-if="!isLoader">
      <section class="banner">
        <div class="container-fluid" style="padding:0">
          <div class="row">
            <div class="col-12" style="padding:0">
              <div class="banner-wp">
                <div class="banner-text">
                  <h4>Trang Sản Phẩm</h4>
                  <a href="#">Trang chủ</a>
                  <span>/ Sản phẩm</span>
                </div>
                <div class="banner-bg">
                  <img src="../../assets/bannercheckoutcart.jpg" alt />
                </div>
                <span class="bor bor1"></span>
                <span class="bor bor2"></span>
                <span class="bor bor3"></span>
                <span class="bor bor4"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="container quick-filter">
        <div class="quick-filter-items">
          <a href v-for="(tag,index) in listTag" :key="index+Math.random()">{{tag.name}}</a>
        </div>
      </div>
      <div class="container">
        <section class="procon row">
          <div class="procon-header col-12 d-flex">
            <h2 style="color: #00b2a5;">Hoa quả sạch</h2>
          </div>
          <div class="procon-sidebar col-12 col-md-4 col-lg-3">
            <div class="procon-sidebar-filter">
              <div class="procon-filter-panel" id="filter-product">
                <div
                  class="filter-panel-head d-flex"
                  data="filter-product"
                  @click="toggleMenuFilgter(1)"
                >
                  <span>Sản phẩm</span>
                  <span class="ml-auto icon-filter" id="icon-filter-1" style="font-size: 20px;">
                    <i class="fas fa-chevron-down" style="font-size: 1rem;"></i>
                  </span>
                </div>
                <div class="filter-panel-body" id="filter-panel-body-1">
                  <div class="filter-panel-list">
                    <ul class="list-lv1">
                      <li
                        v-for="(bigCategory,index) in listCategory.bigCategory"
                        :key="index +Math.random()"
                      >
                        <router-link
                          tag="a"
                          :to="{
                              name:'productPage',
                              query:{ big_category :bigCategory.id}
                          }"
                        >- {{bigCategory.name}}</router-link>
                        <ul class="list-lv2">
                          <template v-for="(smallCategory,index) in listCategory.smallCategory">
                            <template v-if="bigCategory.id==smallCategory.bigCategory.id">
                              <li :key="index+Math.random()" v-if="smallCategory">
                                <router-link
                                  tag="a"
                                  :to="{
                                    name:'productPage',
                                    query:{ small_category :smallCategory.id}
                                  }"
                                >+ {{smallCategory.name}}</router-link>
                              </li>
                            </template>
                          </template>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- <div class="procon-filter-panel" id="filter-category">
                <div
                  class="filter-panel-head d-flex"
                  data="filter-category"
                  @click="toggleMenuFilgter(2)"
                >
                  <span>Category</span>
                  <span class="ml-auto icon-filter" id="icon-filter-2" style="font-size: 20px;">
                    <i class="fas fa-chevron-down" style="font-size: 1rem;"></i>
                  </span>
                </div>
                <div class="filter-panel-body" id="filter-panel-body-2">
                  <div class="filter-panel-list">
                    <ul class="list-lv1">
                      <li>
                        <a href>Men</a>
                      </li>
                      <li>
                        <a href>Woman</a>
                      </li>
                      <li>
                        <a href>Kids & Babies</a>
                      </li>
                      <li>
                        <a href>Home & Living</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>-->
              <div class="procon-filter-panel" id="filter-price">
                <div
                  class="filter-panel-head d-flex"
                  data="filter-price"
                  @click="toggleMenuFilgter(3)"
                >
                  <span>Giá tiền</span>
                  <span class="ml-auto icon-filter" id="icon-filter-3" style="font-size: 20px;">
                    <i class="fas fa-chevron-down" style="font-size: 1rem;"></i>
                  </span>
                </div>
                <div class="filter-panel-body" id="filter-panel-body-3">
                  <div class="filter-panel-select mt-3">
                    <div id="price-group-E1" class="select__item">
                      <div class="select-label" id="select-label-price-1" @click="filterPrice(1)">$</div>
                    </div>
                    <div id="price-group-E2" class="select__item">
                      <div class="select-label" id="select-label-price-2" @click="filterPrice(2)">$$</div>
                    </div>
                    <div id="price-group-E3" class="select__item">
                      <div
                        class="select-label"
                        id="select-label-price-3"
                        @click="filterPrice(3)"
                      >$$$</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="procon-filter-panel" id="filter-size">
                <div
                  class="filter-panel-head d-flex"
                  data="filter-size"
                  @click="toggleMenuFilgter(4)"
                >
                  <span>Size</span>
                  <span class="ml-auto icon-filter" id="icon-filter-4" style="font-size: 20px;">
                    <i class="fas fa-chevron-down" style="font-size: 1rem;"></i>
                  </span>
                </div>
                <div class="filter-panel-body" id="filter-panel-body-4">
                  <div class="filter-panel-select mt-3">
                    <div id="price-group-E1" class="select__item">
                      <div class="select-label">S</div>
                    </div>
                    <div id="price-group-E2" class="select__item">
                      <div class="select-label">M</div>
                    </div>
                    <div id="price-group-E3" class="select__item">
                      <div class="select-label">L</div>
                    </div>
                    <div id="price-group-E3" class="select__item">
                      <div class="select-label">XL</div>
                    </div>
                    <div id="price-group-E3" class="select__item">
                      <div class="select-label">XL</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="button-filter">
                <button class="btn btn-success">Lọc sản phẩm</button>
              </div>
            </div>
          </div>
          <div class="procon-content col-12 col-md-8 col-lg-9">
            <div class="row show-list-product">
              <div
                class="col-6 col-sm-6 col-md-6 col-lg-4"
                v-for="(product, index) in listProduct"
                :key="index+Math.random()"
                style="padding:0"
              >
                <router-link
                  tag="a"
                  :to="{
                name:'detailsProductPage',
                query:{
                  id:product.id,
                  small_category: product.smallCategory.id,
                }
              }"
                  class="item-product text-center"
                >
                  <div
                    class="article-favorite"
                    style="background: #00b2a5;color: #fff"
                    v-if="product.saleCostRetail!=product.originCostRetail"
                  >
                    <span>{{-saleOf(product.saleCostRetail,product.originCostRetail)}} %</span>
                  </div>
                  <div class="wrapper-image">
                    <img :src="product.image" alt />
                  </div>
                  <div class="article-product">{{product.name}}</div>
                  <div class="article-name">{{product.productInfo?product.productInfo: "Chi tiết" }}</div>
                  <div class="price-product">
                    <template v-if="product.saleCostRetail!=product.originCostRetail">
                      <strike>
                        <span style="color: #333;">{{product.originCostRetail}}</span>
                      </strike>
                      <span>{{product.saleCostRetail}} VNĐ</span>
                    </template>
                    <template v-else>
                      <span>{{product.originCostRetail}} VNĐ</span>
                    </template>
                  </div>
                  <button
                    class="btn btn-outline-info mt-3"
                    @click.prevent="addCart(product)"
                  >Thêm vào giỏ hàng</button>
                </router-link>
              </div>
            </div>
            <pagination-app :currentPage.sync="currentPage" :RecordNumber="pageNumber"></pagination-app>
            <div class="col-12 related-tag mt-5">
              <h2>Customers also looked for</h2>
              <div class="related-tag-items">
                <a href v-for="(tag,index) in listTag" :key="index+Math.random()">{{tag.name}}</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </template>
  </div>
</template>
<script>
import $ from "jquery";
import { eventBus } from "../../main.js";
import PaginationApp from "../../component/Pagination.vue";
import {
  getAllProductByPage,
  getAllProduct,
  getAllSaleProductByPage,
  getAllHotProductByPage,
  getListProductBySmallCategory,
  getListProductByBigCategory,
  geSizeProducyBySmallCategory,
  geSizeProducyByBigCategory,
  getListProductBySearch,
  geSizeProducyBySearch
} from "../../api/ProductAPI.js";
import { loaderMixins } from "../../mixins/LoaderMixins.js";
import LoaderApp from "../../component/Loader.vue";
import RecordNumber from "../../mixins/RecordNumber.vue";
import { mapState, mapActions } from "vuex";
import { LocalStorageStore } from "../../mixins/LocalStorageStore.js";
import { findAllTagAPI } from "../../api/TagAPI.js";
import {
  getAllBigCategoryAPI,
  getAllSmallCategoryAPI
} from "../../api/CategoryAPI.js";

export default {
  name: "product",
  components: {
    LoaderApp,
    PaginationApp
  },
  created() {
    eventBus.$emit("statusLoader1", this.isLoader);
    this.getAllProductByCategory();
    this.getAllTag();
    this.getAllBigCategory();
    this.getAllSmallCategory();
  },
  mixins: [loaderMixins, RecordNumber, LocalStorageStore],
  computed: {
    ...mapState(["cartStore"])
  },
  data() {
    return {
      listProduct: [],
      currentPage: 1,
      toggleCheck: false,
      listTag: [],
      listCategory: {
        bigCategory: [],
        smallCategory: []
      }
    };
  },
  methods: {
    getAllProductByCategory() {
      let path = this.$route.fullPath;
      if (path.indexOf("big_category") > 0) {
        this.getAllProductByBigCategory(this.$route.query.big_category);
      }
      if (path.indexOf("small_category") > 0) {
        this.getAllProductBySmallCategory(this.$route.query.small_category);
      }
      if (path.indexOf("search") > 0) {
        this.getAllProductBySearch(this.$route.query.search);
      }
      if (path.indexOf("hot") > 0) {
        this.getAllHotProductByPage();
      }
      if (path.indexOf("sale") > 0) {
        this.getAllSaleProductByPage();
      }
      if (path === "/product") {
        this.getAllProductPage();
      }
    },
    getAllProductPage() {
      this.isLoader = true;
      getAllProductByPage(this.currentPage)
        .then(response => {
          this.listProduct = response;
          this.getAllRecordProduct();
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => (this.isLoader = false));
    },
    getAllHotProductByPage() {
      this.isLoader = true;
      getAllHotProductByPage(this.currentPage)
        .then(response => {
          this.listProduct = response;
          this.getAllRecordProduct();
        })
        .catch(err => console.log(err))
        .finally(() => (this.isLoader = false));
    },
    getAllSaleProductByPage() {
      this.isLoader = true;
      getAllSaleProductByPage(this.currentPage)
        .then(response => {
          this.listProduct = response;
          this.getAllRecordProduct();
        })
        .catch(err => console.log(err))
        .finally(() => (this.isLoader = false));
    },
    async getAllProduct() {
      this.isLoader = true;
      await getAllProduct()
        .then(response => {
          this.listProduct = response;
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => (this.isLoader = false));
    },
    getAllProductByBigCategory(bigCategoryId) {
      this.isLoader = true;
      getListProductByBigCategory(bigCategoryId, this.currentPage)
        .then(response => {
          this.listProduct = response;
          this.geSizeProducyByBigCategory(bigCategoryId);
        })
        .catch(err => console.log(err))
        .finally(() => (this.isLoader = false));
    },
    getAllProductBySmallCategory(smallCategoryId) {
      this.isLoader = true;
      getListProductBySmallCategory(smallCategoryId, this.currentPage)
        .then(response => {
          this.listProduct = response;
          this.getSizeProductBySmallCategory(smallCategoryId);
        })
        .catch(err => console.log(err))
        .finally(() => (this.isLoader = false));
    },
    getAllProductBySearch(text) {
      this.isLoader = true;
      getListProductBySearch(text, this.currentPage)
        .then(response => {
          console.log(response);
          this.listProduct = response;
          this.getSizeProductBySearch();
        })
        .catch(err => console.log(err))
        .finally(() => (this.isLoader = false));
    },
    getSizeProductBySmallCategory(smallCategoryId) {
      this.isLoader = true;
      geSizeProducyBySmallCategory(smallCategoryId)
        .then(response => {
          this.pageNumber = response;
        })
        .catch(err => console.log(err))
        .finally(() => (this.isLoader = false));
    },
    getSizeProductByBigCategory(bigCategoryId) {
      this.isLoader = true;
      geSizeProducyByBigCategory(bigCategoryId)
        .then(response => {
          this.pageNumber = response;
        })
        .catch(err => console.log(err))
        .finally(() => (this.isLoader = false));
    },
    getSizeProductBySearch() {
      this.isLoader = true;
      geSizeProducyBySearch()
        .then(response => {
          this.pageNumber = response;
        })
        .catch(err => console.log(err))
        .finally(() => (this.isLoader = false));
    },
    saleOf(sale, orgin) {
      let result = 100 - (sale / orgin) * 100;
      return this.mathRound(result);
    },
    mathRound(x) {
      let n = parseFloat(x);
      let rs = Math.round(n * 100) / 100;
      return rs;
    },
    ...mapActions(["addProductToCart"]),
    addCart(product) {
      this.addProductToCart({ product }).then(response => {
        this.$toastr.s(response, "Success!");
      });
    },
    toggleMenuFilgter(index) {
      this.toggleCheck = !this.toggleCheck;
      if (this.toggleCheck == true) {
        $("#filter-panel-body-" + index).slideDown();
        $("#icon-filter-" + index + ">i").attr("class", "fas fa-chevron-down");
      } else {
        $("#filter-panel-body-" + index).slideUp();
        $("#icon-filter-" + index + ">i").attr("class", "fas fa-plus");
      }
    },
    getAllTag() {
      this.isLoader = true;
      findAllTagAPI()
        .then(response => {
          this.listTag = response;
        })
        .catch(err => console.log(err))
        .finally(() => (this.isLoader = false));
    },
    getAllBigCategory() {
      getAllBigCategoryAPI().then(response => {
        this.listCategory.bigCategory = response;
      });
    },
    getAllSmallCategory() {
      getAllSmallCategoryAPI().then(response => {
        this.listCategory.smallCategory = response;
      });
    },
    filterPrice(index) {
      for (let i = 1; i <= 3; i++) {
        if (i === index) {
          $("#select-label-price-" + index).attr(
            "class",
            "active-filter select-label"
          );
        } else {
          $("#select-label-price-" + i).attr("class", "select-label");
        }
      }
      switch (index) {
        case 1: {
          this.filterPriceProduct(0, 100000);
          break;
        }
        case 2: {
          this.filterPriceProduct(100000, 1000000);
          break;
        }
        case 3: {
          this.filterPriceProduct(1000000, 2000000);
          break;
        }
      }
    },
    filterPriceProduct(startPrice, endPrice) {
      let arrItemRemove = [];
      this.getAllProduct().then(() => {
        for (let index in this.listProduct) {
          if (
            this.listProduct[index].saleCostRetail < parseInt(startPrice) ||
            this.listProduct[index].saleCostRetail > parseInt(endPrice)
          ) {
            arrItemRemove.push(this.listProduct[index]);
          }
        }
        this.listProduct = this.arrayRemove(this.listProduct, arrItemRemove);
        this.pageNumber = 1;
      });
    },
    arrayRemove(arrDad, arrChild) {
      let arrRs = [];
      arrDad.map(ele => {
        let rs = arrChild.find(item => item.id === ele.id);
        if (!rs) arrRs.push(ele);
      });
      return arrRs;
    }
  },
  watch: {
    currentPage() {
      this.getAllProductByCategory();
    },
    isLoader() {
      eventBus.$emit("statusLoader1", this.isLoader);
    },
    listProduct() {}
  }
};
</script>
<style >
.productpage {
  width: 100%;
  font-weight: 400;
  line-height: 1.5;
  color: #333;
  letter-spacing: 0.02rem;
}

.productpage .container {
  max-width: 1600px;
  padding-right: 0.75rem;
  padding-left: 0.75rem;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
}

.banner-wp {
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.banner-wp .banner-text {
  position: absolute;
  top: 35%;
  left: 20px;
  z-index: 11;
}

.banner-wp .banner-text h4 {
  color: #fff;
  text-transform: uppercase;
}

.banner-wp .banner-text a,
.banner-wp .banner-text span {
  text-decoration: none;
  color: #fff;
}

.banner-wp .banner-bg {
  width: 100%;
  height: 100%;
}

.banner-wp .banner-bg img {
  width: 100%;
  height: 100%;
  transition: 0.5s;
}

.banner-wp:hover .banner-bg img {
  transform: scale(1.1);
}

.banner-wp span.bor {
  background-color: #fff;
  position: absolute;
  margin: auto;
  display: block;
  transition: 1s;
}

.banner-wp span.bor.bor1 {
  top: 10px;
  width: 0;
  height: 1px;
  left: 50%;
}

.banner-wp:hover span.bor.bor1 {
  width: 100%;
  transform-origin: center;
  left: 0;
}

.banner-wp span.bor.bor2 {
  left: 10px;
  width: 1px;
  height: 0px;
  top: 50%;
}

.banner-wp:hover span.bor.bor2 {
  height: 100%;
  transform-origin: center;
  top: 0;
}

.banner-wp span.bor.bor3 {
  right: 10px;
  width: 1px;
  height: 0px;
  bottom: 50%;
}

.banner-wp:hover span.bor.bor3 {
  height: 100%;
  transform-origin: center;
  bottom: 0;
}

.banner-wp span.bor.bor4 {
  bottom: 10px;
  width: 0;
  height: 1px;
  right: 50%;
}

.banner-wp:hover span.bor.bor4 {
  width: 100%;
  transform-origin: center;
  right: 0;
}

.productpage .bread-padding {
  padding-top: 19px;
  padding-bottom: 16px;
}

.productpage .bread-padding div {
  padding-right: 15px;
}

.quick-filter {
  margin: 1.5em auto;
}

.quick-filter .quick-filter-items {
  overflow: auto;
  white-space: nowrap;
}

.quick-filter .quick-filter-items a {
  border: 1px solid #666;
  border-radius: 2px;
  box-sizing: content-box;
  color: #666;
  display: inline-block;
  padding: 0.4rem;
  cursor: pointer;
  text-decoration: none;
  margin-right: 0.4rem;
}

.quick-filter .quick-filter-items a:hover {
  border-color: #00b2a5;
  color: #009e94;
}

.procon-header {
  flex-basis: 100%;
}

.procon .procon-sidebar .procon-filter-panel {
  border-bottom: 1px solid #e5e5e5;
  margin: 0 0 1em;
  padding-bottom: 1em;
  position: relative;
  width: 100%;
}

.procon-filter-panel .filter-panel-head {
  cursor: pointer;
  font-weight: 700;
  line-height: 1.5rem;
  margin: 0.25em 0;
  position: relative;
  font-size: 1.25rem;
}

.filter-panel-body .filter-panel-list .list-lv1 {
  list-style-type: none;
  padding: 0;
}

.filter-panel-body .filter-panel-list .list-lv1 > li {
  color: #333;
  padding: 10px 0 0 0;
  cursor: pointer;
}

.filter-panel-body .filter-panel-list .list-lv1 > li > a,
.filter-panel-list .list-lv2 > li > a {
  color: #333;
  text-decoration: none;
  font-size: 1rem;
}

.filter-panel-body .filter-panel-list .list-lv1 > li a:hover {
  color: #00b2a5;
  color: #00b2a5;
}

.filter-panel-list .list-lv2 {
  list-style-type: none;
  padding-left: 5%;
}

.filter-panel-list .list-lv2 li {
  padding: 5px;
}

.filter-panel-select .select__item {
  width: 28%;
  display: inline-block;
  margin-bottom: 1rem;
  min-width: 2em;
  padding: 0;
  text-align: center;
  vertical-align: middle;
}

.filter-panel-select .select__item .select-label {
  border: 1px solid #666;
  border-radius: 2px;
  box-sizing: border-box;
  color: #666;
  cursor: pointer;
  display: block;
  line-height: 2.5rem;
  padding: 0 0.75rem;
  margin: 1px 9px 1px 0;
  text-transform: capitalize;
}

.active-filter {
  border-color: #00b2a5 !important;
  color: #00b2a5 !important;
}

.filter-panel-select .select__item .select-label:hover {
  border-color: #00b2a5;
  color: #00b2a5;
}

.button-filter button {
  background-color: #00b2a5;
  color: #fff;
  width: 100%;
}

.button-filter button:hover {
  background-color: #009e94;
}
.procon-content .show-list-product .item-product {
  position: relative;
  display: block;
  margin: 0.375rem 0.375rem 10px 0.375rem;
  border-width: 0.375rem;
  border-style: solid;
  border-color: transparent;
  cursor: pointer;
  transition: all 0.2s;
  box-sizing: border-box;
  text-decoration: none;
  color: #333;
  box-shadow: 0px 2px 7px 0px #2427272b;
  padding: 10px;
}

.procon-content .show-list-product .item-product:hover {
  box-shadow: 0 0 0 1px #00b2a5c4;
}

.show-list-product .item-product .article-favorite {
  position: absolute;
  top: 2px;
  right: 5px;
  padding: 0.5rem;
  text-align: center;
  color: #333;
  cursor: pointer;
  z-index: 1;
  border-radius: 50%;
  background: #fff;
}

.show-list-product .col-md-4 {
  padding: 0;
}

.show-list-product .item-product .article-favorite:hover {
  color: #009e94;
}

.show-list-product .item-product .wrapper-image {
  width: 100%;
  height: 280px;
  overflow: hidden;
}

.show-list-product .item-product .wrapper-image img {
  width: 100%;
  height: 100%;
  transition: 0.3s;
}

.show-list-product .item-product:hover .wrapper-image img {
  transform: scale(1.05);
}

.show-list-product .item-product .article-product,
.show-list-product .item-product .article-name,
.show-list-product .item-product .price-product {
  padding-top: 0.125rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.show-list-product .item-product .article-product {
  font-size: 1.25rem;
  font-weight: 600;
}

.show-list-product .item-product .price-product {
  color: #009e94;
  font-size: 1.25rem;
}

.related-tag {
  padding: 16px 0;
}

.related-tag h2 {
  font-size: 1.375rem;
  font-weight: 700;
  line-height: 1.3;
  color: #333;
  margin-bottom: 0.46em;
}

.related-tag .related-tag-items a {
  border-radius: 2px;
  box-sizing: border-box;
  color: #666;
  background-color: #f2f2f2;
  cursor: pointer;
  line-height: 2.5rem;
  padding: 10px;
  text-transform: capitalize;
  text-decoration: none;
  margin-right: 0.4rem;
}

.related-tag .related-tag-items a:hover {
  background-color: #ccc;
}

@media (min-width: 768px) {
  .container {
    width: 94%;
  }
}

@media (max-width: 991px) {
  .container {
    width: 94%;
  }
  .show-list-product .item-product .article-favorite {
    font-size: 10px;
  }
  .show-list-product .item-product .article-product {
    font-size: 1rem;
  }
  .show-list-product .item-product .article-name {
    font-size: 0.75rem;
  }
  .show-list-product .col-md-4 {
    padding: 0;
  }
  .show-list-product .item-product .wrapper-image {
    height: 200px;
  }
  .show-list-product .item-product .price-product {
    font-size: 1.15rem;
  }
}

@media (max-width: 768px) {
  .show-list-product .item-product .article-favorite {
    font-size: 16px;
  }
  .procon-content {
    margin-top: 30px;
  }
  .show-list-product .item-product .wrapper-image {
    height: 280px;
  }
  .banner-wp .banner-text h4 {
    font-size: 15px;
  }

  .banner-wp .banner-text a,
  .banner-wp .banner-text span {
    font-size: 13px;
  }
}

@media (max-width: 576px) {
  .show-list-product .item-product .wrapper-image {
    height: 200px;
  }
  .show-list-product .item-product .price-product {
    font-size: 1rem;
  }
}
</style>