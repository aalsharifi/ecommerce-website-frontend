<template>
   
    <header :class="{'scrolled-nav': scrollNav}">
        <nav>
            <router-link class="branding" :to="{ name: 'Home' }">
                <img src="@/assets/logo.png" alt="">
            </router-link>

            <ul v-show="!mobile" class="navigation">
                <!-- dropdown for browse -->
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle link" href="#" 
                    id="navbarDropdownMenuLink" data-toggle="dropdown" 
                    aria-haspopup="true" aria-expanded="false">Browse</a>

                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <router-link class="dropdown-item" :to="{ name: 'Home' }">Home</router-link>
                        <router-link class="dropdown-item" :to="{ name: 'Home' }">Product</router-link>
                        <router-link class="dropdown-item" :to="{ name: 'Home' }">Category</router-link>
                    </div>
                </li>
                <!-- dropdown for account -->
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle link" href="#" 
                    id="navbarDropdownMenuLink" data-toggle="dropdown" 
                    aria-haspopup="true" aria-expanded="false">Account</a>

                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <router-link v-if="token" class="dropdown-item" :to="{ name: 'Wishlist' }">Wishlist</router-link>
                        <router-link v-if="!token" class="dropdown-item" :to="{ name: 'Signup' }">Sign Up</router-link>
                        <router-link v-if="!token" class="dropdown-item" :to="{ name: 'Signin' }">Sign In</router-link>
                        <a href="#" class="dropdown-item" v-if="token" @click="signout">Sign Out</a>
                    </div>
                </li>
                <!-- admin -->
                <li><router-link class="link" :to="{ name: 'Admin' }">Admin</router-link></li>
                <!-- cart -->
                
                <li class="nav-item">
                    <div id="cart" style="position: relative">
                        <span id="nav-bar-count">{{ carCount }}</span>
                        <router-link style="margin-left: 25px" class="link" :to="{ name: 'Cart' }">
                            <i class="fa fa-shopping-cart" style="font-size:28px"></i>
                        </router-link>
                    </div>
                    
                </li>
            </ul>
          
            <div class="icon">
                <i @click="toggleMobileNav" v-show="mobile" class="fa fa-bars" :class="{'icon-active' : mobileNav}"></i>
            </div>

            <transition name="mobile-nav">
                <ul v-show="mobileNav" class="dropdown-nav">
                    <!-- home -->
                    <li><router-link class="link" :to="{ name: 'Home' }">Home</router-link></li>
                    <!-- dropdown for browse -->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle link" href="#" 
                        id="navbarDropdownMenuLink" data-toggle="dropdown" 
                        aria-haspopup="true" aria-expanded="false">Browse</a>

                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <router-link class="dropdown-item" :to="{ name: 'Home' }">Home</router-link>
                            <router-link class="dropdown-item" :to="{ name: 'Home' }">Product</router-link>
                            <router-link class="dropdown-item" :to="{ name: 'Home' }">Category</router-link>
                        </div>
                    </li>
                    <!-- dropdown for account -->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle link" href="#" 
                        id="navbarDropdownMenuLink" data-toggle="dropdown" 
                        aria-haspopup="true" aria-expanded="false">Account</a>
                        
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <router-link v-if="token" class="dropdown-item" :to="{ name: 'Wishlist' }">Wishlist</router-link>
                            <router-link v-if="!token" class="dropdown-item" :to="{ name: 'Signup' }">Sign Up</router-link>
                            <router-link v-if="!token" class="dropdown-item" :to="{ name: 'Signin' }">Sign In</router-link>
                            <a href="#" class="dropdown-item" v-if="token" @click="signout">Sign Out</a>
                        </div>
                        
                    </li>
                    <li><router-link class="link" :to="{ name: 'Admin' }">Admin</router-link></li>
                </ul>
            </transition>

        </nav>

        <div class="spacer"></div>
    </header>

    
    
</template>

<script>
import swal from 'sweetalert';
export default {
    name: "Navbar",
    props: ["carCount"],
    data(){
        return{
            scrollNav: null,
            mobile: null,
            mobileNav: null,
            windowWidth: null,
            token: null,
        };
    },

    created(){
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen();
    },

    mounted(){
        window.addEventListener('scroll', this.updateScroll);
        this.token = localStorage.getItem("token");
    },

    methods:{
        toggleMobileNav() {
            this.mobileNav = !this.mobileNav;
        },
        updateScroll(){
            const scrollPosition = window.scrollY;
            if(scrollPosition > 50){
                this.scrollNav = true;
                return;
            }
            this.scrollNav = false;
           
        },
        checkScreen(){
            this.windowWidth = window.innerWidth;
            if(this.windowWidth <= 750){
                this.mobile = true;
                return;
            }

            this.mobile = false;
            this.mobileNav = false;
            return;
        },
        signout(){
            localStorage.removeItem("token");
            this.token = null;
            swal({
                    text: "Successfully signed out",
                    icon: "success",
                }).then(
                    function(){ 
                        location.reload();
                    });
        }
    }
    
}
</script>

<style lang="scss" scoped>

    header{
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 99;
        width: 100%;
        position: sticky;
        top: 0;
        transition: 0.5s ease all;
        color: #fff;
        

        nav{
            position: relative;
            display: flex;
            flex-direction: row;
            padding: 8px 0;
            transition: 0.5s ease all;
            width: 90%;
            margin: 0 auto;
        
            @media(min-width: 1140px) {
                max-width: 1140px;
            }

            ul, .link{
                font-weight: 500;
                color: #fff;
                list-style: none;
                text-decoration: none;
            }

            li{
                text-transform: uppercase;
                padding: 14px;
                margin-left: 5px;
                
            }

            .link{
                font-size: 14px;
                transition: 0.5s ease all;
                padding-bottom: 4px;
                border-bottom: 1px solid transparent;

                &:hover{
                    color: #00afea;
                    border-color: #00afea;
                }
            }

            .branding{
                display: flex;
                align-items: center;

                img{
                    width: 50px;
                    transition: .5s ease all;
                }
            }

            .navigation{
                display: flex;
                align-items: center;
                flex: 1;
                justify-content: flex-end;
            }

            .icon{
                display: flex;
                align-items: center;
                position: absolute;
                top: 0;
                right: 24px;
                height: 100%;

                i{
                    cursor: pointer;
                    font-size: 24px;
                    transition: 0.8s ease all;
                }
            }

            .icon-active{
                transform: rotate(180deg);
            }

            .dropdown-nav{
                display: flex;
                flex-direction: column;
                position: fixed;
                width: 100%;
                max-width: 250px;
                height: 100%;
                background: #fff;
                top: 0;
                left: 0;

                li{
                    margin-left: 0;
                    .link{
                        color: #000;
                    }
                }
            }

            .mobile-nav-enter{
                opacity: 0;
            }

            .mobile-nav-enter-active,
            .mobile-nav-leave-active {
                transition: 1s ease all;
            }

            .mobile-nav-enter-from, 
            .mobile-nav-leave-to {
                transform: translateX(-250px);
            }

            .mobile-nav-enter-to {
                transform: translateX(0);
            }

        }

    }

    .scrolled-nav{
        background-color: #000;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

        nav{
            padding: 0px 0;
            .branding{
                img{
                    width: 40px;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
                }
            }
        }
    }

    #nav-bar-count{
        background-color: red;
        color: white;
        border-radius: 50%;
        height: 12px;
        width: 12px;
        font-size: 14px;
        align-items: center;
        display: flex;
        justify-content: center;
        position: absolute;
        margin-left: 37px;
       
    }


</style>