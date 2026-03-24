<script setup>
import { cartStore } from '@/stores/cartStore'
// import FProduct from '@/components/FProduct.vue'
import CartProduct from '@/components/cart/CartProduct.vue'

const myCartStore = cartStore()
</script>
<template>
  <div class="cart-page">
    <h1 class="title">The products in cart</h1>
    <div class="subTotal">
      {{ myCartStore.cartTotolPrice.total }}
    </div>
    <div class="item-count">
      {{ myCartStore.cartTotolPrice.count }}
    </div>
    <div class="cart-flex">
      <!-- <FProduct v-for="item in myCartStore.cartItems" :key="item.product.id" :product="item.product" /> -->
      <CartProduct v-for="item in myCartStore.cartItems" :key="item.product.id" :item="item" />
    </div>
  </div>
</template>
<style scoped>
.cart-page {
  min-height: 100dvh;
  /* background-color: sienna; */
}

.cart-flex {
  display: flex;
  flex-direction: column;
}

.subTotal, .item-count {
  margin: 0.5rem 2rem;
}
</style>

<!-- TODO:  Since it serves different functionality than women/bags/favs. it should have it's own unique layout-->
<!-- TODO: delete from cart and that's it -->
