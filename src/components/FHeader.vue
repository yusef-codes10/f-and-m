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
