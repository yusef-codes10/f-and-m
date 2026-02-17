// the pinia store for products
import { defineStore } from 'pinia'
import womenShoes from '@/data/women-shoes.js'
import { computed, ref } from 'vue'

export const productsStore = defineStore('product', () => {
  // * state
  const shoes = womenShoes

  const favoriteFlag = ref(false)

  //  * getters
  //   favorite filter (computed)
  const activeFilter = computed(() => {
    // show the favorite if the favorite flag is true
    if (favoriteFlag.value) {
      // we filter favorite products
      shoes = shoes.filter((shoe) => shoe.isFavorite === true)
    }
    return shoes
  })

  return {
    shoes,

    // * getters
    activeFilter,
  }
})
