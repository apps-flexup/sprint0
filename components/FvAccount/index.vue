<template lang="pug">
.fv-account
  fv-avatar(
    :avatar="avatar"
    size="24"
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
