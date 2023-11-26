<template>
  <div class="couple__content--item flex items-center flex-wrap">
    <ContentCouple :class-name="classContent" />
    <AvatarCouple :class-name="classAvatar" />
  </div>
</template>

<script>
import AvatarCouple from './Avatar.couple.vue'
import ContentCouple from './content.couple.vue'

export default {
  components: { AvatarCouple, ContentCouple },

  props: {
    classAvatar: {
      type: String,
      default: String,
    },

    classContent: {
      type: String,
      default: String,
    },
  },
}
</script>
