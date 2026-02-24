<!-- this is the product view page -->
<script setup>
// we have to import the route here
// ! there are two ways to access the url params
// ! 1- useing the route params
// import { useRoute } from 'vue-router'

// const route = useRoute()
// console.log(route.params.slug)

// now lets's pass it as an arg
import { defineProps, ref } from 'vue'
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

// * switch preview function
const currentImageId = ref(0)
const switchPreview = (img) => {
  currentImageId.value = img.preview.id
  console.log(`the id is ${currentImageId.value}`)
}
</script>
<template>
  <div class="details">
    <!-- <h1>Product details</h1>

    <p>Your product is: {{ findTheProduct().title }}</p>
    {{ $route.params.slug }} -->
    <div class="product-preview">
      <div class="images-section">
        <div class="img">
          <img :src="findTheProduct().preview[currentImageId].url" alt="" />
        </div>
        <div class="img-gallery">
          <img
            @click="switchPreview(m)"
            v-for="m in findTheProduct().preview"
            :key="m.id"
            :src="m.url"
            alt="m.id"
          />
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
  height: 100%;
  object-fit: contain; /* or cover */
}

.images-section {
  width: 60%; /* because product-details is 30% */
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.product-details {
  background-color: green;
  width: 40%;
  padding: 2rem;
}

.img-gallery {
  flex: 0 0 20%;
  display: flex;
  justify-content: space-around;
  gap: 10px;
  overflow-x: auto; /* horizontal scroll */
  overflow-y: hidden;
  align-items: center;
  margin: 0 auto;
}

.img-gallery img {
  height: 100%;
  aspect-ratio: 1 / 1; /* square thumbnails */
  object-fit: cover;
  flex-shrink: 0; /* prevents shrinking */
}
</style>

<!-- TODO optimization: use computed property instead of the called function -->
<!-- TODO: clickable image gallery for preview -->
<!-- TODO: more details for the product-->
