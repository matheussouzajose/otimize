<template>
  <div>
    <div class="flex text-gray-500 text-md mb-2">
      Atenção:
    </div>
    <div class="grid grid-cols-3 gap-4 mt-4">
      <card class="col-span-3 md:col-span-1" icon="ClockIcon"
            subtitle="Boletos levam até 3 dias úteis para serem compensados e então terem os produtos liberados."/>

      <card class="col-span-3 md:col-span-1" icon="MailIcon"
            subtitle="Depois do pagamento, fique atento ao seu e-mail para receber os dados de acesso ao produto (verifique também a caixa de SPAM)"/>

      <card class="col-span-3 md:col-span-1" icon="CalendarIcon"
            subtitle="A cada renovação da assinatura enviaremos um novo boleto para que você possa pagar. Assim, você fica sempre em dia sem se preocupar."/>

    </div>

    <purchase-detail-factory :product="product">
      <input-document-number />
    </purchase-detail-factory>
  </div>
</template>

<script>
import Card from '@/components/Card/index.vue'
import PurchaseDetailFactory from "@/components/PurchaseDetailFactory/index.vue";
import InputDocumentNumber from "@/components/PurchaseDetailFactory/InputDocumentNumber.vue";

export default {
  name: 'TicketPayment',
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
