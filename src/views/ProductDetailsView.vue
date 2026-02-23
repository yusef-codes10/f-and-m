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
const { slug } = defineProps({
  slug: {
    type: String,
    required: true,
  },
})
console.log(slug)

// importing the pinia store
import { productsStore } from '@/stores/productStore'

// we have to set the store
const myStore = productsStore()
console.log(myStore.shoes)

const findTheProduct = () => myStore.shoes.find((shoe) => shoe.slug === slug)
console.log(findTheProduct)
</script>
<template>
  <div class="details">
    <h1>Product details</h1>
    <!-- here we just access the url slug -->
    <p>Your product is: {{ findTheProduct().title }}</p>
    {{ $route.params.slug }}
    <div class="product-preview">
      <div class="img">
        <img :src="findTheProduct().preview[0]" alt="" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.details {
  min-height: calc(100vh - 80px);
  background-color: burlywood;
}

.product-preview {
  width: 100%;
  background-color: tomato;
}

.img {
  width: 60%;
  padding: 2rem;
}

.img img {
  width: 100%;
}
</style>

<!-- TODO optimization: use computed property instead of the called function -->
