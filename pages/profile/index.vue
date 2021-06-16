<template lang="pug">
.profile
  fv-form(
    :payload='account'
    @form:submit="editAccount"
    url='accounts'
    form='personalAccounts'
    action='edit'
  )
</template>

<script>
export default {
  computed: {
    account() {
      const userUuid = this.$auth.user.sub
      const res = this.$store.getters['accounts/findPersonalAccountForUser'](
        userUuid
      )
      return res
    }
  },
  methods: {
    editAccount(payload) {
      this.$store.dispatch('accounts/update', payload)
    }
  }
}
</script>
