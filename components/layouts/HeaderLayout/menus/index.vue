<template>
  <div
    class="header__nav border border-solid border-[#efefef] border-t border-b-0 mt-9"
  >
    <div
      class="sm:container md:container lg:container xl:container 2xl:container mx-auto"
    >
      <ul class="menu flex items-center justify-center">
        <li v-for="item in menus" :key="item.key">
          <ItemMenu :items="item" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ItemMenu from './ItemMenu.vue'

export default {
  name: 'MenuIndex',

  components: {
    ItemMenu,
  },

  computed: {
    ...mapState({
      menus: (state) => state.storeMenus.menus,
    }),
  },
}
</script>
