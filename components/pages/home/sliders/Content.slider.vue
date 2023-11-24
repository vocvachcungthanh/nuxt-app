<template>
  <div
    class="sliders__content px-3 absolute left-0 right-0 bottom-0 top-0 h-full w-full flex items-center justify-center flex-col"
  >
    <div
      class="sliders__content--title font__dancing text-white text-6xl flex gap-5"
    >
      <ContentNameSlider name="Hữu Thành" />
      <span class="sliders__content--icon text-red-500"
        ><font-awesome-icon :icon="['fas', 'heart-pulse']" />
      </span>
      <ContentNameSlider name="Thủy Tiên" />
    </div>
    <div
      class="sliders__content--date text-white inline-flex text-xl justify-center mt-5 ml-5 relative before:absolute before:top-1/2 before:-translate-y-2/4 before:w-9 before:h-0.5 before:left-[-50px] before:bg-white after:absolute after:top-1/2 after:-translate-y-2/4 after:w-9 after:h-0.5 after:right-[-50px] after:bg-white"
    >
      2023-12-03
    </div>
  </div>
</template>

<script>
import ContentNameSlider from './ContentName.slider.vue'

export default {
  components: {
    ContentNameSlider,
  },
}
</script>
