<template>
    
    <div class="container mt-5 mb-5">
        <div class="row">
            <div class="col-12 text-center">
                <h3 class="pt-3">Add New Product</h3>
            </div>
        </div>
        <div class="row">
            <div class="col-3"></div>
            <div class="col-6 mb-5">
                <form>
                    <div class="form-group">
                        <label>Category</label>
                        <select class="form-control" v-model="categoryId" required>
                            <option v-for="category in categories" :key="category.id" :value="category.id">
                                {{ category.categoryName }}
                            </option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" v-model="name"/>
                    </div>
                    <div class="form-group">
                        <label>Descripition</label>
                        <textarea type="text" class="form-control" v-model="description"/>
                    </div>
                    <div class="form-group">
                        <label>Image</label>
                        <input type="text" class="form-control" v-model="imageURL"/>
                    </div>
                    <div class="form-group">
                        <label>Price</label>
                        <input type="number" class="form-control" v-model="price"/>
                    </div>
                    <button type="button" class="btn btn-primary" @click="addProduct">submit</button>
                </form>
            </div>
            <div class="col-3"></div>
        </div>
    </div>

</template>

<script>
import axios from "axios";
import swal from "sweetalert";

export default {
    props: ["categories", "baseURL"],
    data() {
        return{
            id: null,
            categoryId: null,
            name: null,
            description: null,
            imageURL: null,
            price: null,
        }
    },

    methods:{

        addProduct(){
            const newProduct={
                categoryId: this.categoryId,
                description: this.description,
                name: this.name,
                imageURL: this.imageURL,
                price: this.price
            };

            axios.post(this.baseURL + "/product/add", newProduct)
             .then(() => {
                this.$router.push({name: 'AdminProduct'});
                swal({
                    text: "Product added successfully",
                    icon: "success",
                }).then(
                    function(){ 
                        location.reload();
                    })
            })
            .catch((err) => {
                console.log(err);
            });

        },
    },
};
</script>





