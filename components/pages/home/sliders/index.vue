<template>
  <section
    class="sliders relative after:left-0 after:right-0 after:top-0 after:bottom-0 after:z-10 after:w-full after:h-full after:absolute before:absolute before:w-full before:bottom-0 before:left-0 before:right-0 before:h-20 before:z-50"
  >
    <a-carousel
      v-if="!isLoading"
      autoplay
      effect="fade"
      :autoplay-speed="10000"
    >
      <ItemSliders v-for="item in sliders" :key="item.id" :items="item" />
    </a-carousel>
    <SliderSkeleton v-if="isLoading" />
    <ContentSlider />
  </section>
</template>

<script>
import { mapState } from 'vuex'

import ContentSlider from './Content.slider.vue'
import ItemSliders from './Item.slider.vue'
import SliderSkeleton from './SliderSkeleton.vue'

export default {
  components: {
    ItemSliders,
    ContentSlider,
    SliderSkeleton,
  },

  data() {
    return {
      isLoading: false,
    }
  },

  computed: {
    ...mapState({
      sliders: (state) => state.storeSliders.sliders,
    }),
  },

  async created() {
    this.isLoading = true

    await this.$store.dispatch('ACT_GET_SLIDERS')

    this.isLoading = false
  },
}
</script>
