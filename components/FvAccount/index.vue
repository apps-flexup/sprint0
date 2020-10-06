<template lang="pug">
.fv-account
  fv-avatar(
    :avatar="avatar"
    :size="size"
  )
  div.right
    | {{ name }}
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
    },
    size: {
      type: Number,
      default() {
        return 24
      }
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>

<style scoped>
.fv-account {
  display: flex !important;
  align-items: center;
}
.right {
  margin-left: 15px;
}
</style>
