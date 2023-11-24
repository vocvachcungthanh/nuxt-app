<template>
  <span class="sliders__content--name"> {{ name }} </span>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: String,
    },
  },
}
</script>
