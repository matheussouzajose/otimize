<template>
  <div>
    <div class="grid grid-cols-2 gap-4">
      <form class="grid gap-2 grid-cols-3 p-6">
        <div class="col-span-3">
          <input-field
              @update:value="handleUpdateField"
              name="creditCardNumber"
              label="Número do cartão"
              v-model="formCreditCard.input.creditCardNumber"
              rules="required"
              placeholder="Digite somente os números"
              v-mask="'#### #### #### ####'"
              @blur="handleSelectFlag"
          />
        </div>

        <div class="col-span-3">
          <input-field
              @update:value="handleUpdateField"
              name="creditCardName"
              label="Titular do Cartão"
              v-model="formCreditCard.input.creditCardName"
              rules="required"
              placeholder="Digite o nome impresso no cartão"
          />
        </div>

        <div class="col-span-3">
          <input-field
              @update:value="handleUpdateField"
              name="documentNumber"
              label="CPF/CNPJ do Titular"
              v-model="formCreditCard.input.documentNumber"
              rules="required"
              placeholder="Para emissão da nota fiscal"
          />
        </div>

        <div class="col-span-2 flex flex-col items-start self-stretch gap-2">
          <label for="number" class="text-md font-normal font-sans leading-5">Validade</label>
          <div class="flex w-full gap-2">
            <div class="basis-1/2">
              <select-field
                  id="creditCardMonthValue"
                  name="creditCardMonthValue"
                  v-model="formCreditCard.input.creditCardMonthValue"
                  label-option="Mês"
                  v-validate="'required'"
                  :options-list="months"
                  @update:value="handleUpdateField"
              />
            </div>

            <div class="basis-1/2">
              <select-field
                  id="creditCardYearValue"
                  name="creditCardYearValue"
                  v-model="formCreditCard.input.creditCardYearValue"
                  label-option="Ano"
                  v-validate="'required'"
                  :options-list="years"
                  @update:value="handleUpdateField"
                  :show-msg-error="false"
              />
            </div>
          </div>
        </div>

        <div class="col-span-1">
          <input-field
              @update:value="handleUpdateField"
              name="creditCardCVV"
              label="CVV"
              v-model="formCreditCard.input.creditCardCVV"
              rules="required"
              placeholder="CVV"
              :show-msg-error="false"
          />
        </div>

        <div class="col-span-3">
          <select-field
              id="installmentsNumberValue"
              name="installmentsNumberValue"
              v-model="formCreditCard.input.installmentsNumberValue"
              label-option="Selecione as parcelas"
              v-validate="'required'"
              :options-list="installmentsNumber"
              @update:value="handleUpdateField"
          />
        </div>
      </form>
      <div class="pt-10">
        <div
            class="h-2/3 p-8 flex flex-col justify-between border-2 border-orange-600 bg-gradient-to-r from-orange-100 to-orange-300 rounded">
          <div class="flex justify-between">
            <div>
              <img class="" src="../../assets/images/credit-card-chip.png" alt="chip">
            </div>
            <div>
              <img v-if="flag" :src="flag" alt="flag">
            </div>

          </div>
          <div>{{ formCreditCard.input.creditCardNumber || '#### #### #### ####'}}</div>
          <div class="flex justify-between">
            <div>
              <div>Titular</div>
              <div>{{ formCreditCard.input.creditCardName.toUpperCase() || 'NOME COMPLETO'}}</div>
            </div>
            <div>
              <div>Validade</div>
              <div>
                {{ formCreditCard.input.creditCardMonthValue  || 'MÊS'}} / {{ formCreditCard.input.creditCardYearValue || 'ANO'}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <purchase-detail-factory>
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
import SelectField from '@/components/SelectField/index.vue'
import { mapMutations, mapState } from 'vuex'
import regexFlags from '@/utils/regex-flags'
import flagImage from '@/utils/flag-image'

export default {
  name: 'CheckoutCreditCard',
  components: {
    SelectField,
    InputField,
    IconSvg,
    PurchaseDetailFactory
  },
  data() {
    return {
      flag: '',
      flagImage,
      regexFlags,
      installmentsNumber: [{
        value: 50,
        label: '1x de R$ 50,00'
      }]
    }
  },
  created() {
    this.updateFormCreditCard(
        { field: 'validator', value: this.$validator}
    )
  },
  methods: {
    ...mapMutations(['updateFormInputCreditCard', 'updateFormCreditCard']),

    handleUpdateField({ field, value }) {
      this.updateFormInputCreditCard({
        field, value
      })
    },

    handleSelectFlag(value) {
      for (const flag in this.regexFlags) {
        const newValue = value.replace(/\s+/g, '')
        if (newValue.match(this.regexFlags[flag])) {
          this.flag = this.flagImage[flag]
          return
        }
      }
    }
  },
  computed: {
    ...mapState({
      formCreditCard: 'formCreditCard'
    }),

    months() {
      const months = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
      ]

      return months.map((item, index) => {
        return {
          value: index+1,
          label: item
        }
      })
    },

    years() {
      const date = new Date();
      const year = date.getFullYear();
      const years = [];

      for (let i = 0; i < 10; i++) {
        const nextYear = year + i
        years.push({
          value: nextYear,
          label: nextYear
        })
      }
      return years
    },
  }
}
</script>
