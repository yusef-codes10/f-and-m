// the pinia store for products
import { defineStore } from 'pinia'
import womenShoes from '@/data/women-shoes.js'
import bags from '@/data/bags.js'
import { computed, ref } from 'vue'

export const productsStore = defineStore('product', () => {
  // * state
  const shoes = ref(womenShoes)
  const bags = ref(bags)

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
  // ! this is for the favorite view
  const favoriteShoes = computed(() => shoes.value.filter((shoe) => shoe.isFavorite === true))

  return {
    shoes,
    bags,

    // * actions
    toggleFavoriteFilter,
    favoriteShoes,

    // * getters
    activeFilter,
  }
})

// TODO: 1- add the live search btn (search and filter shoes types (pumps, boots..))  2- add more data like men shoes and bags. 3- add select options for the filter add more filter
