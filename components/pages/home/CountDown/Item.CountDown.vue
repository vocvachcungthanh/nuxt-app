<template>
  <div
    class="countdown grid grid-cols-4 gap-[100px] text-[#f88dbd] justify-center mt-32 font__dancing"
  >
    <div
      v-if="days"
      class="countdown__block ain min-w-[50px] text-center relative before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:z-20"
    >
      <div class="countdown__digit text-[300%] font-bold mb-[5px]">
        {{ days | twoDigits }}
      </div>
      <div class="countdown__text inline-block mb-[5px] uppercase">Ngày</div>
    </div>
    <div
      class="countdown__block ain min-w-[50px] text-center relative before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:z-20"
    >
      <div class="countdown__digit text-[300%] font-bold mb-[5px]">
        {{ hours | twoDigits }}
      </div>
      <div class="countdown__text inline-block mb-[5px] uppercase">Giờ</div>
    </div>
    <div
      class="countdown__block ain min-w-[50px] text-center relative before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:z-20"
    >
      <div class="countdown__digit text-[300%] font-bold mb-[5px]">
        {{ minutes | twoDigits }}
      </div>
      <div class="countdown__text inline-block mb-[5px] uppercase">Phút</div>
    </div>
    <div
      class="countdown__block ain min-w-[50px] text-center relative before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:z-20"
    >
      <div class="countdown__digit text-[300%] font-bold mb-[5px]">
        {{ seconds | twoDigits }}
      </div>
      <div class="countdown__text inline-block mb-[5px] uppercase">Giây</div>
    </div>
  </div>
</template>

<script>
export default {
  filters: {
    twoDigits(value) {
      if (value.toString().length <= 1) {
        return '0' + value.toString()
      }
      return value.toString()
    },
  },

  props: {
    // eslint-disable-next-line vue/require-default-prop
    date: null,
  },

  data() {
    return {
      now: Math.trunc(new Date(this.date).getTime() / 1000),

      finish: false,
    }
  },

  computed: {
    secondCount() {
      return this.calculatedDate - this.now
    },

    calculatedDate() {
      return Math.trunc(Date.parse(this.date) / 1000)
    },

    seconds() {
      if (this.secondCount < 0) return 0
      return this.secondCount % 60
    },

    minutes() {
      if (this.secondCount < 0) return 0
      return Math.trunc(this.secondCount / 60) % 60
    },

    hours() {
      if (this.secondCount < 0) return 0
      return Math.trunc(this.secondCount / 60 / 60) % 24
    },

    days() {
      if (this.secondCount < 0) return 0
      return Math.trunc(this.secondCount / 60 / 60 / 24)
    },
  },

  mounted() {
    const _self = this
    window.setInterval(() => {
      this.now = Math.trunc(new Date().getTime() / 1000)
      if (!this.finish && this.calculatedDate - this.now <= 0) {
        _self.finish = true
        _self.$emit('onFinish')
      }
    }, 1000)
  },
}
</script>
