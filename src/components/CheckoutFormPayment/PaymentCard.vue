<template>
  <div>
    <nav
        @click="emitSelectedValue"
        class="w-36 h-16 flex cursor-pointer p-2 justify-center align-center bg-white border border-gray-300 rounded-lg"
        :class="{'border-orange-600 bg-gradient-to-r from-orange-100 to-orange-300': active}"
    >
      <div class="flex flex-col p-2 items-start text-gray-100">
        <icon-svg :name="icon" width="48" height="40" />
      </div>
      <div class="text-xs font-medium text-gray-500 self-center">
        {{ title }}
      </div>
    </nav>
  </div>

</template>

<script>
import IconSvg from "@/components/Icon/index.vue";

export default {
  name: 'PaymentCard',
  components: {
    IconSvg
  },
  props: {
    name: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  methods: {
    emitSelectedValue() {
      this.$emit("selected", this.name)
    }
  }
}
</script>
