import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../view/layout/Home.vue'
import Product from '../view/product/Product.vue'
import Question from '../view/question/Question.vue'
import DetailsProduct from '../view/product/DetailsProduct.vue'
import ErrorPage from '../view/404.vue'
import LayoutComponent from '../component/LayoutComponent.vue'
import Login from '../view/user/Login.vue'
import User from '../view/user/User.vue'

Vue.use(VueRouter)


const routes = [{
    path: '/',
    component: LayoutComponent,
    children: [{
        path: '',
        name: 'homePage',
        component: Home
      },
      {
        path: 'product',
        name: 'productPage',
        component: Product
      },
      {
        path: 'detail-product',
        name: 'detailsProductPage',
        component: DetailsProduct
      },
      {
        path: 'login',
        name: 'login',
        component: Login
      },
      {
        path: 'user',
        name: 'profileUser',
        component: User
      },

    ]
  },
  {
    path: '/question',
    component: Question,
    name: 'questionPage'
  },
  {
    path: '*',
    component: ErrorPage,
    name: 'errorpage'
  }
]


const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
