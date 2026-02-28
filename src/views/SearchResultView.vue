<script setup>
// Access the search query from the route itself
import { useRoute } from 'vue-router';
import {computed} from 'vue'

const route = useRoute()

// better way to access the query is with computed
const searchQuery = computed( () =>{
    return route.query.q?.toLowerCase() || ''
})

</script>
<template>
    <div class="search">
        <p>Search results for {{searchQuery}}</p>
        <div class="result" ></div>
    </div>
</template>
<style scoped>
    .search {
        height: 100vh;
        background-color: aqua;
    }
</style>

<!-- TODO: the professional way is to render all the search results from the navbar to the new searchResilt view using router queries -->