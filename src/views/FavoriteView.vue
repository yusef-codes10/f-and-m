<script setup>
import FProduct from '@/components/FProduct.vue'

import { productsStore } from '@/stores/productStore'

// we have to set the store
const myStore = productsStore()
console.log(` fav ${myStore.favoriteShoes}`)
</script>

<template>
  <div class="favorite">
    This is the favorite products
    <h3>The favorite products</h3>
    <div class="products">
      <FProduct v-for="shoe in myStore.favoriteShoes" :key="shoe.id" :product="shoe" />
    </div>
  </div>
</template>

<style scoped>
.favorite {
  height: 100dvh;
  background-color: aquamarine;
}
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
