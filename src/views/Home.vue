<template>
  <div id="home">
    <div id="background-div" class="page-holder bg-cover">
      <div class="container py-5">

        <div class="hero">
          <div class="heroContent">
            <h1>Alsharifi</h1>
            <p>Clean our sales by buying</p>
            <a href="#productPage"><button class="btn btn-outline-secondary">Shop Now</button></a>
            
          </div>
        </div>

      </div>
     
    </div>

    <!-- display top categories -->
    <div class="container py-3">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="pt-3">Top Categories</h2>
          </div>
        </div>

        <div class="row">
          <div v-for="index in this.categorySize" :key="index" 
          class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex">
          <CategoryBox :category = "categories[index-1]"/>
          </div>
        </div>
      </div>

    <!-- display top products -->
    <div class="container py-3" id="productPage">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="pt-3">Top Products</h2>
          </div>
        </div>

        <div class="row">
          <div v-for="index in this.productSize" :key="index" 
          class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex">
          <ProductBox :product = "products[index-1]"/>
          </div>
        </div>
      </div>


      <!-- email -->
    <div class="email mt-5">
        <div class="emailContent">
            <h1>Get Access to Members Only Perks</h1>
            <p>Sign up for our newsletter below to get 10% off next order</p>
            <form action="#">
                <div class="input-group mb-3">
                  <input type="email" class="form-control" placeholder="Email" required>
                  <div class="input-group-append">
                    <button class="btn btn-outline-warning" type="submit">Sign up</button>
                  </div>
                </div>
            </form>
        </div>
    </div>
  </div>
</template>

<script>
import CategoryBox from '../components/category/CategoryBox.vue';
import ProductBox from '../components/product/ProductBox.vue';
export default {
  name: 'Home',
  components: {CategoryBox, ProductBox},
  props: ["categories", "products"],
  data(){
    return{
      categorySize: 0,
      productSize: 0,

    };
  },

  mounted(){
    this.categorySize = Math.min(6, this.categories.length)
    this.productSize = Math.min(9, this.products.length)
  }
}
</script>

<style scoped>
  .page-holder{
    min-height: 100vh;
  }
  .bg-cover{
    background-size: cover !important;
  }
  #background-div{
    background: url("../assets/homepage2.jpg");
  }

  #heading{
    font-weight: 400;
  }


  /* hero */
  .heroContent{
    color: rgb(116, 116, 116);
    padding: 3rem 1rem;
    line-height: 1;
}

.heroContent h1{
    font-size: clamp(3rem, 8vw, 6rem);
    text-transform: uppercase;
    margin-bottom: 1rem;
}

.heroContent p{
    font-size: clamp(1rem, 4vw, 2rem);
    margin-bottom: 3rem;
    text-transform: uppercase;
}

button{
    text-transform: uppercase;
    padding: 1rem 3rem;
    font-size: 1rem;
    border-radius: 7px;
}

button:hover{
    color: white;
    background: black;
}

/* email */
.email{
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0%, 
        rgba(0, 0, 0, 0.1) 35%,
        rgba(0, 0, 0, 1) 100%
        ),url("../assets/tree.jpg") no-repeat center;
        background-size: cover;
        height: 450px;
        width: 100%;
        padding: 5rem calc((100vw - 1300px) / 2);
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
}

.emailContent{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.emailContent h1{
    text-align: center;
    margin-bottom: 1rem;
    font-size: clamp(1rem, 5vw, 3rem);
    padding: 0 1rem;
}

.emailContent p{
    text-align: center;
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    padding: 0 1rem;
    margin-bottom: 2rem;
}


</style>
