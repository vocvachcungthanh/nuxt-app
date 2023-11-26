<template>
  <section class="page__home">
    <Sliders />
    <CountDown />
    <Couple />
  </section>
</template>

<script>
import { Sliders, CountDown, Couple } from '~/components/pages/home'
export default {
  name: 'IndexPage',

  components: {
    Sliders,
    CountDown,
    Couple,
  },
}
</script>
