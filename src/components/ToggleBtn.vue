<script setup>
import { ref } from 'vue'
const isOn = ref(false)
</script>

<template>
  <label class="switch">
    <input type="checkbox" v-model="isOn" />
    <span class="slider"></span>
  </label>

  <p>{{ isOn }}</p>
</template>

<style>
.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 25px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  background-color: #ccc;
  border-radius: 25px;
  inset: 0;
  transition: 0.3s;
}

.slider::before {
  content: '';
  position: absolute;
  height: 19px;
  width: 19px;
  left: 3px;
  top: 3px;
  background: white;
  border-radius: 50%;
  transition: 0.3s;
}

input:checked + .slider {
  background-color: #4caf50;
}

input:checked + .slider::before {
  transform: translateX(25px);
}
</style>
