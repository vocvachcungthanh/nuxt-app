<template>
  <div class="sliders__item">
    <div class="sliders__item--thumbnail aspect__ratio">
      <LoaddingSkeleton
        class="absolute w-full h-full top-0 left-0 right-0 bottom-0"
      />
    </div>
  </div>
</template>

<script>
import { LoaddingSkeleton } from '~/components/common'

export default {
  components: {
    LoaddingSkeleton,
  },
}
</script>
