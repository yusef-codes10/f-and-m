<script setup>
import FProduct from '@/components/FProduct.vue';
import bags from '@/data/bags.js'

</script>

<template>
  <div class="bags products">This is the bags products
    <FProduct v-for="bag in bags" :key="bag.id" :product="bag"/>
  </div>
</template>

<style scoped>
.bags {
  min-height: 100dvh;
  background-color: crimson;
}
</style>
