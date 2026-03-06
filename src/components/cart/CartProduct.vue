<script setup>
    import cartStore from '@/stores/cartStore'

    const myCartStore = cartStore()
</script>
<template>
    <div v-for="item in myCartStore" :key="item.product.id">
        <h1>item.product.title</h1>
        
    </div>
</template>
<style scoped>
    
</style>