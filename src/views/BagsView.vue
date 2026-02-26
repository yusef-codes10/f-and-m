<script setup>
import FProduct from '@/components/FProduct.vue';
// import bags from '@/data/bags.js'

import { productsStore } from '@/stores/productStore'

// we have to set the store
const myStore = productsStore()
console.log(myStore.bags)

</script>

<template>
  <div class="products">
    <FProduct v-for="bag in myStore.bags" :key="bag.id" :product="bag"/>
  </div>
</template>

<style scoped>
.bags {
  min-height: 100dvh;
  background-color: crimson;
}
</style>
