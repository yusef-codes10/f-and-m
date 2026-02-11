<script setup></script>

<template>
  <nav>
    <h2 class="logo">F&M</h2>
    <ul>
      <li><a href="#">Products</a></li>
      <li><a href="#">Women</a></li>
      <li><a href="#">Men</a></li>
      <li><a href="#">Bags & Accesories</a></li>
      <li><a href="#">Favorites</a></li>
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
}

.logo {
  color: var(--brand-color);
  font-size: clamp(1.3rem, 4vw + 1rem, 2.1rem);
  font-weight: 900;
}

ul {
  list-style-type: none;
  display: inline-flex;
  gap: 1rem;
}

a {
  text-decoration: none;
  color: var(--text-color);
  transition: all 0.6s;
}

a:hover {
  color: var(--brand-color);
}
</style>
