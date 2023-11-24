<template>
  <header class="header__default xl:pt-9 text-center">
    <LogoNickName />
    <Menus />
  </header>
</template>

<script>
import LogoNickName from './LogoNickName'
import Menus from './menus'

export default {
  components: {
    LogoNickName,
    Menus,
  },
}
</script>
