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
      <checkout-factory :name="active" :product="product" />

      <button @click="handleSendForm" class="bg-orange-500 mt-6 rounded w-2/3 h-14 text-white text-lg font-medium">
        Comprar Agora
      </button>

      <div class="mt-10 self-center">
        <img src="../../assets/images/otimize-security.png">
      </div>
    </div>

  </div>
</template>

<script>
import PaymentCard from '@/components/CheckoutPaymentCard/index.vue'
import CheckoutFactory from '@/components/CheckoutCardFactory/index.vue'

export default {
  name: 'CheckoutFormPayment',
  components: {
    CheckoutFactory,
    PaymentCard
  },
  data() {
    return {
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
      },
      product: {
        name: 'Nome do produto',
        value: 50
      }
    }
  },
  watch: {
    active(value) {
      console.log('active', value)
    }
  },
  methods: {
    handleSelected(value) {
      this.active = value
    },
    handleSendForm() {
      this.$store.state.form.validatorUser.validateAll().then((value) => {
        console.log('opa', value)
      }).catch((value) => {
        console.log('catch', value)
      })

      this.$store.state.form.validatorPayment.validateAll().then((value) => {
        console.log('opa', value)
      }).catch((value) => {
        console.log('catch', value)
      })
    }
  }
}
</script>
