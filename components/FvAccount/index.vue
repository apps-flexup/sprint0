<template lang="pug">
.fv-account
  v-list-item
    fv-avatar(
      :avatar="avatar"
    )
    v-list-item-content
      v-list-item-title {{ name }}
</template>

<script>
export default {
  name: 'FvAccount',
  props: {
    name: {
      type: String,
      default() {
        return 'Name'
      }
    },
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
