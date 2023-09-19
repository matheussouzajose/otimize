<template>
  <div class="flex flex-col gap-2">
    <InputField
        class="w-2/3"
        name="documentNumber"
        label="CPF/CNPJ (Para emissão de Nota Fiscal)"
        rules="required"
        v-model="documentNumber"
    />
  </div>
</template>

<script>
import InputField from "@/components/InputField/index.vue";

export default {
  name: 'InputDocumentNumber',
  components: {InputField},
  data() {
    return {
      documentNumber: ''
    }
  }
}
</script>
