<template>
  <div class="count-down__header text-center font__dancing">
    <h2 class="text-[#202a41] text-[50px] xl:mb-[20px]">
      {{ items.title }}
    </h2>

    <p
      class="count-down__header--date text-[40px] font-bold -tracking-tight text-[#333]"
    >
      {{ date }}
    </p>

    <div class="count-down__header--line flex items-center justify-center py-3">
      <span
        class="count-down__header--icon relative text-[#f88dbd] text-3xl before:h-[1px] before:absolute before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:top-1/2 before:-z-10 before:w-52 before:border before:border-dashed before:border-[#f88dbd]"
      >
        <font-awesome-icon :icon="['fas', 'heart']" />
      </span>
    </div>

    <div class="count-down__header--info text-black text-2xl w-[81%] mx-auto">
      {{ items.desc }}
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  props: {
    items: {
      type: Object,
      default: Object,
    },
  },

  computed: {
    date() {
      return moment(this.items.date).format('DD-MM-YYYY')
    },
  },
}
</script>
