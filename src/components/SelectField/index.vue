<template>
  <div class="flex flex-col items-start self-stretch">
    <label class="text-md font-normal font-sans leading-5" :for="name">{{ label }}</label>
    <select
        :id="name"
        :name="name"
        v-model="input"
        v-validate="rules"
        :disabled="disabled"
        :placeholder="placeholder"
        class="flex gap-2.5 self-stretch px-4 py-2 bg-white border border-gray-300 rounded focus:outline focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-400"
        :class="{'border-red-500 focus:ring-red-500 focus:border-red-500': errors.has(name)}"
    >
      <option value="" disabled>{{ labelOption }}</option>
      <option v-for="option in optionsList" :key="option.value" :value="option.value">{{ option.label }}</option>
    </select>
    <span class="text-red-500" v-if="errors.has(name) && showMsgError">{{ errors.first(name) }}</span>
  </div>
</template>

<script>
export default {
  name: 'SelectField',
  props: {
    name: String,
    label: String,
    value: [String, Number],
    rules: String,
    placeholder: String,
    disabled: {
      type: Boolean,
      default: false
    },
    showMsgError: {
      type: Boolean,
      default: true
    },
    labelOption: String,
    optionsList: Array
  },
  inject: ['$validator'],
  computed: {
    errors() {
      return this.$validator.errors;
    },
    input: {
      get() {
        return this.value
      },
      set(newValue) {
        this.$emit('update:value', { field: this.name, value: newValue })
      }
    }
  }
};
</script>
