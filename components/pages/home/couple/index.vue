<template>
  <section class="couple relative pt-[70px] pb-[120px]">
    <div
      class="sm:container md:container lg:container xl:container 2xl:container mx-auto"
    >
      <div class="couple__header">
        <div
          class="coupl__header--title font__dancing text-center text-[50px] font-bold"
        >
          Cô dâu & Chú rể
        </div>
      </div>
      <div class="couple__content">
        <div
          class="couple__content--box flex items-center justify-center pt-[100px] gap-5"
        >
          <ItemCouple
            class-content="pr-[120px]  translate-x-[100px] -ml-[100px] "
            class-avatar="couple__avatar"
          />
          <div class="couple__content--icon text-[50px] text-red-50">
            <font-awesome-icon :icon="['fas', 'heart-pulse']" />
          </div>
          <ItemCouple
            class-avatar="couple__avatar flex-shrink-0"
            class-content="order-2 pl-[120px] pr-[15px] -mr-[120px] ml-0 -translate-x-[100px] "
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ItemCouple from './Item.Couple.vue'

export default {
  components: {
    ItemCouple,
  },
}
</script>
