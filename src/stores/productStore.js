// the pinia store for products
import { defineStore } from 'pinia'
import womenShoes from '@/data/women-shoes.js'

export const productsStore = defineStore('product', () => {
  // * state
  const shoes = womenShoes

  return {
    shoes,
  }
})
