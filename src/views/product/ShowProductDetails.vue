<template>
    <div class="container">
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

            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:["products", "categories"],

    data(){
        return{
            product: {},
            category: {}
        };
    },

    mounted(){
        this.id = this.$route.params.id;
        this.product = this.products.find(product => product.id == this.id)
        this.category = this.categories.find(category => category.id == this.product.categoryId)
    }
}
</script>

<style scoped>
    .category{
        font-weight: 400;
    }

</style>