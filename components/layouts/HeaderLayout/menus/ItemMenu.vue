<template>
  <nuxt-link
    :to="items.link"
    class="text-[#202a41] text-[1.7em] font-semibold p-5 font__dancing inline-flex items-center hover:text-[#d77270] hover:transition-all"
  >
    {{ items.name }}
  </nuxt-link>
</template>

<script>
export default {
  name: 'MenuLink',

  props: {
    items: {
      type: Object,
      default: Object,
    },
  },
}
</script>
