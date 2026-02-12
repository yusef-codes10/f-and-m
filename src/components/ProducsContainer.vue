<script setup>
import FProduct from './FProduct.vue'
import shoes from '@/data/women-shoes.js'
</script>

<template>
  <div class="products">
    <FProduct v-for="shoe in shoes" :key="shoe.id" :product="shoe" />
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
