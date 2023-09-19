<template>
  <button
      @click="handleSendForm"
      class="bg-orange-500 mt-6 rounded w-2/3 h-14 text-white text-lg font-medium"
  >
    {{ title }}
  </button>

</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ButtonCard',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState({
      formUser: 'formUser',
      formCreditCard: 'formCreditCard',
    })
  },
  methods: {
    async handleSendForm() {
      const user = await this.formUser.validator.validateAll()
      const creditCard = await this.formCreditCard.validator.validateAll()

      if (user && creditCard) {
        this.$emit('Purchase')
        return
      }

      this.$emit('PurchaseFail')
    },
  }
}
</script>
