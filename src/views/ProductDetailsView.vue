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
    <!-- <h1>Product details</h1>

    <p>Your product is: {{ findTheProduct().title }}</p>
    {{ $route.params.slug }} -->
    <div class="product-preview">
      <div class="images-section">
        <div class="img">
          <img :src="findTheProduct().preview[0]" alt="" />
        </div>
        <div class="img-gallery">
          <img v-for="m in findTheProduct().preview" :key="m" :src="m" alt="" />
        </div>
      </div>
      <div class="product-details">
        <h2 class="title">{{ findTheProduct().title }}</h2>
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
  display: flex;
  gap: 0.5rem;
}

.img {
  flex: 0 0 80%; /* takes 80% of container height */
  overflow: hidden;
  width: 100%;
}

.img img {
  width: 100%;
}

.images-section {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.product-details {
  background-color: green;
  width: 30%;
  padding: 2rem;
}

.img-gallery {
  display: flex;
  max-height: 30%;
  width: 60%;
  overflow: none;
}
</style>

<!-- TODO optimization: use computed property instead of the called function -->
