<template>
  <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="size"
      :height="size"
      viewBox="0 0 32 33"
      fill="none"
  >
    <path
        d="M16.0001 8.83333V16.8333L21.3334 19.5M29.3334 16.8333C29.3334 24.1971 23.3639 30.1667 16.0001 30.1667C8.63628 30.1667 2.66675 24.1971 2.66675 16.8333C2.66675 9.46954 8.63628 3.5 16.0001 3.5C23.3639 3.5 29.3334 9.46954 29.3334 16.8333Z"
        stroke="#939598"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
        :fill="color"
    />
  </svg>
</template>

<script>
export default {
  props: {
    size: { type: [String, Number], default: 22 },
    color: { type: String, default: 'white' }
  }
}
</script>
