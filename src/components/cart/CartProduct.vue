<script setup>
import { ref, defineProps, computed } from 'vue'

const props = defineProps({
  item: {
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
  <div class="item" >
    <h1>{{ props.product.title }}</h1>
    <p>{{ props.quantity }}</p>
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