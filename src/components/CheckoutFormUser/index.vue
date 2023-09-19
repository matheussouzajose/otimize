<template>
  <div class="w-full sm:w-1/2 bg-white border border-gray-400 rounded p-4 mt-6">
    <form class="grid gap-2 grid-cols-2 p-6">
      <div class="col-span-2">
        <InputField
            @update:value="handleUpdateField"
            name="name"
            label="Nome"
            v-model="form.name"
            rules="required"
            placeholder="Digite seu nome completo"
        />
      </div>

      <div class="col-span-2">
        <InputField
            @update:value="handleUpdateField"
            name="email"
            label="Email"
            v-model="form.email"
            rules="required|email"
            placeholder="Digite seu email"
        />
      </div>

      <div class="col-span-1">
        <InputField
            @update:value="handleUpdateField"
            name="cellphone"
            label="Telefone"
            v-model="form.cellphone"
            rules="required"
            placeholder="(00) x0000-0000"
            v-mask="'(##) #####-####'"
        />
      </div>

      <div class="col-span-1">
        <InputField
            @update:value="handleUpdateField"
            name="zipcode"
            label="CEP"
            v-model="form.zipcode"
            rules="required"
            placeholder="Digite seu CEP"
            v-mask="'#####-###'"
            @blur="handleGetAddress"
        />
      </div>

      <div class="col-span-2">
        <InputField
            @update:value="handleUpdateField"
            name="address"
            label="Endereço"
            v-model="form.address"
            rules="required"
            placeholder="Digite seu endereço"
            :disabled="true"
        />
      </div>

      <div class="flex flex-col items-start self-stretch gap-2 ">
        <label for="number" class="text-md font-normal font-sans leading-5">Número</label>
        <div
            :class="{ 'border-red-500': errors.has('number') && !isCheckedNumber }"
            class="flex w-full border border-gray-300 rounded focus:outline focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        >
          <div class="basis-1/2">
            <input
                type="number"
                id="number"
                name="number"
                :disabled="isCheckedNumber"
                v-model="form.number"
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
        <span class="text-red-500" v-if="errors.has('number') && !isCheckedNumber">{{ errors.first('number') }}</span>
      </div>

      <div class="col-span-1">
        <InputField
            @update:value="handleUpdateField"
            name="complement"
            label="Complemento"
            v-model="form.complement"
            placeholder="Digite seu complemento"
        />
      </div>

      <div class="col-span-2">
        <InputField
            @update:value="handleUpdateField"
            name="neighborhood"
            label="Bairro"
            v-model="form.neighborhood"
            rules="required"
            placeholder="Digite seu bairro"
            :disabled="true"
        />
      </div>

      <div class="col-span-1">
        <InputField
            @update:value="handleUpdateField"
            name="city"
            label="Cidade"
            v-model="form.city"
            rules="required"
            placeholder="Digite sua cidade"
            :disabled="true"
        />
      </div>

      <div class="col-span-1">
        <div class="flex flex-col items-start self-stretch gap-2 ">
          <label for="state" class="text-md font-normal font-sans leading-5">Estado</label>
          <select disabled v-model="stateSelectedOption" class="flex gap-2.5 bg-white self-stretch px-4 py-2 border border-gray-300 rounded focus:outline focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-400">
            <option :value="form.stateValue">{{ form.stateLabel }}</option>
          </select>
        </div>
      </div>

    </form>
    <button @click="handleSendForm" class="bg-orange-500 w-10 h-10">Enviar</button>
  </div>
</template>

<script>
import { mask } from 'vue-the-mask'
import InputField from '@/components/InputField/index.vue'
import { mapMutations } from 'vuex'
import useViaCep from '@/hooks/useViaCep'

const viaCep = useViaCep()

export default {
  name: 'CheckoutFormUser',
  directives: { mask },
  components: {
    InputField
  },
  data() {
    return {
      isCheckedNumber: false,
      stateSelectedOption: '',
    }
  },
  methods: {
    ...mapMutations(['updateForm']),

    handleGetAddress(value) {
      if (!value || value.length < 9) return

      viaCep.getAddressByZipCode(value.replace(/-/g, ''))
    },

    handleUpdateField({ field, value }) {
      this.updateForm({ field, value })
    },

    handleSendForm() {
      this.$validator.validateAll().then((value) => {
        console.log('opa', value)
      }).catch((value) => {
        console.log('catch', value)
      })
    }
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
