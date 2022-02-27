<template>
  <div id="app">
  
  <Navbar :cartCount="cartCount" :wishlistCount="wishlistCount"/>

  <router-view v-if="categories && products" style="min-height: 60vh;"
  :baseURL="baseURL" 
  :categories="categories" 
  :products="products"
  @fetchData="fetchData"
  >
  </router-view>
   
  <Footer />

  </div>

</template>

<script>
import Navbar from "./components/Navbar.vue";
import axios from "axios";
import Footer from './components/Footer.vue';

export default {
  components: { Navbar, Footer },
  data() {
    return{
      baseURL: "https://heroku-ecommerce-backend.herokuapp.com",
      products: null,
      categories: null,
      cartCount: 0,
      wishlistCount: 0,
    };
  },
  methods: {
    async fetchData(){
          //get all categories
            await axios
            .get(`${this.baseURL}/category/list`)
            .then((res) => (this.categories = res.data))
            .catch((err) => console.log(err));

          //get all products
          await axios
            .get(`${this.baseURL}/product/list`)
            .then((res) => (this.products = res.data))
            .catch((err) => console.log(err));

            //get all cart and wishlist items if token
            if(this.token){
              //cart
              axios.get(`${this.baseURL}/cart/list/{token}?token=${this.token}`)
              .then((res) => {
                const result = res.data;
                this.cartCount = result.cartItemsDTOList.length;
              })
              .catch((err) => console.log("error", err));

              //wishlist
              axios.get(`${this.baseURL}/wishlist/list/{token}?token=${this.token}`)
              .then((res) => {
                const result = res.data;
                this.wishlistCount = result.wishlistItemsDTOS.length;
              })
              .catch((err) => console.log("error", err));
            }  
        }
    },
    mounted(){
        this.fetchData();
        this.token = localStorage.getItem("token");
    },
};
</script>

<style>
  html{
    overflow-y: scroll;
  }

</style>
