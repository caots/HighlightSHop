import Vue from 'vue'
import Vuex from 'vuex'
import {
  getToken,
  setToken,
  removeToken
} from '../util/auth.js'

import {
  loginAPI,
  getProfileUserAPI
} from '../api/UserAPI.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartStore: {
      cart: []
    },
    userStore: {
      token: getToken(),
      user: null
    }
  },
  getters: { // lấy state ra vào có thể thao tác trên nó (như filter) nhưng k làm thay đổi state

    //================== Cart =====================
    cartTotal(state) {
      return state.cartStore.cart.reduce((total, item) => {
        let {
          saleCostRetail,
          quantity
        } = item
        return total + saleCostRetail * quantity
      }, 0)
    },
    totalItems(state) {
      return state.cartStore.cart.reduce((total, item) => {
        let {
          quantity
        } = item
        if (quantity > 0) {
          return total + quantity;
        }
      }, 0)
    },

    //================== User =====================
    token(state) {
      return state.userStore.token;

    },
    userInfo(state) {
      return state.userStore.user
    }
  },
  mutations: { // nơi duy nhất thay đổi state khác với actions là mutations zử lý đồng bộ

    //================== Cart =====================
    // add product to cart
    pushProductToCart(state, payload) {
      state.cartStore.cart.push({
        ...payload.product, // trải hết các thuộc tính product để quan tity cùng cấp 
        quantity: payload.quantity ? parseInt(payload.quantity) : 1
      })
    },
    // Them phan tu vao gio 
    incrementQuantity(state, payload) {
      const product = state.cartStore.cart.find(item => item.id == payload.id)
      product.quantity = parseInt(payload.quantity) + parseInt(product.quantity)
      if (product.quantity <= 0) {
        for (let index in state.cartStore.cart) {
          if (state.cartStore.cart[index].id === product.id) {
            state.cartStore.cart.splice(index, 1)
            break
          }
        }
      }
    },
    removeItem(state, id) {
      for (let index in state.cartStore.cart) {
        if (state.cartStore.cart[index].id === id) {
          state.cartStore.cart.splice(index, 1)
          break
        }
      }
    },

    //================== User =====================
    SET_TOKEN(state, payload) {
      state.userStore.token = payload
    },
    REMOVE_TOKEN(state) {
      state.userStore.token = null
      state.userStore.user = null
    },
    SET_USER(state, payload) {
      state.userStore.user = payload
    }
  },
  actions: {
    //================== Cart =====================
    addProductToCart({
      commit,
      state
    }, payload) {
      return new Promise((resolve, reject) => {
        const {
          product
        } = payload
        const cartItem = state.cartStore.cart.find(item => item.id === product.id)
        const quantity = payload.quantity ? parseInt(payload.quantity) : 1
        if (cartItem) {
          commit('incrementQuantity', {
            id: product.id,
            quantity
          })
        } else {
          commit('pushProductToCart', {
            product,
            quantity
          })
        }
        resolve('Thêm vào giỏ hàng thành công!')
      })
    },
    removeCartItem({
      commit
    }, id) {
      commit('removeItem', id)
    },
    //================== User =====================
    getUser({
      commit
    }) {
      return new Promise((resolve, reject) => {
        getProfileUserAPI()
          .then(response => {
            commit('SET_USER', response);
            resolve(response)
          })
          .catch(err => {
            removeToken()
            reject(err)
          })
      })
    },
    loginUser({
      commit
    }, payload) {
      return new Promise((resolve, reject) => {
        loginAPI(payload.loginForm)
          .then(response => {
            commit('SET_TOKEN', response)
            setToken(response, payload.remember)
            resolve(response)
          })
          .catch(err => {
            reject(err)
          })
      })

    },
    signOut({
      commit
    }) {
      return new Promise((resolve, reject) => {
        commit('REMOVE_TOKEN')
        removeToken()
      })
    }
  },
})
