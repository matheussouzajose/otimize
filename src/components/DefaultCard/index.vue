<template>
  <div class="gap-2 p-6 flex flex-col flex-wrap items-center border border-gray-400 rounded">
    <div>
      <icon-svg :name="icon" width="48" height="40" />
    </div>
    <div v-if="title"
         class="text-sm font-semibold"
    >
      {{ title }}
    </div>
    <div
        class="text-xs font-normal"
        :class="{'text-xl': !title}"
    >
      {{ subtitle }}
    </div>
  </div>
</template>

<script>
import IconSvg from '@/components/Icon/index.vue'

export default {
  name: 'CardInfo',
  components: {
    IconSvg
  },
  props: {
    icon: {
      type: String
    },
    title: {
      type: String
    },
    subtitle: {
      type: String
    }
  }
}

</script>
