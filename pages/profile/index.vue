<template lang="pug">
.profile
  fv-form(
    :payload='account'
    @form:submit="editAccount"
    url='accounts'
    form='personalAccounts'
    action='read'
  )
</template>

<script>
export default {
  computed: {
    account() {
      const res = this.$store.getters['accounts/getMyPersonalAccount']
      return res
    }
  },
  mounted() {
    this.$store.dispatch('accounts/all')
  },
  methods: {
    editAccount(payload) {
      this.$store.dispatch('accounts/update', payload)
    }
  }
}
</script>
