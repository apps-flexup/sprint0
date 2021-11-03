<template lang="pug">
.fv-avatar
  v-avatar(
    :size="size"
  )
    img(
      :src='avatar'
    )
</template>

<script>
export default {
  name: 'FvAvatar',
  props: {
    avatar: {
      type: String,
      default() {
        return ''
      }
    },
    size: {
      type: Number,
      default() {
        return 48
      }
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>
