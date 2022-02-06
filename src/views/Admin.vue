<template>
    <div>
        <router-link :to="{ name: 'AdminCategory' }"> 
            <button class="btn btn-primary btn-lg">Admin Category</button>
        </router-link>
        <br>
        <router-link :to="{ name: 'AdminProduct' }"> 
            <button class="btn btn-primary btn-lg">Admin Product</button>
        </router-link>
    </div>
</template>

<script>
export default {
    setup() {
        
    },
}
</script>

<style scoped>
    .btn{
        margin-bottom: 20px;
    }
</style>