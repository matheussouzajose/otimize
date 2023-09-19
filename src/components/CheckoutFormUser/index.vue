<template>
  <div class="w-full sm:w-1/2 bg-white border border-gray-400 rounded p-4 mt-6">
    <form class="grid gap-2 grid-cols-2 p-6">
      <div class="col-span-2">
        <InputField
            @update:value="handleUpdateField"
            @focus="handleFocus"
            name="name"
            label="Nome"
            v-model="formUser.input.name"
            rules="required"
            placeholder="Digite seu nome completo"
        />
      </div>

      <div class="col-span-2">
        <InputField
            @update:value="handleUpdateField"
            @focus="handleFocus"
            name="email"
            label="Email"
            v-model="formUser.input.email"
            rules="required|email"
            placeholder="Digite seu email"
        />
      </div>

      <div class="col-span-1">
        <InputField
            @update:value="handleUpdateField"
            @focus="handleFocus"
            name="cellphone"
            label="Telefone"
            v-model="formUser.input.cellphone"
            rules="required"
            placeholder="(00) x0000-0000"
            v-mask="'(##) #####-####'"
        />
      </div>

      <div class="col-span-1">
        <InputField
            @update:value="handleUpdateField"
            @focus="handleFocus"
            name="zipcode"
            label="CEP"
            v-model="formUser.input.zipcode"
            rules="required"
            placeholder="Digite seu CEP"
            v-mask="'#####-###'"
            @blur="handleGetAddress"
        />
      </div>

      <div class="col-span-2">
        <InputField
            @update:value="handleUpdateField"
            @focus="handleFocus"
            name="address"
            label="Endereço"
            v-model="formUser.input.address"
            rules="required"
            placeholder="Digite seu endereço"
            :disabled="true"
        />
      </div>

      <div class="flex flex-col items-start self-stretch gap-2 ">
        <label for="number" class="text-md font-normal font-sans leading-5">Número</label>
        <div
            class="flex w-full border border-gray-300 rounded focus:outline focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        >
          <div class="basis-1/2">
            <input
                type="number"
                id="number"
                name="number"
                :disabled="isCheckedNumber"
                v-model="formUser.input.number"
                class=" w-full px-4 py-2 text-sm text-gray-400 rounded focus:outline-none focus:border-transparent"
                placeholder="Número"
                v-validate="'required'"
            />
          </div>

          <div class="basis-1/2 flex items-center">
            <label for="is-checked-number" class="text-md font-normal font-sans leading-5 text-sm">
              <input
                  id="is-checked-number"
                  type="checkbox"
                  v-model="isCheckedNumber"
              />
              <span class="ml-2">Sem número</span>
            </label>
          </div>
        </div>
      </div>

      <div class="col-span-1">
        <InputField
            @update:value="handleUpdateField"
            @focus="handleFocus"
            name="complement"
            label="Complemento"
            v-model="formUser.input.complement"
            placeholder="Digite seu complemento"
        />
      </div>

      <div class="col-span-2">
        <InputField
            @update:value="handleUpdateField"
            @focus="handleFocus"
            name="neighborhood"
            label="Bairro"
            v-model="formUser.input.neighborhood"
            rules="required"
            placeholder="Digite seu bairro"
            :disabled="true"
        />
      </div>

      <div class="col-span-1">
        <InputField
            @update:value="handleUpdateField"
            @focus="handleFocus"
            name="city"
            label="Cidade"
            v-model="formUser.input.city"
            rules="required"
            placeholder="Digite sua cidade"
            :disabled="true"
        />
      </div>

      <div class="col-span-1">
        <div class="flex flex-col items-start self-stretch gap-2 ">
          <label for="state" class="text-md font-normal font-sans leading-5">Estado</label>
          <select disabled v-model="stateSelectedOption" class="flex gap-2.5 bg-white self-stretch px-4 py-2 border border-gray-300 rounded focus:outline focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-400">
            <option :value="formUser.input.stateValue">{{ formUser.input.stateLabel }}</option>
          </select>
        </div>
      </div>
    </form>
  </div>
</template>

<script>

import InputField from '@/components/InputField/index.vue'
import { mapMutations, mapState } from 'vuex'
import useViaCep from '@/hooks/useViaCep'

const viaCep = useViaCep()

export default {
  name: 'CheckoutFormUser',
  components: {
    InputField
  },
  data() {
    return {
      isCheckedNumber: false,
      stateSelectedOption: '',
    }
  },
  created() {
    this.updateFormUser({ field: 'validator', value: this.$validator})
  },
  watch: {
    'formUser.input.email'() {
      if (this.formUser.input.name) {
        this.$emit('AddToCart')
      }
    },
    'formUser.input.cellphone'() {
      if (this.formUser.input.name) {
        this.$emit('AddToCart')
      }
    },
    'formUser.input.zipcode'() {
      if (this.formUser.input.number) {
        this.$emit('number')
      }
    },
    'formUser.input.number'() {
      if (this.formUser.input.zipcode) {
        this.$emit('number')
      }
    }
  },
  methods: {
    ...mapMutations(['updateFormInputUser', 'updateFormUser']),

    handleGetAddress(value) {
      if (!value || value.length < 9) return

      viaCep.getAddressByZipCode(value.replace(/-/g, ''))
    },

    handleFocus() {
      this.$emit('InitiateCheckout')
    },

    handleUpdateField({ field, value }) {
      this.updateFormInputUser({ field, value })
    },
  },
  computed: {
    ...mapState({
      formUser: 'formUser'
    })
  }
}

</script>
