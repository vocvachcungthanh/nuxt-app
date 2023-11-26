<template>
  <section class="count-down py-20">
    <div
      v-if="!isLoading"
      class="sm:container md:container lg:container xl:container 2xl:container mx-auto"
    >
      <HeaderCountDown :items="countDown" />
      <div class="count-down__content">
        <ItemCountDown :date="countDown.date" />
      </div>
    </div>

    <CountDownSkeletion v-if="isLoading" />
  </section>
</template>

<script>
import { mapState } from 'vuex'

import HeaderCountDown from './Header.CountDown.vue'
import ItemCountDown from './Item.CountDown.vue'
import CountDownSkeletion from './CountDownSkeletion.vue'

export default {
  components: {
    ItemCountDown,
    HeaderCountDown,
    CountDownSkeletion,
  },

  data() {
    return {
      isLoading: false,
    }
  },

  computed: {
    ...mapState({
      countDown: (state) => state.storeCountDown.countDown,
    }),
  },

  async created() {
    this.isLoading = true

    await this.$store.dispatch('ACT_COUNT_DOWN')

    this.isLoading = false
  },
}
</script>
