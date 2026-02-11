<script setup>
import { defineProps } from 'vue'

defineProps({
  product: {
    type: Object,
  },
})
</script>

<template>
  <div class="product">
    <div class="preview">
      <img :src="product.preview" alt="" />
    </div>
    <div class="content">
      <p>status</p>
      <h3>{{ product.title }}</h3>
      <div class="disceiption">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel!</p>
      </div>
      <div class="price">
        <h4>Price</h4>
      </div>
      <div class="available-color">Colors</div>
    </div>
  </div>
</template>

<style scoped>
.product {
  border: 2px solid red;
}
</style>
