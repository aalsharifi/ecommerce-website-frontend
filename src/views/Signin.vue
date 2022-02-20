<template>
    <div class="container">

        <div class="row">
            <div class="col-12 justify-content-center d-flex pt-5">
                <div id="signin" class="flex-item border ">
                    <h2 class="pt-4">Sign-in</h2>

                    <form @submit="signin" class="form-group pt-4 pl-4 pr-4">
                        <div class="form-group">
                            <label>Email</label>
                            <input type="email" class="form-control" v-model="email" required/>
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input type="password" class="form-control" v-model="password" required/>
                        </div>

                        <button class="btn btn-primary mt-2 py-2 px-4">Sign in</button>
                    </form>

                     <hr>
                    <small class="my-0">Need an Account?</small>
                    <br>
                    <router-link class="link" :to="{ name: 'Signup' }">
                        <button class="btn  btn-outline-secondary mb-4">Create Your Account Here</button>
                    </router-link>
            
                </div>
               
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert';

export default {
    props: ["baseURL"],
    data(){
        return{
             email: null,
             password: null,
        };
    },
    methods: {
        async signin(e){
            e.preventDefault();

            const user = {
                email: this.email,
                password: this.password,
            };

            await axios.post(this.baseURL + "/user/signin", user)
            .then((res) => {
                this.$router.push({name: 'Home'});
                localStorage.setItem("token", res.data.token)
                swal({
                    text: "Sign-in successful",
                    icon: "success"
                });
            })
            .catch((err) => {
                console.log(err);
            });
        }
    },
}
</script>

<style scoped>
    .btn-primary{
        background-color: #f0c14b;
        color: #000;
    }

    @media screen and (min-width: 992px){
        #signin{
            width: 40%;
        }
    }

</style>

