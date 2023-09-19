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
export default {
  name: 'PurchaseDetailFactory',
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>
