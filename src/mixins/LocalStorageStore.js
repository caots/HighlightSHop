import {
  saveState,
  getState
} from "../util/auth.js";

export const LocalStorageStore = {
  created() {
    let datas = getState("cartStore");
    if (this.$store.state.cartStore.cart.length === 0 && datas !== undefined) {
      datas.cart.forEach(product => {
        this.$store.dispatch('addProductToCart', {
          product,
          quantity: product.quantity
        })
      });
    }
    this.$store.watch(
      state => state.cartStore,
      state => {
        saveState("cartStore", state);
      }, {
        deep: true //add this if u need to watch object properties change etc.
      }
    );
  },
}
