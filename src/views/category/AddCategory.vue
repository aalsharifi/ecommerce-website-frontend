<template>
    
    <div class="container mt-5 mb-5">
        <div class="row">
            <div class="col-12 text-center">
                <h3 class="pt-3">Add New Category</h3>
            </div>
        </div>
        <div class="row">
            <div class="col-3"></div>
            <div class="col-6">
                <form>
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" v-model="categoryName"/>
                    </div>
                    <div class="form-group">
                        <label>Descripition</label>
                        <textarea type="text" class="form-control" v-model="description"/>
                    </div>
                    <div class="form-group">
                        <label>Image</label>
                        <input type="text" class="form-control" v-model="imageURL"/>
                    </div>
                    <button type="button" class="btn btn-primary" @click="addCategory">submit</button>
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
    props: ["baseURL"],
    data() {
        return{
            categoryName: null,
            description: null,
            imageURL: null,
        }
    },

    methods:{

        addCategory(){
            const newCategory={
                categoryName: this.categoryName,
                description: this.description,
                imageURL: this.imageURL,
            };

            axios.post(this.baseURL + "/category/create", newCategory)
             .then(() => {
                this.$router.push({name: 'AdminCategory'});
                swal({
                    text: "Category added successfully",
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





