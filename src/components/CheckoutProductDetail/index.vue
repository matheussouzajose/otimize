<template>
  <div class="w-full sm:w-1/2 bg-white border border-gray-400 rounded mt-6">
    <div class="relative p-4">
      <div class="flex mb-4">
        <div class="w-2/6">
          <img class="w-40 h-40 rounded" :src="product.image" :alt="product.name">
        </div>
        <div class="w-4/6 ml-2 pt-12">
          <div class="text-sm md:text-base font-bold leading-normal text-gray-900">
            {{product.name}}
          </div>
          <div class="text-md md:text-xl font-semibold leading-normal text-brand-main">
            {{ product.value | money }} / {{ product.plan.toLowerCase() }}
          </div>
          <div class="text-xs font-normal leading-normal">
            {{ product.message }}
          </div>
        </div>
      </div>

      <country-select @selected="handleSelectedOption" class="absolute top-4 right-4" />
    </div>
    <div class="bg-brand-main text-white p-2 w-full h-10">contatolivrediet@gmail.com</div>
  </div>
</template>

<script>

import CountrySelect from '@/components/CountrySelect/index.vue'
import { mapState } from 'vuex'

export default {
  name: 'CheckoutProductDetail',
  components: {
    CountrySelect
  },
  computed: {
    ...mapState({
      product: 'product'
    })
  },
  methods: {
    handleSelectedOption(value) {
      console.log('country selected: ', value)
    }
  }
}
</script>
