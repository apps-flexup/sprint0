<template lang="pug">
.accounts-index
  fv-accounts-index(
    :accounts="accounts"
  )
</template>

<script>
export default {
  computed: {
    accounts() {
      const res = this.$store.getters['accounts/all']
      return res
    },
  },
  mounted() {
    this.$store.dispatch('accounts/get')
  },
}
</script>
