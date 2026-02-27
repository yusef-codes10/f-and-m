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
  min-height: 100dvh;
  background-color: aquamarine;
}
</style>

<!-- TODO we need a computed property for the favorite products -->