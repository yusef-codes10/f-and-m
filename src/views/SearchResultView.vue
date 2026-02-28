<script setup>
// Access the search query from the route itself
import { useRoute } from 'vue-router';
import {computed} from 'vue'
import { productsStore } from '@/stores/productStore'

// we have to set the store
const myStore = productsStore()

const route = useRoute()

// better way to access the query is with computed
const searchQuery = computed( () =>{
    return route.query.q?.toLowerCase() || ''
})

// filterd products here
const filterdProducts = computed((product) => {
    const titles = myStore.allProducts.map(e => e.title)
    return titles.filter(
        product.title.toLowerCase() === searchQuery.value
    )
})

console.log(myStore.allProducts.map(e => e.title));
</script>
<template>
    <div class="search">
        <p>Search results for {{searchQuery}}</p>
        <div class="result" v-if="filterdProducts.length"></div>
        <div class="not-found" v-else>Page not found</div>
    </div>
</template>
<style scoped>
    .search {
        height: 100vh;
        background-color: aqua;
    }
</style>

<!-- TODO: the professional way is to render all the search results from the navbar to the new searchResilt view using router queries -->