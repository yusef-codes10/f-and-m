<script setup>
import FHeader from './components/FHeader.vue'
import FFooter from './components/FFooter.vue'
// import HomeView from './views/HomeView.vue'
</script>

<template>
  <FHeader />
  <!-- this is where the viewRouter component is going to be -->
  <!-- <HeroSection />
  <ProducsContainer />
  <PublishSection /> -->
  <!-- <HomeView /> -->
  <RouterView />
  <FFooter />
  <!--  -->
</template>

<style scoped></style>
