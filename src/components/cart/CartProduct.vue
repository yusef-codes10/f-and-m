<script setup>
import { cartStore } from '@/stores/cartStore'

const myCartStore = cartStore()

import { ref, defineProps, computed } from 'vue'

const props = defineProps({
  product: {
    type: Object,
  },
})

const selectedColor = ref(props.product.defaultColor)

// computed property for the current color, later we will change the color only
const currentColor = computed(() =>
  props.product.colors.find((c) => c.name === selectedColor.value)
)

console.log(currentColor);
</script>
<template>
  <div class="item" v-for="item in myCartStore.cartItems" :key="item.product.id">
    <h1>{{ item.product.title }}</h1>
    <p>{{ item.quantity }}</p>
  </div>
</template>
<style scoped>
.item {
  background-color: red;
  padding: 5rem;
  height: 100px;
  width: 100px;
  margin: 1rem 0;
}
</style>