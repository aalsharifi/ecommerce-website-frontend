<template>
    <div class="container mb-5 mt-5">
        <div class="row pt-5">
            <div class="col-md-1"></div>

            <!-- product image -->
            <div class="col-md-4 col-12">
                <img :src="product.imageURL" class="img-fluid">
            </div>

            <!-- product details -->
            <div class="col-md-6 col-12 pt-3 pt-md-0">
                <h4>{{ product.name }}</h4>
                <h6 class="category font-italic">{{ category.categoryName }}</h6>
                <h6 class="font-weight-bold">${{ product.price }}</h6>
                <p>{{ product.description }}</p>

                
                <div class="d-flex flex-row justify-content-between">
                    <!-- Quantity -->
                    <div class="input-group col-md-3 col-4 p-0">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Quantity</span>
                        </div>
                        <input type="number" class="form-control" v-model="quantity"/>
                    </div>
                    <!-- add to cart button -->
                    <div class="input-group col-md-3 col-4 p-0">
                        <button class="btn btn-primary" @click="addToCart">Add to Cart</button>
                    </div>

                </div>

                <!-- features -->
                <div class="features pt-3">
                    <h5><strong>Features</strong></h5>
                    <ul>
                        <li>voluptatem minima neque repellat inventore ipsa blanditiis expedita</li>
                        <li>Ipsa, similique totam! Sed quaerat quisquam id similique veniam</li> 
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
                        <li>doloribus accusantium fugiat ipsum quasi </li>
                    </ul>
                </div>

                <button id="wishlistButton" class="btn btn-secondary mr-3 p-1 py-0" @click="addToWishlist">{{ wishlistString }}</button>

            </div>
        </div>
        <br>
    </div>
</template>

<script>
import swal from 'sweetalert';
import axios from 'axios';

export default {
    props:["products", "categories", "baseURL"],

    data(){
        return{
            id: null,
            product: {},
            category: {},
            quantity: 1,
            wishlistString: "Add to Wishlist",

        };
    },

    methods: {
         addToWishlist(){
            if(!this.token){
                swal({
                    text: "Please sign-in to add item into wishlist",
                    icon: "error"
                });

                return;
            }

            axios.post(`${this.baseURL}/wishlist/add/${this.id}/?Token=${this.token}`)
            .then((res) => {
                if(res.status === 201){
                    this.wishlistString = "Added to wishlist";
                    swal({
                        text: "Added to wishlist",
                        icon: "success"
                    });
                }
            }).catch((err) => {
                console.log("error", err);
            });
        },

        addToCart(){
            if(!this.token){
                swal({
                    text: "Please sign-in to add item into cart",
                    icon: "error"
                });

                return;
            }

            axios.post(`${this.baseURL}/cart/add?Token=${this.token}`, {
                productId: this.id,
                quantity: this.quantity,
            })
            .then((res) => {
                if(res.status === 201){
                    swal({
                        text: "Added to cart",
                        icon: "success"
                    });
                    this.$emit("fetchData");
                }
            }).catch((err) => {
                console.log("error", err);
            });
        },
    },

    mounted(){
        this.id = this.$route.params.id;
        this.product = this.products.find(product => product.id == this.id);
        this.category = this.categories.find(category => category.id == this.product.categoryId);
        this.token = localStorage.getItem("token");
    }
}
</script>

<style scoped>
    .category{
        font-weight: 400;
    }
    .btn-primary{
        background-color: #febd69;
        color: #000;
    }

</style>