<template>
  <button
      @click="handleSendForm"
      class="bg-orange-500 mt-6 rounded w-2/3 h-14 text-white text-lg font-medium"
  >
    {{ title }}
  </button>

</template>

<script>
export default {
  name: 'ButtonCard',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  methods: {
    handleSendForm() {
      this.$store.state.formUser.validator.validateAll().then((value) => {
        console.log('opa', value)
      }).catch((value) => {
        console.log('catch', value)
      })

      this.$store.state.formCreditCard.validator.validateAll().then((value) => {
        console.log('opa', value)
      }).catch((value) => {
        console.log('catch', value)
      })
    },
  }
}
</script>
