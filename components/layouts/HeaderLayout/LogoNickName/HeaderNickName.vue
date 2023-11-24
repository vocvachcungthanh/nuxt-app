<template>
  <span
    class="header__logo--nickname inline-flex mx-auto justify-center text-[#797979] mt-4 px-2 font-light text-sm tracking-[2px] relative bg-white after:-z-10 after:absolute after:h-[1px] after:bg-[#ece9e9] after:top-[50%] after:translate-y-[50%]"
  >
    {{ getNickName.nickName }}
  </span>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      getNickName: 'logo/getLogo',
    }),
  },
}
</script>
