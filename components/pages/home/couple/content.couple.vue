<template>
  <div
    :class="className"
    class="couple__content--desc flex flex-1 flex-col text-black min-h-[150px] py-[15px] text-justify shadow-[0_0_0_8px_hsla(0,0%,100%,.459)] bg-[hsla(0,0%,100%,.89)] rounded-[10px]"
  >
    <div class="couple__content--text">
      Tháng sau rồi mình về với anh nha Đồng ý đi rồi xe hoa đưa đón Váy cưới
      xinh đủ màu em lựa chọn Trắng, xanh, hồng, nhỏ, lớn…miễn em ưng.
    </div>
    <div class="couple__content__link flex items-center mt-auto gap-[10px]">
      <a
        href="https://www.facebook.com/vocvachcungthanh"
        target="_blank"
        title="https://www.facebook.com/vocvachcungthanh"
      >
        <img src="~/assets/images/facebook.png" alt="facebook" />
      </a>
      <a
        href="https://www.instagram.com/thanh_dev/"
        target="_blank"
        title="https://www.instagram.com/thanh_dev"
      >
        <img src="~/assets/images/instagram.png" alt="instagram" />
      </a>
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
