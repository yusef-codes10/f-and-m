<script setup>
import FProduct from './FProduct.vue'
// import shoes from '@/data/women-shoes.js'

import { ref, onMounted } from 'vue'

// fetch data from an api
const array = ref([])
onMounted(async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    array.value = data.map((product) => ({
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
    }))

    console.log(array.value)
  } catch (error) {
    console.log(error)
  }
})
</script>

<template>
  <div class="products">
    <FProduct v-for="shoe in array" :key="shoe.id" :product="shoe" />
  </div>
</template>

<style scoped>
.products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin: 1rem;
}

@media (max-width: 655px) {
  .products {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
    margin: 1rem;
  }
}
</style>
