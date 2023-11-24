<template>
  <section class="layout__default">
    <HeaderLayout />
    <main class="layout__main">
      <nuxt />
    </main>
    <FooterLayout />
  </section>
</template>

<script>
import { HeaderLayout, FooterLayout } from '~/components/layouts'

export default {
  components: {
    HeaderLayout,
    FooterLayout,
  },
}
</script>
