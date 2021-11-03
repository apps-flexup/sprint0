<template lang="pug">
.fv-accounts-index
  v-row
    v-col.headBar(cols="12")
      v-col(cols="4")
        h1(
          data-testid="title"
        ) {{ $t('accounts.index.title') }}
      v-col(cols="8")
        fv-primary-button.text-right(
          data-testid="createButton"
          @button:click="createAccount"
        ) {{ $t(`buttons.create.account`) }}
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
.headBar {
  display: flex;
  align-items: center;
}
.card {
  margin-left: 10px;
  margin-right: 10px;
}
</style>
