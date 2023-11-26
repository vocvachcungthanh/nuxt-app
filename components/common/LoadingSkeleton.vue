<template>
  <span :class="getClass"></span>
</template>

<script>
export default {
  name: 'LoadingSkeleton',

  props: {
    className: {
      type: String,
      default: String,
    },
  },

  computed: {
    getClass() {
      return `skeleton ${this.className}`
    },
  },
}
</script>
