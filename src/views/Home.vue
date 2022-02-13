<template>
  <div id="home">
    <div id="background-div" class="page-holder bg-cover">
      <div class="container">
        <h3>Shop now</h3>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {},
}
</script>

<style scoped>
  .page-holder{
    min-height: 100vh;
  }
  .bg-cover{
    background-size: cover !important;
  }
  #background-div{
    background: url("../assets/homepage.png");
  }
</style>
