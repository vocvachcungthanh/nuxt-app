<template>
  <span class="header__logo--name xl:text-[45px]">
    {{ name }}
  </span>
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
