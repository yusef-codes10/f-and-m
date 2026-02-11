<script setup>
import FProduct from './FProduct.vue'
</script>

<template>
  <div class="products">
    <FProduct />
    <FProduct />
    <FProduct />
    <FProduct />
    <FProduct />
    <FProduct />
    <FProduct />
  </div>
</template>

<style scoped>
.products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin: 1rem;
}
</style>
