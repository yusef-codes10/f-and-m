<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const toggleIsOpen = () => {
  isOpen.value = !isOpen.value
}
</script>
<template>
  <div class="accordion">
    <div class="accordion-header">
      <div class="accordion-title">Title</div>
      <button @click="toggleIsOpen">
        <i :class="isOpen ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down'"></i>
      </button>
    </div>
    <div class="accordion-content" v-if="isOpen">Hello dude</div>
  </div>
</template>
<style scoped>
.accordion {
  width: 100%;
  max-width: 400px; /* optional */
  height: auto;
  background-color: aqua;
}

.accordion-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.accordion-header button {
  background: none;
  border: none;
}
</style>