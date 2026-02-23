<!-- this is the product view page -->
<script setup>
// we have to import the route here
// ! there are two ways to access the url params
// ! 1- useing the route params
import { useRoute } from 'vue-router'

const route = useRoute()
console.log(route.params.slug)
</script>
<template>
  <div class="details">
    <h1>Product details</h1>
    <!-- here we just access the url slug -->
    <p>Your product is:</p>
  </div>
</template>
<style scoped>
.details {
  min-height: 100vh;
  background-color: burlywood;
}
</style>
