// the pinia store for products
import { defineStore } from 'pinia'
import womenShoes from '@/data/women-shoes.js'
import { computed } from 'vue'

export const productsStore = defineStore('product', () => {
  // * state
  const shoes = womenShoes

  //  * getters
  //   favorite filter (computed)
  const activeFilter = computed(() => {
    shoes = shoes.filter((shoe) => shoe.isFavorite === true)
    return shoes
  })

  return {
    shoes,
  }
})
