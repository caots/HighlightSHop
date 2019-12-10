<template>
  <div
    class="modal fade"
    id="ModelCart"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Shopping Cart</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div class="modal-body">
          <div class="container">
            <div class="row">
              <div class="col-12 ml-auto">
                <div class="col-12 shopping-cart">
                  <div class="basket_content">
                    <div
                      class="basket_product_item row"
                      v-for="(item,index) in cartStore.cart"
                      :key="index+Math.random()"
                    >
                      <template v-if="item.quantity > 0">
                        <div class="product-image-wrap col-5">
                          <img :src="item.image" alt />
                        </div>
                        <div class="product-info-wrap col-7">
                          <a href class="product-name">{{item.name}}</a>
                          <div>Black</div>
                          <div>L</div>
                          <div class="product-quantity">
                            <div
                              class="icon-decrease button-icon"
                              @click="updateNumberProductCart(-1,item)"
                            >-</div>
                            <input
                              type="text"
                              class="input_product"
                              disabled
                              :value="item.quantity"
                            />
                            <div
                              class="icon-increase button-icon"
                              @click="updateNumberProductCart(1,item)"
                            >+</div>
                          </div>
                          <div class="price-cart">
                            <span :content="item.saleCostRetail">{{item.saleCostRetail}}</span>
                            <span content="VND">VNĐ</span>
                          </div>
                        </div>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-label="Close"
                          style="position: absolute;right: 15px;"
                          @click="deleteItemCart(item.id)"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </template>
                    </div>
                  </div>
                </div>
                <div class="basket_footer">
                  <div class="total-price d-flex">
                    <div style="font-size: 1rem;">Total Price</div>
                    <div class="basket_total_price ml-auto">
                      <span>{{cartTotal}}</span>
                    </div>
                  </div>
                </div>
                <div class="basket_button">
                  <button class="btn btn-info btn-checkout">Checkout</button>
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
import { mapState, mapActions, mapGetters } from "vuex";
import { LocalStorageStore } from "../mixins/LocalStorageStore.js";
import { getState } from "../util/auth.js";

$("#ModelCart").on("show.bs.modal", function(event) {
  var button = $(event.relatedTarget); // Button that triggered the modal
  var recipient = button.data("whatever"); // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this);
  modal.find(".modal-title").text("Shopping Cart");
  modal.find(".modal-body input").val(recipient);
});
export default {
  name: "cart",
  mixins: [LocalStorageStore],
  computed: {
    ...mapState({
      cartStore: "cartStore"
    }),
    ...mapGetters(["cartTotal"]),
    dataCart() {
      return getState("cartStore");
    }
  },
  methods: {
    ...mapActions(["addProductToCart", "removeCartItem"]),
    updateNumberProductCart(quantity, product) {
      let arg = {
        product,
        quantity
      };
      this.addProductToCart(arg)
        .then(result => {})
        .catch(err => {});
    },
    deleteItemCart(id) {
      this.removeCartItem(id)
        .then(result => {})
        .catch(err => {});
    }
  }
};
</script>
<style scoped>
.shopping-cart h2 {
  font-size: 1.375rem;
  background-color: #fff;
  border-top: none;
  box-shadow: 0 3px 10px -3px rgba(0, 0, 0, 0.1);
  z-index: 2;
  padding-bottom: 10px;
}
.basket_content {
  position: relative;
  max-height: 40vh;
  min-height: 24em;
  overflow-x: hidden;
  overflow-y: auto;
}
.basket_product_item {
  margin-bottom: 0.75rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid #d9d9d9;
}
.basket_product_item .product-image-wrap img {
  width: 100%;
  height: 100%;
}
.basket_product_item .product-info-wrap .product-name {
  display: inline-block;
  margin-bottom: 0.5rem;
  color: #00b2a5;
  line-height: 1.3;
  white-space: normal;
  text-decoration: none;
  cursor: pointer;
}
.product-quantity {
  display: flex;
  margin: 0.5rem 0;
  width: 50%;
}
.product-info-wrap .product-quantity .button-icon {
  border: 1px solid #ccc;
  background-color: #f2f2f2;
  color: #404040;
  padding: 0 10px;
  width: 2rem;
  cursor: pointer;
}
.input_product {
  width: calc(100% - 4rem);
  text-align: center;
}
.total-price {
  justify-content: space-between;
}
.basket_footer .basket_button {
  padding: 15px;
}
.basket_footer .basket_total_price {
  font-size: 1.375rem;
  font-weight: 600;
}

.basket_button .btn-checkout {
  margin: 1rem 0 0.5rem 0;
  width: 100%;
  background: #00b2a5 !important;
}
</style>