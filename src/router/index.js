import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AddCategory from '../views/category/AddCategory.vue'
import Category from '../views/category/Category.vue'
import Admin from '../views/Admin.vue'
import Product from '../views/product/Product.vue'
import AddProduct from '../views/product/AddProduct.vue'
import EditCategory from '../views/category/EditCategory.vue'
import EditProduct from '../views/product/EditProduct.vue'
import ShowProductDetails from '../views/product/ShowProductDetails.vue'
import ListProducts from '../views/category/ListProducts.vue'
import Signup from '../views/Signup.vue'
import Signin from '../views/Signin.vue'
import Wishlist from '../views/product/Wishlist.vue'
import Cart from '../views/Cart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin/category/addCategory',
    name: 'AddCategory',
    component: AddCategory
  },
  {
    path: '/admin/category',
    name: 'AdminCategory',
    component: Category
  },
  // category page
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/admin/category/:id',
    name: 'EditCategory',
    component: EditCategory
  },
  {
    path: '/category/show/:id',
    name: 'ListProducts',
    component: ListProducts
  },
  {
    path: '/admin/product',
    name: 'AdminProduct',
    component: Product
  },
  // product page
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/admin/product/addProduct',
    name: 'AddProduct',
    component: AddProduct
  },
  {
    path: '/admin/product/:id',
    name: 'EditProduct',
    component: EditProduct
  },
  {
    path: '/product/show/:id',
    name: 'ShowProductDetails',
    component: ShowProductDetails
  },
  {
    path: '/wishlist',
    name: 'Wishlist',
    component: Wishlist
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },

  


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
