import router from '../routes/router.js'
import store from '../store/store.js'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import {
  getToken
} from '../util/auth.js'

const whiteList = [
  '/', '/login', '/product', '/question','/detail-product'
];

const urlWeb = [
  '/', '/login', '/product','/product/', '/question','/user','/detail-product'
];

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (getToken()) {
    if (to.path == 'login') {
      next('/')
    } else {
      store.dispatch('getUser')
        .then(response => {
          next();
          NProgress.done()
        })
        .catch(() => {
          next('/login');
        })
    }
  } else {
    if (whiteList.indexOf(to.path) != -1) {
      next()
    } else {
      urlWeb.indexOf(to.path) != -1 ? next(`/login`) : next({
        name: "errorpage"
      })
    
    }
  }
})
router.afterEach(() => {
  NProgress.done()
});
