<script setup>
import {ref} from 'vue'

const isOpen = ref(false)

const toggleIsOpen = () => {
    isOpen.value = !isOpen.value
}
</script>
<template>
    <div class="accordion">
        <div class="accordion-header">
            <div class="accordion-title"></div>
            <button @click="toggleIsOpen">
                <i class="fa-solid fa-chevron-up"></i>
                <i class="fa-solid fa-chevron-up"></i>

            </button>
        </div>
        <div class="accordion-content" v-if="isOpen">
            Hello dude
        </div>
    </div>
</template>
<style scoped>

.accordion {
    height: 50px;
    width: 300px;
    background-color: aqua;
}
</style>