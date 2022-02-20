<template>
    <div class="container">

        <div class="row">
            <div class="col-12 justify-content-center d-flex pt-5">
                <div id="signup" class="flex-item border">
                    <h2 class="pt-4 pl-4">Create Account</h2>
                    <form @submit="signup" class="pt-4 pl-4 pr-4">
                        <div class="form-group">
                            <label for="Email">Email</label>
                            <input type="email" class="form-control" v-model="email" required/>
                        </div>
                        <div class="form-row">
                            <div class="col">
                                <div class="form-group">
                                    <label>First Name</label>
                                    <input type="text" class="form-control" v-model="firstName" required/>
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <label>Last Name</label>
                                    <input type="text" class="form-control" v-model="lastName" required/>
                                </div>
                            </div>
                        </div>
                        <!-- password -->
                        <div class="form-group">
                            <label for="Password">Password</label>
                            <input type="password" class="form-control" v-model="password" required/>
                        </div>
                        <!-- confirm password -->
                        <div class="form-group">
                            <label for="Password">Confirm Password</label>
                            <input type="password" class="form-control" v-model="confirmPassword" required/>
                        </div>

                        <button class="btn btn-primary mt-2">Create Account</button>
                    </form>

                    <hr>
                    <small class="my-0">Already Have an Account?</small>
                    <br>
                    <router-link class="link" :to="{ name: 'Signin' }">
                        <button class="btn  btn-outline-secondary mb-4">Sign-in Here</button>
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
            firstName: null,
            lastName: null,
            password: null,
            confirmPassword: null,
        }
    },
    methods: {
        async signup(e){
            e.preventDefault();
            if(this.password === this.confirmPassword){
                const user = {
                    email: this.email,
                    firstName: this.firstName, 
                    lastName: this.lastName,
                    password: this.password,
                }

                // console.log('user', user);

                await axios.post(this.baseURL + "/user/signup", user)
                .then(() => {
                    this.$router.push({name: 'Home'});
                    swal({
                        text: "User signup successfully, please sign-in",
                        icon: "success"
                    });
                })
                .catch((err) => {
                    console.log(err);
                });

            }else{
                swal({
                        text: "Password does not match",
                        icon: "error"
                });
            }
        }
    }
    
}
</script>

<style scoped>
    .btn-primary{
        background-color: #f0c14b;
        color: #000;
    }
     @media screen and (min-width: 992px){
        #signup{
            width: 40%;
        }
    }
</style>