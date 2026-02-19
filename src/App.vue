<script setup>
import FHeader from './components/FHeader.vue'
import HeroSection from './components/HeroSection.vue'
import ProducsContainer from './components/ProducsContainer.vue'
import FFooter from './components/FFooter.vue'
import PublishSection from './components/PublishSection.vue'
import HomeView from './views/HomeView.vue'
</script>

<template>
  <FHeader />
  <!-- this is where the viewRouter component is going to be -->
  <!-- <HeroSection />
  <ProducsContainer />
  <PublishSection /> -->
  <HomeView />
  <FFooter />
  <!--  -->
</template>

<style scoped></style>
