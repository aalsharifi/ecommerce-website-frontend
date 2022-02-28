<template>
   <footer>
       <div class="container pt-5">
           <div class="row mt-3">
               <div class="col-md-3 col-6">
                   <ul style="list-style-type: none">
                       <li class="text-light font-weight-bold pb-2">Get to know us</li>
                       <li><a class="footer-link font-weight-light" href="#">About Us</a></li>
                       <li><a class="footer-link font-weight-light" href="#">Sponsorships</a></li>
                       <li><a class="footer-link font-weight-light" href="#">Download Mobile App</a></li>
                   </ul>
               </div>
               <div class="col-md-3 col-6">
                   <ul style="list-style-type: none">
                       <li class="text-light font-weight-bold pb-2">Social Media</li>
                       <li><a class="footer-link font-weight-light" href="#">Instagram</a></li>
                       <li><a class="footer-link font-weight-light" href="#">Facebook</a></li>
                       <li><a class="footer-link font-weight-light" href="#">Twitter</a></li>
                   </ul>
               </div>
               <div class="col-md-3 col-6">
                   <ul style="list-style-type: none">
                       <li class="text-light font-weight-bold pb-2">Memberships</li>
                       <li><a class="footer-link font-weight-light" href="#">Basic</a></li>
                       <li><a class="footer-link font-weight-light" href="#">Silver</a></li>
                       <li><a class="footer-link font-weight-light" href="#">Gold</a></li>
                   </ul>
               </div>
               <div class="col-md-3 col-6">
                   <ul style="list-style-type: none">
                       <li class="text-light font-weight-bold pb-2">Get in Contact</li>
                       <li><a class="footer-link font-weight-light" href="#">Return Center</a></li>
                       <li><a class="footer-link font-weight-light" href="#">Customer service</a></li>
                       <li><a class="footer-link font-weight-light" href="#">Help</a></li>
                   </ul>
               </div>
           </div>
           
       </div>
   </footer>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    footer{
        /* margin-top: 100px; */
        background-color: #000;
        font-size: 16px;
        height: 280px;
    }
    a{
        text-decoration: none;
    }
    .footer-link{
        color: #fff;
    }
    li{
        padding-bottom: 10px;
    }

    @media screen and (max-width: 768px) {
        footer{
            height: auto;
        }
    }

    
</style>