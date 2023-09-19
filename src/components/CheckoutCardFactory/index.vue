<template>
  <component :is="name" :product="product"/>
</template>

<script>
import CheckoutCreditCard from '@/components/CheckoutCreditCard/index.vue'
import CheckoutPix from '@/components/CheckoutPix/index.vue'
import CheckoutTicket from '@/components/CheckoutTicket/index.vue'

export default {
  name: 'CheckoutFactory',
  components: {
    CheckoutCreditCard,
    CheckoutPix,
    CheckoutTicket
  },
  props: {
    name: {
      Type: String,
      required: true
    },
    product: {
      Type: Object,
      required: true
    }
  }
}

</script>
