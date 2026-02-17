// the pinia store for products
import { defineStore } from 'pinia'
import { womenShoes } from '@/data/women-shoes.js'

export const myStore = defineStore('product', () => {
  // * state
  const shoes = womenShoes

  return {
    womenShoes,
  }
})
