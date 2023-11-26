<template>
  <ul class="menu flex items-center justify-center gap-4">
    <li
      v-for="(_, _index) in Array(6).fill(0)"
      :key="_index"
      class="flex items-center justify-center"
    >
      <a class="inline-flex items-center relative justify-center w-20 h-6 my-5">
        <LoaddingSkeleton
          class="absolute p-5 w-full -translate-y-1/2 top-1/2 h-full rounded-full"
        />
      </a>
    </li>
  </ul>
</template>

<script>
import { LoaddingSkeleton } from '~/components/common'

export default {
  components: {
    LoaddingSkeleton,
  },
}
</script>
