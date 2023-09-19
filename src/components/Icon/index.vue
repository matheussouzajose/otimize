<template>
  <component :is="name" v-bind="$props"/>
</template>

<script>
import CreditCardIcon from '@/components/Icon/CreditCardIcon.vue'
import PixIcon from '@/components/Icon/PixIcon.vue'
import TicketIcon from '@/components/Icon/TicketIcon.vue'
import ClockIcon from '@/components/Icon/ClockIcon.vue'
import QrCodeIcon from '@/components/Icon/QrCodeIcon.vue'
import ShieldIcon from '@/components/Icon/ShieldIcon.vue'
import CalendarIcon from '@/components/Icon/CalendarIcon.vue'
import MailIcon from '@/components/Icon/MailIcon.vue'

export default {
  name: 'IconSvg',
  components: {
    CreditCardIcon,
    PixIcon,
    TicketIcon,
    ClockIcon,
    QrCodeIcon,
    ShieldIcon,
    CalendarIcon,
    MailIcon
  },
  props: {
    name: { type: String, required: true }
  }
}
</script>
