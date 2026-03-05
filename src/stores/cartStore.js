// pinia store for the cart system
import { defineStore } from "pinia";
import {ref} from 'vue'


export const cartStore = defineStore('cart', () => {
    // * state
    const cartItems = ref([])


    // * actions
    const addToCart = (product, q) => {
        cartItems.value.push({product, quantity: q})
        console.log(`this is your cart ${cartItems.value[0].product.title} and the qty is ${cartItems.value[0].quantity}`);
        if (!checkProduct(product.id)) {
            console.log('does not exit');
        }
    }

    const checkProduct = (id) => {
        console.log(`this is it ${cartItems.value.find(pro => pro.id === id)}`);
        return cartItems.value.find(pro => pro.id === id)
    }


    return{
        cartItems,


        addToCart,
        checkProduct,
    }
})

// TODO: the cart logic such as add/increase quantity