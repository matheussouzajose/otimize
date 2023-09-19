<template>
  <div class="bg-gray-100 h-screen">
    <checkout-page />
  </div>
</template>

<script>

import CheckoutPage from "@/views/Checkout/index.vue";

export default {
  name: 'App',
  components: {
    CheckoutPage
  }
}
</script>
