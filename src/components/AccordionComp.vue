<script setup>
import {ref} from 'vue'

const isOpen = ref(false)

const toggleIsOpen = () => {
    isOpen.value = !isOpen.value
}
</script>
<template>
    <div>
        <div class="btn">
            <button @click="toggleIsOpen">
                <i class="fa-solid fa-chevron-up"></i>
                <i class="fa-solid fa-chevron-up"></i>

            </button>
        </div>
        <div class="content" v-if="isOpen">
            Hello dude
        </div>
    </div>
</template>
<style scoped>
</style>