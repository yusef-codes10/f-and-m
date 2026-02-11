<script setup></script>

<template>
  <div class="vid-container">
    <video autoplay muted loop>
      <source src="/videos/hero.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div class="hero-section">
      <i class="bi bi-play"></i>
      <i class="bi bi-pause"></i>
      <i class="bi bi-volume-mute"></i>
      <i class="bi bi-volume-up"></i>
    </div>
  </div>
</template>

<style scoped>
.vid-container {
  height: calc(100vh - 81px);
  width: 100%;
}

video {
  width: 100%;
  height: 100%;
  object-fit: cover; /* like background-size: cover */
}
</style>
