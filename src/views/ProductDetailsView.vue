<!-- this is the product view page -->
<script setup>
// we have to import the route here
// ! there are two ways to access the url params
// ! 1- useing the route params
// import { useRoute } from 'vue-router'

// const route = useRoute()
// console.log(route.params.slug)

// now lets's pass it as an arg
import { defineProps } from 'vue'
defineProps({
  slug: {
    type: String,
    required: true,
  },
})

// importing the pinia store
import { productsStore } from '@/stores/productStore'

// we have to set the store
const myStore = productsStore()
console.log(myStore.shoes)

const findTheProduct = () => myStore.shoes.find((shoe) => shoe.slug === route.params.slug)
console.log(findTheProduct)
</script>
<template>
  <div class="details">
    <h1>Product details</h1>
    <!-- here we just access the url slug -->
    <p>Your product is: {{ findTheProduct().title }}</p>
  </div>
</template>
<style scoped>
.details {
  min-height: 100vh;
  background-color: burlywood;
}
</style>
