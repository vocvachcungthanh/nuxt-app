<template>
  <div
    class="sm:container md:container lg:container xl:container 2xl:container mx-auto"
  >
    <div class="count-down__header">
      <h2 class="xl:mb-[20px] relative w-[500px] h-7 mx-auto">
        <LoaddingSkeleton
          class="absolute top-0 left-0 right-0 bottom-0 rounded-full"
        />
      </h2>

      <p class="count-down__header--date w-[300px] mx-auto relative h-7 mt-10">
        <LoaddingSkeleton
          class="absolute top-0 left-0 right-0 bottom-0 rounded-full"
        />
      </p>

      <div
        class="count-down__header--line flex items-center justify-center py-3"
      >
        <span
          class="count-down__header--icon relative text-[#f88dbd] text-3xl before:h-[1px] before:absolute before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:top-1/2 before:-z-10 before:w-52 before:border before:border-dashed before:border-[#f88dbd]"
        >
          <font-awesome-icon :icon="['fas', 'heart']" />
        </span>
      </div>

      <div class="count-down__header--info">
        <div class="relative max-w-lg h-3 mx-auto mb-2">
          <LoaddingSkeleton
            class="absolute top-0 left-0 right-0 bottom-0 rounded-full"
          />
        </div>
        <div class="relative max-w-lg h-3 mx-auto mb-2">
          <LoaddingSkeleton
            class="absolute top-0 left-0 right-0 bottom-0 rounded-full"
          />
        </div>
        <div class="relative max-w-lg h-3 mx-auto mb-2">
          <LoaddingSkeleton
            class="absolute top-0 left-0 right-0 bottom-0 rounded-full"
          />
        </div>
        <div class="relative max-w-lg h-3 mx-auto mb-2">
          <LoaddingSkeleton
            class="absolute top-0 left-0 right-0 bottom-0 rounded-full"
          />
        </div>
      </div>
    </div>
    <div class="countdown grid grid-cols-4 gap-[100px] mt-20">
      <div
        v-for="(_item, _index) in Array(4).fill(0)"
        :key="_index"
        class="relative w-32 h-32"
      >
        <LoaddingSkeleton
          class="absolute top-0 left-0 right-0 bottom-0 rounded-lg"
        />
      </div>
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
