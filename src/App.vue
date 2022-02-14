<template>
  <div id="app">
  
  <Navbar />

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
      categories: null
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
        }
    },
    mounted(){
        this.fetchData();
    },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
