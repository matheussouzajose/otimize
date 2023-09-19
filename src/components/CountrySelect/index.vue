<template>
  <select
      v-model="selectedOption"
      @change="emitSelectedValue"
      class="border border-gray-300 rounded-lg bg-white text-gray-500 text-sm p-1 md:p-2.5 focus:outline-none focus:border-brand-main focus:ring-1 focus:ring-brand-main">
    <option value="">Alterar país</option>
    <option value="portuguese">Português</option>
    <option value="english">Inglês</option>
  </select>
</template>

<script>
export default {
  name: 'CountrySelect',
  data() {
    return {
      selectedOption: ''
    }
  },
  methods: {
    emitSelectedValue() {
      this.$emit("selected", this.selectedOption)
    }
  }
}
</script>

