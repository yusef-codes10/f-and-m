<script setup>
// Access the search query from the route itself
import { useRoute } from 'vue-router';

const route = useRoute()


</script>
<template>
    <div class="search">
        <p>Search results for {{route.query.q}}</p>
    </div>
</template>
<style scoped>
    .search {
        height: 100vh;
        background-color: aqua;
    }
</style>

<!-- TODO: the professional way is to render all the search results from the navbar to the new searchResilt view using router queries -->