<template>
  <section
    class="sliders relative after:left-0 after:right-0 after:top-0 after:bottom-0 after:z-10 after:w-full after:h-full after:absolute before:absolute before:w-full before:bottom-0 before:left-0 before:right-0 before:h-20 before:z-50"
  >
    <a-carousel autoplay effect="fade" :autoplay-speed="10000">
      <ItemSliders v-for="(item, index) in [1, 2]" :key="index" />
    </a-carousel>
    <ContentSlider />
  </section>
</template>

<script>
import ContentSlider from './Content.slider.vue'
import ItemSliders from './Item.slider.vue'

export default {
  components: {
    ItemSliders,
    ContentSlider,
  },
}
</script>
