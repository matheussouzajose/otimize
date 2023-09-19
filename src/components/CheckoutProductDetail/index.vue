<template>
  <div class="w-full sm:w-1/2 bg-white border border-gray-400 rounded mt-6">
    <div class="relative p-4">
      <div class="flex mb-4">
        <div class="w-2/6">
          <img class="w-40 h-40 rounded" src="../../assets/images/otimize-product.png" alt="product">
        </div>
        <div class="w-4/6 ml-2 pt-12">
          <div class="text-sm md:text-base font-bold leading-normal text-gray-900">
            Nome do produto
          </div>
          <div class="text-md md:text-xl font-semibold leading-normal text-brand-main">
            R$ 50,00 / mês
          </div>
          <div class="text-xs font-normal leading-normal">
            Plano mensal com renovação automática
          </div>
        </div>
      </div>

      <country-select @selected="handleSelectedOption" class="absolute top-4 right-4" />
    </div>
    <div class="bg-brand-main text-white p-2 w-full h-10">contatolivrediet@gmail.com</div>
  </div>
</template>

<script>

import CountrySelect from "@/components/CountrySelect/index.vue";

export default {
  name: 'CheckoutProductDetail',
  components: {CountrySelect},
  methods: {
    handleSelectedOption(value) {
      console.log('country selected: ', value)
    }
  }
}
</script>
