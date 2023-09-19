<template>
  <div>
    <div class="flex text-gray-500 text-md justify-center">
      Libere sua compra rapidamente pagando com o Pix!
    </div>
    <div class="grid grid-cols-2 wrap gap-4 mt-4">
      <card
          class="col-span-2 md:col-span-1"
          icon="ClockIcon"
          title="Rápida aprovação"
          subtitle="Pagamento em segundos, sem complicação."/>

      <card
          class="col-span-2 md:col-span-1"
          icon="QrCodeIcon"
          title="Facilidade na finalização"
          subtitle="Basta escanear, com o aplicativo do seu banco, o QRCode que iremos gerar para sua compra."/>

      <card
          class="col-span-2 md:col-span-1"
          icon="ShieldIcon"
          title="Maior segurança"
          subtitle="O PIX foi desenvolvido pelo Banco Central para facilitar suas compras e é 100% seguro."/>

      <card
          class="col-span-2 md:col-span-1"
          icon="CalendarIcon"
          title="Tranquilidade na renovação"
          subtitle="A cada renovação da assinatura enviaremos um código PIX. Assim, você fica sempre em dia sem se preocupar."/>
    </div>

    <purchase-detail-factory :product="product">
      <input-document-number />
    </purchase-detail-factory>
  </div>
</template>

<script>
import Card from '@/components/Card/index.vue'
import PurchaseDetailFactory from '@/components/PurchaseDetailFactory/index.vue'
import InputDocumentNumber from '@/components/PurchaseDetailFactory/InputDocumentNumber.vue'

export default {
  name: 'CheckoutPix',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  components: {
    InputDocumentNumber,
    PurchaseDetailFactory,
    Card
  }
}
</script>
