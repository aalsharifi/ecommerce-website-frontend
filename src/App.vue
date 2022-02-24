<template>
  <div id="app">
  
  <Navbar :carCount="carCount"/>

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
      carCount: 0,
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

            //get all cart items if token
            if(this.token){
              axios.get(`${this.baseURL}/cart/list/{token}?token=${this.token}`)
              .then((res) => {
                const result = res.data;
                this.carCount = result.cartItemsDTOList.length;
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
