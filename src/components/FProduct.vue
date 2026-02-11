<script setup>
import { defineProps } from 'vue'
// import shoes from '@/data/women-shoes.js'

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
        <p>{{ product.description }}</p>
      </div>
      <div class="price">
        <h4>{{ product.price }}</h4>
      </div>
      <div class="available-colors">
        <div
          class="color"
          v-for="color in product.availableColor"
          :key="color"
          :class="color"
        ></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product {
  border: 2px solid red;
  overflow: hidden;
}

/* styling the img and its container */
.preview {
  width: 100%;
  aspect-ratio: 1 / 1;
}

.preview img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block; /* removes weird gaps */
}

.black {
  background-color: #000;
}

.blush {
  background-color: burlywood;
}

.bianco {
  background-color: #fff;
}

.lin-platin {
  background-color: rgba(192, 192, 192, 0.796);
}

.silver {
  background-color: silver;
}

.available-colors {
  display: inline-flex;
  gap: 0.5rem;
}

.color {
  border-radius: 50%;
  /* padding: 1rem; */
  height: 20px;
  width: 20px;
  border: var(--text-color);
}
</style>
