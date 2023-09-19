<template>
  <div>
    <div class="grid grid-cols-2 gap-4">
      <form class="grid gap-2 grid-cols-3 p-6">
        <div class="col-span-3">
          <InputField
              @update:value="handleUpdateField"
              name="creditCardNumber"
              label="Número do cartão"
              v-model="form.creditCardNumber"
              rules="required"
              placeholder="Digite somente os números"
          />
        </div>

        <div class="col-span-3">
          <InputField
              @update:value="handleUpdateField"
              name="creditCardName"
              label="Titular do Cartão"
              v-model="form.creditCardName"
              rules="required"
              placeholder="Digite o nome impresso no cartão"
          />
        </div>

        <div class="col-span-3">
          <InputField
              @update:value="handleUpdateField"
              name="documentNumber"
              label="Número do cartão"
              v-model="form.documentNumber"
              rules="required"
              placeholder="Digite somente os números"
          />
        </div>

        <div class="col-span-2 flex flex-col items-start self-stretch gap-2">
          <label for="number" class="text-md font-normal font-sans leading-5">Validade</label>
          <div class="flex w-full gap-2">
            <div class="basis-1/2">
              <input
                  type="number"
                  id="number"
                  name="number"
                  v-model="form.number"
                  class=" w-full px-4 py-2 text-sm text-gray-400 rounded focus:outline-none  border border-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Número"
                  v-validate="'required'"
              />
            </div>

            <div class="basis-1/2">
              <input
                  id="number"
                  name="number"
                  v-model="form.number"
                  class=" w-full px-4 py-2 text-sm text-gray-400 rounded focus:outline-none  border border-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Número"
                  v-validate="'required'"
              />
            </div>
          </div>
          <span class="text-red-500" v-if="errors.has('number')">{{ errors.first('number') }}</span>
        </div>

        <div class="col-span-1">
          <InputField
              @update:value="handleUpdateField"
              name="cvv"
              label="CVV"
              v-model="form.cvv"
              rules="required"
              placeholder="CVV"
          />
        </div>

        <div class="col-span-3">
          <InputField
              @update:value="handleUpdateField"
              name="documentNumber"
              label="Número do cartão"
              v-model="form.documentNumber"
              rules="required"
              placeholder="Digite somente os números"
          />
        </div>
      </form>
      <div class="pt-10">
        <div class="h-2/3 p-8 flex flex-col justify-between border-2 bg-orange-100 rounded border-orange-500">
          <div class="flex justify-between">
            <div>IMAGE 1</div>
            <div>IMAGE 2</div>
          </div>
          <div>#### #### #### ####</div>
          <div class="flex justify-between">
            <div>
              <div>Titular</div>
              <div>NOME COMPLETO</div>
            </div>
            <div>
              <div>Validade</div>
              <div>MÊS/ANO</div>
            </div>
          </div>
<!--          <img class="w-full h-full" src="../../assets/images/Rectangle.png" alt="">-->
        </div>
      </div>
    </div>
    <purchase-detail-factory :product="{
    name: 'Valor do produto',
    value: 50
  }">
      <div class="flex gap-2">
        <icon-svg name="CreditCardIcon"/>
        <div class="text-sm">Essa cobrança aparecerá na sua fatura como: PAYT*NomeDoProduto</div>
      </div>
    </purchase-detail-factory>
  </div>
</template>

<script>
import PurchaseDetailFactory from '@/components/PurchaseDetailFactory/index.vue'
import IconSvg from '@/components/Icon/index.vue'
import InputField from '@/components/InputField/index.vue'
import { mapMutations } from  'vuex'

export default {
  name: 'CheckoutCreditCard',
  components: {InputField, IconSvg, PurchaseDetailFactory},
  methods: {
    ...mapMutations(['updateForm']),

    handleUpdateField({ field, value }) {
      this.updateForm({ field, value })
    },
  },
  computed: {
    form() {
      return this.$store.state.form
    },
    errors() {
      return this.$store.state.errors;
    }
  }
}
</script>
