import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AddCategory from '../views/category/AddCategory.vue'
import Category from '../views/category/Category.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }, 
  {
    path: '/admin/category/addCategory',
    name: 'AddCategory',
    component: AddCategory
  },
  {
    path: '/admin/category',
    name: 'Category',
    component: Category
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
