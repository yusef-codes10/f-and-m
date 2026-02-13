<script setup>
import images from '@/data/pub-images.js'
</script>

<template>
  <div class="images-section">
    <div class="img-container">
      <img v-for="img in images" :key="img.id" :src="img.url" alt="" />
    </div>
  </div>
  <div class="cta-section">
    <p>New arrivals</p>
    <h1>LATEST CREATIONS</h1>
    <div class="discover-btn">
      <button>DISCOVER</button>
    </div>
  </div>
</template>

<style scoped>
.cta-section {
  padding: 2rem 4rem;
  /* border: 2px solid red; */
  /* text-align: center; */
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.cta-section h1 {
  font-size: clamp(1.3rem, 4vw + 1rem, 2.8rem);
  font-weight: 900;
  color: var(--brand-color);
}

.cta-section p {
  text-align: center;
  color: var(--brand-color);
}

.discover-btn {
  display: flex;
  justify-content: center;
}
.discover-btn button {
  background-color: transparent;
  border-color: var(--bg-color);
  border: 2px solid;
  padding: 12px 16px;
  cursor: pointer;
  color: var(--brand-color);
  font-size: 1.2rem;
  font-weight: 600;
  transform: all 0.6s;
}

.discover-btn button:hover {
  background-color: var(--text-color);
  color: var(--bg-color);
}

/* styling the images */
.images-section {
  display: flex;
  justify-content: space-around;
}

.img-container {
  width: 20%;
  aspect-ratio: 1 / 1;
  margin: 1.5rem;
}

.img-container img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}
</style>
