<template lang="pug">
.fv-account
  fv-avatar(
    data-testid="avatar"
    :avatar="avatar"
    :size="size"
  )
  div.right(
    data-testid="accountName"
  )
    | {{ name }}
</template>

<script>
export default {
  name: 'FvAccount',
  props: {
    name: {
      type: String,
      default() {
        return null
      }
    },
    avatar: {
      type: String,
      default() {
        return null
      }
    },
    size: {
      type: Number,
      default() {
        return 24
      }
    }
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
