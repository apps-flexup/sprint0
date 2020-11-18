<template lang="pug">
.accounts-id
  pre {{ account }}
</template>

<script>
export default {
  data() {
    return {
      accountId: this.$route.params.id
    }
  },
  computed: {
    account() {
      const res = this.$store.getters['accounts/findById'](this.accountId)
      return res
    }
  }
}
</script>
