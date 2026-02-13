<script setup>
import ToggleBtn from './ToggleBtn.vue'
</script>

<template>
  <footer>
    <div class="help">
      <h3>help</h3>
      <ul>
        <li>Contact us</li>
        <li>Returns & Exchanges Conditions</li>
        <li>Guest order tracking & Returns</li>
        <li>Find a Boutique</li>
        <li>FAQ</li>
      </ul>
    </div>
    <div class="services">
      <h3>services</h3>
      <ul>
        <li>Book an Apoitement</li>
        <li>Product care</li>
      </ul>
    </div>
    <div class="about">
      <h3>about</h3>
      <ul>
        <li>Work with us</li>
      </ul>
    </div>
    <div class="legal">
      <h3>legal</h3>
      <ul>
        <li>Terms of Sale</li>
        <li>Terms of use</li>
        <li>Privacy policy</li>
        <li>Accessability statement</li>
        <li>Site map</li>
        <li>Stop fake</li>
        <li>US MSA statement</li>
        <li>Credits</li>
      </ul>
    </div>
    <hr />
    <div class="links">
      <div class="lang-dark-mode">
        <p>United States ($) - English</p>
        <ToggleBtn />
      </div>
      <div class="socials-links">
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-pinterest"></i>
        <i class="fa-brands fa-tiktok"></i>
        <i class="fa-brands fa-x-twitter"></i>
      </div>
    </div>
    <hr />
    <div class="logo">
      <h2 class="logo">F&M</h2>
    </div>
  </footer>
</template>

<style scoped>
footer {
  height: 100vh;
  /* background-color: seagreen; */

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 2fr auto auto;
  grid-template-areas:
    'help services about legal'
    'links links links links'
    'logo logo logo logo';
}

.help {
  /* background-color: red; */
  grid-area: help;
}

.services {
  /* background-color: green; */
  grid-area: services;
}
.about {
  /* background-color: yellow; */
  grid-area: about;
}
.legal {
  /* background-color: blue; */
  grid-area: legal;
}
.links {
  /* background-color: blueviolet; */
  grid-area: links;
}
.logo {
  /* background-color: tomato; */
  grid-area: logo;
}
.help,
.services,
.about,
.legal,
ul {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

ul {
  list-style-type: none;
  padding: 0;
}

.links {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: min(2rem, 8%);
}

.lang-dark-mode {
  display: inline-flex;
  gap: 3rem;
}

i {
  font-size: 1.7rem;
  margin: 0 1rem;
  cursor: pointer;
}

.logo {
  margin: 0 auto;
  font-size: 3rem;
  padding: 2rem;
  color: var(--brand-color);
}

@media (max-width: 710px) {
  footer {
    height: 100vh;
    /* background-color: seagreen; */

    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
      'help'
      'services'
      'about'
      'legal'
      'links'
      'logo';
  }
  .links,
  .lang-dark-mode {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
  }
}
</style>
