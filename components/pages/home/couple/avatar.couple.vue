<template>
  <div
    :class="className"
    class="flex-shrink-0 h-[250px] w-[250px] p-[10px] relative z-50 before:absolute before:top-1/2 before:left-1/2 before:h-[calc(100%_+25px)] before:-translate-x-1/2 before:-translate-y-1/2 before:bg-center before:bg-no-repeat before:bg-cover before:w-[calc(100%_+25px)] before:rounded-full before:bg-[url('~/assets/images/bg_couple.png')]"
  >
    <img
      class="object-cover w-full h-full rounded-full relative z-10"
      src="https://drive.google.com/uc?id=1KHpzvocMdoEywKv9AMZKEEUZY-EJjObO"
      alt="https://drive.google.com/uc?id=1KHpzvocMdoEywKv9AMZKEEUZY-EJjObO"
    />

    <div
      class="couple__avatar--content flex items-center justify-center absolute left-1/2 top-1/2 z-50 rounded-full cursor-pointer text-3xl font-bold h-[calc(100%_-25px)] -translate-x-1/2 -translate-y-1/2"
    >
      <h3 class="couple__name font__dancing text-[85px] scale-[1] text-white">
        Hữu thành
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    className: {
      type: String,
      default: String,
    },
  },
}
</script>
