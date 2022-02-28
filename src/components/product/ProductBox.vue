<template>
    <div class="card w-100 h-100" style="margin-top: 10px">
        <div class="embed-responsive embed-responsive-16by9">
            <img class="card-img-top embed-responsive-item" :src="product.imageURL" alt="card image">
        </div>
        <div class="card-body">

            <router-link :to="{ name: 'ShowProductDetails', params: {id: product.id}}">
                <h5 class="card-title">{{ product.name }}</h5>
            </router-link>

            <p class="card-text font-weight-bold" style="color: gray">${{ product.price }}</p>

            <p class="card-text">{{ product.description.substring(0, 65) }}...</p>

            <router-link :to="{ name: 'EditProduct', params: {id: product.id}}" v-show="$route.name == 'AdminProduct'">
                <button class="btn btn-primary">Edit</button>
            </router-link>

        </div>
    </div>
</template>

<script>
export default {
    name: "ProductBox",
    props: ["product"],
};
</script>

<style scoped>
    .card-img-top{
        object-fit: cover;
    }
    .card-title{
        color: #000;
    }
    
</style>