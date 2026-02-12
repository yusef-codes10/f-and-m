<script setup>
import { defineProps, ref } from 'vue'
// import shoes from '@/data/women-shoes.js'

const isHoverd = ref(false)

defineProps({
  product: {
    type: Object,
  },
})

// hoverin on the preview img
const currentImageIndex = ref(0)

const showArrowButton = () => {}
</script>

<template>
  <div class="product">
    <div class="preview" @mouseenter="" @mouseleave="">
      <img :src="product.preview" alt="" />

      <!-- arrow buttons here that will only show when hovering -->
      <button class="leftBtn">
        <i class="fa-solid fa-chevron-left"></i>
      </button>

      <button class="rightBtn">
        <i class="fa-solid fa-chevron-right"></i>
      </button>
    </div>
    <div class="content">
      <p>{{ product.status }}</p>
      <i
        :class="isHoverd ? 'bi bi-heart-fill' : 'bi bi-heart'"
        @mouseenter="isHoverd = true"
        @mouseleave="isHoverd = false"
      ></i>
      <h3>{{ product.title }}</h3>
      <div class="disceiption">
        <p>{{ product.description }}</p>
      </div>
      <div class="price">
        <h3>${{ product.price }}.00</h3>
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
  /* border: 2px solid red; */
  overflow: hidden;
}

/* styling the img and its container */
.preview {
  width: 100%;
  aspect-ratio: 1 / 1;
  margin-bottom: 1.5rem;
  position: relative;
}

.preview img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block; /* removes weird gaps */

  border-radius: 50% 50% 0 0;
  box-shadow:
    0 8px 20px var(--text-color),
    0 2px 6px var(--text-color);

  /* display: none; */
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
  border: 2px solid var(--text-color);
}

.content {
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 1.3rem;

  position: relative;
}

.content p {
  color: var(--secondary-text);
  /* margin: 0.5rem 1rem; */
}

i {
  position: absolute;
  top: 15px;
  right: 5px;
  color: red;
  font-size: 2rem;
  cursor: pointer;

  transition: all 0.6s;
}

button {
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: var(--brand-color);
  z-index: 9999;
  position: absolute;
}

.leftBtn {
  top: 50%;
  left: 10%;
  /* transform: translateY(-50%); */
}

.rightBtn {
  top: 50%; /* not bottom */
  right: 0;
  /* transform: translateY(-50%); */
}
</style>
