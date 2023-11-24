<template>
  <h1
    class="header__logo font__dancing flex justify-center items-center gap-10"
  >
    <HeaderLogoName :name="getLogo.groom" />
    <HeaderLogoIcon />
    <HeaderLogoName :name="getLogo.bride" />
  </h1>
</template>

<script>
import { mapGetters } from 'vuex'

import HeaderLogoName from './HeaderLogoName.vue'
import HeaderLogoIcon from './HeaderLogoIcon.vue'

export default {
  components: {
    HeaderLogoName,
    HeaderLogoIcon,
  },

  computed: {
    ...mapGetters({
      getLogo: 'logo/getLogo',
    }),
  },
}
</script>
