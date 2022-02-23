<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h4 class="pt-3">Your Wishlist</h4>
            </div>
        </div>

        <!-- display wishlist items  -->
        <div v-for="wish in wishlistItems" :key="wish.id" class="row mt-2 pt-3">
            <div class="col-2"></div>
            <!-- image -->
            <div class="col-md-3 embed-responsive embed-responsive-16by9">
                <img :src="wish.product.imageURL" alt="" class="w-100 card-img-top embed-responsive-item" style="object-fit: cover"/>
            </div>
            <!-- name, discription, price -->
            <div class="col-md-5 px-3">
                <div class="card-block px-3">

                    <router-link :to="{ name: 'ShowProductDetails', params: {id: wish.product.id}}">
                         <h5 class="card-title" style="color: #000;">{{ wish.product.name }}</h5>
                    </router-link>

                    <p class="mb-0 font-weight-bold" id="item-price">${{ wish.product.price }}</p>
                    <p class="mt-2">{{ wish.product.description.substring(0, 65) }}...</p>
                    <button class="btn  btn-primary" @click="deleteItemFromWishlist(wish.id)" >Remove</button>
                    <!-- <a href="#" class="text-right" @click="deleteItemFromWishlist(wish.id)">Remove from wishlist</a> -->
                </div>
            </div>
            <div class="col-2"></div>
            <div class="col-12"><hr></div>
        </div>
        
    </div>
</template>

<script>
import axios from 'axios';
export default {
    props:["baseURL"],
    data(){
        return{
            token: null,
            wishlistItems: [],
        };
    },
    methods: {
        fetchWishlist(){
            axios.get(`${this.baseURL}/wishlist/list/{token}?token=${this.token}`)
            .then((res) => {
                const result = res.data;
                this.wishlistItems = result.wishlistItemsDTOS;

            })
            .catch((err) => console.log("error", err));
        },
        deleteItemFromWishlist(itemId){
            axios.delete(`${this.baseURL}/wishlist/delete/${itemId}?Token=${this.token}`)
            .then((res) => {
                if(res.status == 200){
                    this.$router.go(0)
                }

            })
            .catch((err) => console.log("error", err));
        }
    },
    mounted(){
        this.token = localStorage.getItem("token");
        this.fetchWishlist();
    }
    
}
</script>