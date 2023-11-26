<template>
  <div class="sliders__item">
    <div class="sliders__item--thumbnail aspect__ratio">
      <img
        class="sliders__radio--img absolute top-0 left-0 w-full h-full inline-block object-cover"
        :src="items.image"
        :alt="items.title"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Object,
      default: Object,
    },
  },
}
</script>
