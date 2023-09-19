<template>
  <div class="w-full sm:w-1/2  bg-white border border-gray-400 rounded p-4 ">
    <div class="flex justify-center flex-wrap gap-6 mt-6">
      <payment-card
          @selected="handleSelected"
          :name="creditCard.name"
          :title="creditCard.title"
          :icon="creditCard.icon"
          :active="active === creditCard.name"
      />

      <payment-card
          @selected="handleSelected"
          :name="pixCard.name"
          :title="pixCard.title"
          :icon="pixCard.icon"
          :active="active === pixCard.name"
      />

      <payment-card
          @selected="handleSelected"
          :name="ticketCard.name"
          :title="ticketCard.title"
          :icon="ticketCard.icon"
          :active="active === ticketCard.name"
      />
    </div>

    <div class="py-6 flex flex-col">
      <checkout-factory :name="active" />

      <button-card title="Comprar agora" />

      <div class="mt-10 self-center">
        <img :src="securityImg" alt="security">
      </div>
    </div>

  </div>
</template>

<script>
import PaymentCard from '@/components/CheckoutFormPayment/PaymentCard.vue'
import CheckoutFactory from '@/components/CheckoutCardFactory/index.vue'
import ButtonCard from '@/components/CheckoutFormPayment/ButtonPayment.vue'
import securityImg from '@/assets/images/otimize-security.png'

export default {
  name: 'CheckoutFormPayment',
  components: {
    ButtonCard,
    CheckoutFactory,
    PaymentCard
  },
  data() {
    return {
      securityImg,
      active: 'CheckoutCreditCard',
      creditCard: {
        name: 'CheckoutCreditCard',
        title: 'Cartão de crédito',
        icon: 'CreditCardIcon',
      },
      pixCard: {
        name: 'CheckoutPix',
        title: 'Pix',
        icon: 'PixIcon',
      },
      ticketCard: {
        name: 'CheckoutTicket',
        title: 'Boleto',
        icon: 'TicketIcon',
      }
    }
  },
  methods: {
    handleSelected(value) {
      this.active = value
    }
  }
}
</script>
