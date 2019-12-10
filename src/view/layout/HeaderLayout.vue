<template>
  <header>
    <div class="header">
      <div class="header-panel">
        <div class="container" style="padding:0">
          <ul class="help-login">
            <li class="call">
              <a href="tel:0948 856 496" target="_blank">
                <i class="fas fa-phone"></i>&nbsp;
                <span>Phone</span>
              </a>
            </li>&nbsp;
            <li class="instagram">
              <a href="https://www.instagram.com/ts.c99/?hl=vi" target="_blank">
                <i class="fab fa-instagram"></i>&nbsp;
                <span>Instagram</span>
              </a>
            </li>&nbsp;
            <li class="fb">
              <a href="https://www.facebook.com/cao.tran.9066" target="_blank">
                <i class="fab fa-facebook-f"></i>&nbsp;
                <span>Facebook</span>
              </a>
            </li>
            <li class="help">
              <router-link tag="a" to="/question" target="_blank">
                <i class="fas fa-question"></i>&nbsp;
                <span>Help</span>
              </router-link>
            </li>&nbsp;
            <li>
              <router-link tag="a" to="/login">
                <i class="fas fa-sign-in-alt"></i>&nbsp;
                <span>Login</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="shop-header container d-flex">
        <div class="menu-mobile">
          <i class="fas fa-bars"></i>
        </div>
        <router-link class="sh-logo" tag="a" to="/">
          <img src="../../assets/logo.png" alt height="75px" />
        </router-link>
        <ul class="menu-header-ul">
          <li>
            <router-link tag="a" to="/product" class="menu-content">
              <div class="title">Fruit</div>
              <div class="description">Marketplace Fruit</div>
            </router-link>
          </li>
          <li>
            <router-link class="menu-content" tag="a" to="question" target="_blank">
              <div class="title">Question</div>
              <div class="description">Can I help you ?</div>
            </router-link>
          </li>
        </ul>
        <div class="sh-search ml-auto d-flex">
          <div class="ip-search mr-2">
            <input
              class="search-input"
              type="text"
              v-model="searchValue"
              placeholder="Search"
              @keyup.enter="findProductByName()"
            />
          </div>
          <router-link tag="div" to="/user" class="ml-4 mr-4 sh-icon">
            <template v-if="userInfo">
              <span  id="name-user">{{userInfo.fullName}}</span>
            </template>
            <template v-else>
             <i class="far fa-smile"></i>
            </template>
          </router-link>
          <div class="ml-2 sh-icon sh-cart mr-1" data-toggle="modal" data-target="#ModelCart">
            <span v-if="totalItems>0">{{totalItems}}</span>
            <i class="fab fa-opencart"></i>
          </div>
        </div>
      </div>

      <div class="shop-search-mobile">
        <div class="ip-search pl-5 pr-5 pb-3">
          <input class="search-input" type="text" placeholder="Search" />
        </div>
      </div>
      <div class="header-menu-wrapper" style="z-index:10">
        <div class="container header-menu">
          <ul class="menu-lv-1">
            <li>
              <a href style="color: #00b2a5;">
                <i class="fas fa-bolt" style="font-size: 20px"></i>&nbsp;
                Fresh Fruit
              </a>
            </li>
            <li v-for="(bigCategory,index) in listBigCateogry" :key="index+Math.random()">
              <router-link
                tag="a"
                :to="{
                  name:'productPage',
                  query:{ big_category :bigCategory.id}
                 }"
              >{{bigCategory.name}}</router-link>
              <div class="header-menu-lv2">
                <div class="menu-lv2-list">
                  <ul class="menu-lv-2">
                    <template v-for="(smallCategory,index) in listSmallCateogry">
                      <template v-if="bigCategory.id==smallCategory.bigCategory.id">
                        <li :key="index+Math.random()" v-if="smallCategory">
                          <router-link
                            tag="a"
                            :to="{
                                name:'productPage',
                                query:{ small_category :smallCategory.id}
                              }"
                          >{{smallCategory.name}}</router-link>
                        </li>
                      </template>
                    </template>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <a href style="color: red;">
                <i class="fas fa-tags"></i> SALE
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="header-menu-mobile" id="header-menu-mobile">
      <div class="icon-close">
        <i class="fas fa-times"></i>
      </div>
      <div id="nav-content">
        <div class="hmm-content d-flex">
          <div class="hmm-header is-active">
            <div class="hmm-title">Clothes</div>
            <div class="hmm-description">Marketplace Fruits</div>
          </div>
          <div class="hmm-header">
            <div class="hmm-title">Question</div>
            <div class="hmm-description">Can I help you ?</div>
          </div>
        </div>
        <div class="hmm-nav d-flex">
          <ul>
            <li id="id-li1-lv1">
              <a href>
                <span>Clothing</span>
              </a>
            </li>
            <li id="id-li2-lv2">
              <a>
                <span data="id-li2-lv2">Man</span>
                <div class="hmm-menu-lv2 not-view">
                  <ul>
                    <li id="id-li1-lv2">
                      <a href>T-Shirt</a>
                    </li>
                    <li id="id-li2-lv2">
                      <a href>Jean</a>
                    </li>
                    <li id="id-li3-lv2">
                      <a href>Wallet</a>
                    </li>
                  </ul>
                </div>
              </a>
            </li>
            <li id="id-li3-lv1">
              <a>
                <span data="id-li3-lv1">Woman</span>
                <div class="hmm-menu-lv2 not-view">
                  <ul>
                    <li id="id-li4-lv2">
                      <a href>T-Shirt</a>
                    </li>
                    <li id="id-li5-lv2">
                      <a href>Jean</a>
                    </li>
                    <li id="id-li6-lv2">
                      <a href>Wallet</a>
                    </li>
                  </ul>
                </div>
              </a>
            </li>
            <li id="id-li4-lv1">
              <a>
                <span>Kids & Babies</span>
              </a>
            </li>
            <li id="id-li5-lv1">
              <a>
                <span>Home & Living</span>
              </a>
            </li>
            <li id="id-li6-lv1">
              <a>
                <span>Other</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="social-right-fixed">
      <a href="https://www.facebook.com/cao.tran.906" target="_blank">
        <img src="https://img.icons8.com/color/48/000000/facebook.png" />
      </a>
      <a href="https://www.instagram.com/ts.c99/?hl=vi" target="_blank">
        <img src="https://img.icons8.com/color/48/000000/instagram-new.png" />
      </a>
      <a href="tel:0948 856 496">
        <img src="https://img.icons8.com/color/48/000000/callback.png" />
      </a>
      <a href="https://www.facebook.com/messages/t" target="_blank">
        <img src="https://img.icons8.com/color/48/000000/facebook-messenger.png" />
      </a>
    </div>
  </header>
</template>
<script>
$(document).ready(function($) {
  responsiveMenu();
  $(".menu-mobile").click(function() {
    openNav();
  });
  $(".icon-close").click(function() {
    closeNav();
  });

  $(".header-menu-mobile .hmm-nav li >a >span").click(function(event) {
    let idMenuClick = $(this).attr("data");
    if (idMenuClick != "") {
      console.log(idMenuClick);
      $("#" + idMenuClick).addClass("is-active");
      if ($("#" + idMenuClick).next().length != 0) {
        $("#id-li2-lv2>.hmm-menu-lv2").slideToggle();
      }
      $(".header-menu-mobile .hmm-nav>ul>li").map((index, data) => {
        console.log(idMenuClick + " - " + data.id);
        if (idMenuClick != data.id && data.id != "") {
          $("#" + data.id).removeClass("is-active");
          if ($("#" + data.id).next().length != 0) {
            $("#" + data.id + " .hmm-menu-lv2").attr(
              "class",
              "hmm-menu-lv2 not-view"
            );
          }
        } else {
          $("#" + data.id).addClass("is-active");
          $("#" + data.id + " .hmm-menu-lv2").attr("class", "hmm-menu-lv2");
        }
      });
    }
  });
});

function responsiveMenu() {
  $(window).resize(function() {
    let widthScreen = $(window).width();
    if (widthScreen >= 1000) {
      $(".header-menu-mobile").css({
        display: "none"
      });
    }
  });
}

function openNav() {
  $(".header-menu-mobile").css({
    display: "flex",
    width: "350px"
  });

  $(".icon-close").removeClass("not-view");
  setTimeout(function() {
    $("#nav-content").css({
      display: "block"
    });
  }, 300);
  $("#body").css({
    background: "rgba(0,0,0,0.4)",
    opacity: 0.1
  });
}

function closeNav() {
  $(".header-menu-mobile").css({
    width: "0"
  });

  $(".icon-close").addClass("not-view");
  $("#nav-content").css({
    display: "none"
  });
  $("#body").css({
    background: "white",
    opacity: 1
  });
}

import { mapState, mapActions, mapGetters } from "vuex";
import { getAllBigCategoryAPI } from "../../api/CategoryAPI.js";
import { getAllSmallCategoryAPI } from "../../api/CategoryAPI.js";

export default {
  name: "headerPage",
  created() {
    this.getAllBigCategory();
    this.getAllSmallCategory();
  },
  components: {},
  computed: {
    ...mapState({
      cartStore: "cartStore"
    }),
    ...mapGetters({
      totalItems: "totalItems",
      userInfo: "userInfo"
    }),
    dataCart() {
      return getState("cartStore");
    }
  },
  data() {
    return {
      listBigCateogry: [],
      listSmallCateogry: [],
      checkMenu: false,
      searchValue: ""
    };
  },
  methods: {
    getAllBigCategory() {
      getAllBigCategoryAPI()
        .then(response => {
          this.listBigCateogry = response;
        })
        .catch(err => console.log(err));
    },
    getAllSmallCategory() {
      getAllSmallCategoryAPI()
        .then(response => {
          this.listSmallCateogry = response;
        })
        .catch(err => console.log(err));
    },
    findProductByName() {
      this.$router.push({
        name: "productPage",
        query: {
          search: this.searchValue
        }
      });
    }
  }
};
</script>
<style scoped>
.sh-cart > span {
  position: absolute;
  content: "";
  background: #333;
  width: auto;
  min-width: 19px;
  height: 25px;
  top: -18px;
  right: -5px;
  color: aqua;
  /* border-radius: 4px; */
  font-size: 1rem;
  padding: 0px 3px 0px 5px;
}
.sh-cart > span:after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border: 9px solid transparent;
  border-top: 6px solid #333;
  top: 25px;
  left: 0px;
}
#name-user{
  font-size: 1.25rem
}
@media (max-width: 600px) {
 
  #name-user{
    font-size: 1rem
  }
}
</style>