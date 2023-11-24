<template>
  <section class="page__home">
    <Sliders />
    <CountDown />
  </section>
</template>

<script>
import { Sliders, CountDown } from '~/components/pages/home'
export default {
  name: 'IndexPage',

  components: {
    Sliders,
    CountDown,
  },
}
</script>
