<template>
  <h1>Hello, {{ cart.val }}</h1>
</template>

<script>
import {defineComponent} from "vue";
import {useCartStore} from "@/store/cart";

export default defineComponent({
  name: "TestComp",
  setup(){
    const cart = useCartStore()
    return {cart}
  }
})
</script>

<style scoped>

</style>