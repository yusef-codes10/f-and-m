<script setup>
import FProduct from '@/components/FProduct.vue'

import { productsStore } from '@/stores/productStore'

// we have to set the store
const myStore = productsStore()
console.log(myStore.shoes)
</script>

<template>
  <div class="favorite">
    This is the favorite products
    <h3>The favorite products</h3>
    <FProduct />
    <FProduct v-for="shoe in myStore.activeFilter" :key="shoe.id" :product="shoe" />
  </div>
</template>

<style scoped>
.favorite {
  height: 100dvh;
  background-color: aquamarine;
}
</style>
