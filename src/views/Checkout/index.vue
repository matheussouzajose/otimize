<template>
  <div class="flex flex-col justify-center items-center space-y-2 bg-gray-100">
    <checkout-product-detail />
    <checkout-form-user />
    <checkout-form-payment />

    <footer class="w-full flex flex-col items-center bg-gray-100">
      <div class="text-sm font-normal leading-5 mt-10">*OBS.: Taxa de 2.99% a.m.</div>
      <div class="mt-12">
        <a href="#" class="text-sm font-normal leading-5 text-blue-600 hover:underline">Políticas de Privacidade</a>
        <span class="text-sm font-normal leading-5">| Esta compra será processada pela PayT</span>
      </div>
    </footer>
  </div>
</template>

<script>

import CheckoutProductDetail from '@/components/CheckoutProductDetail/index.vue'
import CheckoutFormPayment from '@/components/CheckoutFormPayment/index.vue'
import CheckoutFormUser from '@/components/CheckoutFormUser/index.vue'

export default {
  name: 'CheckoutPage',
  components: {
    CheckoutFormUser,
    CheckoutFormPayment,
    CheckoutProductDetail
  }
}
</script>
