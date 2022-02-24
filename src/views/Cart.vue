<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h4 class="pt-3">Shopping Cart</h4>
            </div>
        </div>

        <!-- display cart items  -->
        <div v-for="cart in cartItems" :key="cart.id" class="row mt-2 pt-3">
            <div class="col-2"></div>
            <!-- image -->
            <div class="col-md-3 embed-responsive embed-responsive-16by9">
                <img :src="cart.product.imageURL" alt="" class="w-100 card-img-top embed-responsive-item" style="object-fit: cover"/>
            </div>
            <!-- name, price, quantity -->
            <div class="col-md-5 px-3">
                <div class="card-block px-3">

                    <router-link :to="{ name: 'ShowProductDetails', params: {id: cart.product.id}}">
                         <h5 class="card-title" style="color: #000;">{{ cart.product.name }}</h5>
                    </router-link>

                    <p class="mb-0 font-weight-bold" id="item-price">${{ cart.product.price }} per unit</p>
                    <p class="mb-0 float-left">Quantity: {{cart.quantity}}</p>
                    <p class="mb-0 float-right">Total: <span class="font-weight-bold">${{cart.product.price * cart.quantity}}</span></p>
                <!-- delete item from cart -->
                    <br>
                    <button class="btn  btn-primary" @click="deleteItemFromCart(cart.id)" >Remove</button>
                </div>
            </div>
            <div class="col-2"></div>
            <div class="col-12"><hr></div>
        </div>

        <!-- total price in cart -->
        <div class="total-cost pt-2 text-right">
            <h5>Total: ${{ totalCost }}</h5>
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
            cartItems: [],
            totalCost: 0,
        };
    },
    methods: {
        fetchCart(){
            axios.get(`${this.baseURL}/cart/list/{token}?token=${this.token}`)
            .then((res) => {
                const result = res.data;
                this.cartItems = result.cartItemsDTOList;
                this.totalCost = result.totalCost;
            })
            .catch((err) => console.log("error", err));
        },
        deleteItemFromCart(itemId){
            axios.delete(`${this.baseURL}/cart/delete/${itemId}?Token=${this.token}`)
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
        this.fetchCart();
    }
    
}
</script>

