<template>
  <div
    class="sm:container md:container lg:container xl:container 2xl:container mx-auto"
  >
    <HeaderLogo />
    <HeaderNickName />
  </div>
</template>

<script>
import HeaderLogo from './HeaderLogo.vue'
import HeaderNickName from './HeaderNickName.vue'

export default {
  components: {
    HeaderLogo,
    HeaderNickName,
  },
}
</script>
