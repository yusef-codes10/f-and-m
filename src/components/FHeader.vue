<script setup>
import { productsStore } from '@/stores/productStore'

// we have to set the store
const myStore = productsStore()
console.log(myStore.shoes)
</script>

<template>
  <nav>
    <RouterLink to="/"
      ><h2 class="logo"></h2>
      F&M</RouterLink
    >
    <ul class="no-mobile">
      <li><RouterLink to="/women">Women</RouterLink></li>
      <li><RouterLink to="/men">Men</RouterLink></li>
      <li><a href="#">Bags & Accesories</a></li>
      <li @click="myStore.toggleFavoriteFilter">Favorites</li>
    </ul>
    <button>More</button>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;

  position: sticky;
  top: 0;
  z-index: 9999;
}

.logo {
  color: var(--brand-color);
  font-size: clamp(1.5rem, 4vw + 1rem, 2.3rem);
  font-weight: 900;
}

ul {
  list-style-type: none;
  display: inline-flex;
  gap: 1rem;
  font-size: 1.2rem;
}

a {
  text-decoration: none;
  color: var(--text-color);
  transition: all 0.6s;
}

a:hover {
  color: var(--brand-color);
}

button {
  background-color: var(--brand-color);
  color: var(--bg-color);
  font-size: 1.2rem;
  font-weight: 500;
  padding: 12px 16px;
  border: none;
  border-radius: 0;
  cursor: pointer;
  transition: all 0.6s;
}

button:hover {
  background-color: var(--brand-hover);
}
</style>
