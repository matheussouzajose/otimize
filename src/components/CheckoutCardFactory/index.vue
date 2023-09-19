<template>
  <component :is="name"/>
</template>

<script>
import CheckoutCreditCard from '@/components/CheckoutFormPayment/CreditCard.vue'
import CheckoutPix from '@/components/CheckoutFormPayment/Pix.vue'
import CheckoutTicket from '@/components/CheckoutFormPayment/Ticket.vue'

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
    }
  }
}

</script>
