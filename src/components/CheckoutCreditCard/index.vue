<template>
  <div>
    <div class="grid grid-cols-2 gap-4">
      <form class="grid gap-2 grid-cols-3 p-6">
        <div class="col-span-3">
          <input-field
              @update:value="handleUpdateField"
              name="creditCardNumber"
              label="Número do cartão"
              v-model="form.creditCardNumber"
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
              v-model="form.creditCardName"
              rules="required"
              placeholder="Digite o nome impresso no cartão"
          />
        </div>

        <div class="col-span-3">
          <input-field
              @update:value="handleUpdateField"
              name="documentNumber"
              label="CPF/CNPJ do Titular"
              v-model="form.documentNumber"
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
                  v-model="form.creditCardMonthValue"
                  label-option="Mês"
                  v-validate="'required'"
                  :options-list="monthList"
                  @update:value="handleUpdateField"
              />
            </div>

            <div class="basis-1/2">
              <select-field
                  id="creditCardYearValue"
                  name="creditCardYearValue"
                  v-model="form.creditCardYearValue"
                  label-option="Ano"
                  v-validate="'required'"
                  :options-list="yearList"
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
              v-model="form.creditCardCVV"
              rules="required"
              placeholder="CVV"
              :show-msg-error="false"
          />
        </div>

        <div class="col-span-3">
          <select-field
              id="installmentsNumberValue"
              name="installmentsNumberValue"
              v-model="form.installmentsNumberValue"
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
          <div>{{ form.creditCardNumber || '#### #### #### ####'}}</div>
          <div class="flex justify-between">
            <div>
              <div>Titular</div>
              <div>{{ form.creditCardName.toUpperCase() || 'NOME COMPLETO'}}</div>
            </div>
            <div>
              <div>Validade</div>
              <div>
                {{ form.creditCardMonthValue  || 'MÊS'}} / {{ form.creditCardYearValue || 'ANO'}}
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
import SelectField from "@/components/SelectField/index.vue";
import { mapMutations } from 'vuex'
import visa from '@/assets/images/credit-card-flag-visa.png'

export default {
  name: 'CheckoutCreditCard',
  components: {SelectField, InputField, IconSvg, PurchaseDetailFactory},
  data() {
    return {
      product: {
        name: 'Valor do produto',
        value: 50
      },
      flag: '',
      flagImage: {
        visa: visa,
        mastercard: 'MASTERCARD',
        diners: 'DINERES',
        amex: 'AMEX',
        hipercard: 'HIPERCARD',
        elo: 'ELO',
      },
      regexFlags: {
        visa: /^4[0-9]{15}$/,
        mastercard: /^(50|5[6-9]|6007|6220|6304|6703|6708|6759|676[1-3])|((5(([1-2]|[4-5])[0-9]{8}|0((1|6)([0-9]{7}))|3(0(4((0|[2-9])[0-9]{5})|([0-3]|[5-9])[0-9]{6})|[1-9][0-9]{7})))|((508116)\\d{4,10})|((502121)\\d{4,10})|((589916)\\d{4,10})|(2[0-9]{15})|(67[0-9]{14})|(506387)\\d{4,10})/,
        diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
        amex: /^3[47][0-9]{13}$/,
        hipercard: /^606282|^3841(?:[0|4|6]{1})0/,
        elo: /^4011(78|79)|^43(1274|8935)|^45(1416|7393|763(1|2))|^50(4175|6699|67[0-6][0-9]|677[0-8]|9[0-8][0-9]{2}|99[0-8][0-9]|999[0-9])|^627780|^63(6297|6368|6369)|^65(0(0(3([1-3]|[5-9])|4([0-9])|5[0-1])|4(0[5-9]|[1-3][0-9]|8[5-9]|9[0-9])|5([0-2][0-9]|3[0-8]|4[1-9]|[5-8][0-9]|9[0-8])|7(0[0-9]|1[0-8]|2[0-7])|9(0[1-9]|[1-6][0-9]|7[0-8]))|16(5[2-9]|[6-7][0-9])|50(0[0-9]|1[0-9]|2[1-9]|[3-4][0-9]|5[0-8]))/,
      }
    }
  },
  created() {
    this.updateForm({ field: 'validatorPayment', value: this.$validator})
  },
  methods: {
    ...mapMutations(['updateForm']),

    handleUpdateField({field, value}) {
      this.updateForm({field, value})
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
    monthList() {
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

    yearList() {
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

    installmentsNumber() {
      return [{
        value: 50,
        label: '1x de R$ 50,00'
      }]
    },

    form() {
      return this.$store.state.form
    },
    errors() {
      return this.$store.state.errors;
    }
  }
}
</script>
