<template>
  <div class="flex flex-col items-start self-stretch gap-2">
    <label class="text-md font-normal font-sans leading-5" :for="name">{{ label }}</label>
    <input
        :id="name"
        :name="name"
        v-model="input"
        v-validate="rules"
        :disabled="disabled"
        class="flex gap-2.5 self-stretch px-4 py-2 border border-gray-300 rounded focus:outline focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-400"
        :class="{'border-red-500 focus:ring-red-500 focus:border-red-500': errors.has(name)}"
        :placeholder="placeholder"
        @blur="onBlur"
        @focus="focus"
    />
    <span class="text-red-500" v-if="errors.has(name) && showMsgError">{{ errors.first(name) }}</span>
  </div>
</template>

<script>
export default {
  name: 'InputField',
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
    }
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
  },
  methods: {
    onBlur() {
      this.$emit('blur', this.value)
    },
    focus() {
      this.$emit('focus')
    }
  }
};
</script>
