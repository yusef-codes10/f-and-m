// the pinia store for products
import { defineStore } from 'pinia'
import womenShoes from '@/data/women-shoes.js'
import { computed, ref } from 'vue'

export const productsStore = defineStore('product', () => {
  // * state
  const shoes = ref(womenShoes)

  const favoriteFlag = ref(false)

  // * actions
  // toggle the favorite should be in the store
  const toggleFavoriteFilter = () => {
    favoriteFlag.value = !favoriteFlag.value
  }

  //  * getters
  //   favorite filter (computed)
  const activeFilter = computed(() => {
    // show the favorite if the favorite flag is true
    if (favoriteFlag.value) {
      // we filter favorite products
      return shoes.value.filter((shoe) => shoe.isFavorite === true)
    }
    return shoes.value
  })

  return {
    shoes,

    // * actions
    toggleFavoriteFilter,

    // * getters
    activeFilter,
  }
})
