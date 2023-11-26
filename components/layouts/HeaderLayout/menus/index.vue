<template>
  <div
    class="header__nav border border-solid border-[#efefef] border-t border-b-0 mt-9"
  >
    <div
      class="sm:container md:container lg:container xl:container 2xl:container mx-auto"
    >
      <ul v-if="!isLoading" class="menu flex items-center justify-center">
        <li v-for="item in menus" :key="item.key">
          <ItemMenu :items="item" />
        </li>
      </ul>

      <MenuSkeleton v-if="isLoading" />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import ItemMenu from './ItemMenu.vue'
import MenuSkeleton from './MenuSkeleton.vue'

export default {
  name: 'MenuIndex',

  components: {
    ItemMenu,
    MenuSkeleton,
  },

  data() {
    return {
      isLoading: false,
    }
  },

  computed: {
    ...mapState({
      menus: (state) => state.storeMenus.menus,
    }),
  },

  async created() {
    this.isLoading = true

    await this.actGetMenu()

    this.isLoading = false
  },

  methods: {
    ...mapActions({
      actGetMenu: 'ACT_GET_MENU',
    }),
  },
}
</script>
