<template>
    
    <div class="container mb-5">
        <div class="row">
            <div class="col-12 text-center mt-5">
                <h3 class="pt-3">Our Categories</h3>
                <router-link :to="{name : 'AddCategory'}">
                    <button class="btn" style="float:right" v-show="$route.name == 'AdminCategory'">Add Category</button>
                </router-link>
            </div>
        </div>
        <!-- display all categories in categoryBox component -->
        <div class="row mb-5">
            <div v-for="category of categories" :key="category.id" 
            class="col-xl-4 col-md-6 col-12 pt-3 d-flex">
                <CategoryBox :category="category"></CategoryBox>
            </div>
        </div>
        <br>
    </div>
</template>

<script>
import CategoryBox from '../../components/category/CategoryBox.vue'
export default {
    props: ["categories"],
    components: {CategoryBox},
};
</script>





