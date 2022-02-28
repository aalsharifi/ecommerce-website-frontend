<template>

    <div class="container mt-5 mb-5">
        <div class="row">
            <div class="col-12 text-center">
                <h4 class="pt-3">Edit Category</h4>
            </div>
        </div>
        <div class="row">
            <div class="col-3"></div>
            <div class="col-6">
                <form v-if="category">
                    <div class="form-group">
                        <label>Category Name</label>
                        <input type="text" class="form-control" v-model="category.categoryName" required/>
                    </div>
                    <div class="form-group">
                        <label>Description</label>
                        <textarea type="text" class="form-control" v-model="category.description" required/>
                    </div>
                    <div class="form-group">
                        <label>Image URL</label>
                        <textarea type="text" class="form-control" v-model="category.imageURL" required/>
                    </div>
                    <button type="button" class="btn btn-primary" @click="editCategory">Submit</button>
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
    data(){
        return{
            category: null,
            id: null,
        };
    },

    props: ["baseURL", "categories"],

    methods: {
        async editCategory(){
            delete this.category["product"];
            console.log('category', this.category);

            await axios.post(`${this.baseURL}/category/update/${this.id}`, this.category)
            .then(() => {
                this.$emit("fetchData");
                this.$router.push({name: 'AdminCategory'});
                swal({
                    text: "Category successfully updated",
                    icon: "success",
                })
            }).catch((err) => {
                console.log(err);
            });
        },

    }, 

    mounted() {
        this.id = this.$route.params.id;
        this.category = this.categories.find(category => category.id == this.id)
    }

}
</script>