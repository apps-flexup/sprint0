<template lang="pug">
.fv-accounts-index
  fv-header-index(
    data-testid="headerIndex"
    icon="mdi-plus"
    :title="$t('accounts.index.title')"
    :titleButton="$t(`buttons.create.account`)"
    @button:click="createAccount"
  )
  fv-account-list(
    :accounts="accounts"
  )
</template>

<script>
export default {
  computed: {
    accounts() {
      const res = this.$store.getters['accounts/all']
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('accounts/get')
  },
  methods: {
    createAccount() {
      this.$router.push('/accounts/new')
      this.$emit('accounts:create')
    }
  }
}
</script>

<style scoped>
.card {
  margin-left: 10px;
  margin-right: 10px;
}
</style>
