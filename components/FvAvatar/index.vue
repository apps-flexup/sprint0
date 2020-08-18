<template lang="pug">
  .fv-avatar
    v-list-item-avatar
      img(:src='avatar')
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
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>
