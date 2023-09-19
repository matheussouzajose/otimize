<template>
  <div class="mt-4 flex flex-col gap-4">
    <div class="text-md font-bold">Detalhes da compra</div>
    <div class="flex justify-between">
      <div>{{ product?.name }}</div>
      <div class="self-center">{{ product?.value | money }}   / mês</div>
    </div>

    <slot></slot>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'PurchaseDetailFactory',

  computed: {
    ...mapState({
      product: 'product'
    })
  }
}
</script>
