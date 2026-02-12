<script setup></script>

<template>
  <footer>
    <div class="help"></div>
    <div class="services"></div>
    <div class="about"></div>
    <div class="legal"></div>
    <div class="links"></div>
    <div class="logo"></div>
  </footer>
</template>

<style scoped>
footer {
  height: 100vh;
  background-color: seagreen;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas:
    'help services about legal'
    'links links links links'
    'logo logo logo logo';
}

.help {
  background-color: red;
  grid-area: help;
}

.services {
  background-color: green;
  grid-area: services;
}
.about {
  background-color: yellow;
  grid-area: about;
}
.legal {
  background-color: blue;
  grid-area: legal;
}
.links {
  background-color: blueviolet;
  grid-area: links;
}
.logo {
  background-color: tomato;
  grid-area: logo;
}
</style>
