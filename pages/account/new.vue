<template lang="pug">
  .page-account-new
    p {{ $options.name }}
    v-card(
      max-width="800px"
      justify-center
    )
      v-card-title {{ $t('accounts.new.title') }}
      v-card-text
        v-row
          v-col(cols="12")
            v-text-field(
              v-model="account.name"
              :label="$t('forms.accounts.new.name')"
            )
        v-row
          v-col(cols="2")
            v-text-field(
              v-model="account.title"
              :label="$t('forms.accounts.new.title')"
            )
          v-col(cols="5")
            v-text-field(
              v-model="account.lastname"
              :label="$t('forms.accounts.new.lastname')"
            )
          v-col(cols="5")
            v-text-field(
              v-model="account.firstname"
              :label="$t('forms.accounts.new.firstname')"
            )
        v-row
          v-col(cols="6")
            v-text-field(
              v-model="account.email"
              :label="$t('forms.accounts.new.email')"
            )
          v-col(cols="6")
            pre Chargement image avatar
      v-card-actions
        v-spacer
        v-btn(@click.stop="createAccount" block='') {{ $t('buttons.submit') }}
</template>

<script>
export default {
  data() {
    return {
      account: {
        name: null,
        title: null,
        lastname: null,
        firstname: null,
        email: null
      }
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    createAccount() {
      console.log('créer nouveau compte')
      this.$store.dispatch('accounts/add', this.account)
      this.$router.push('/products/new')
    }
  }
}
</script>
<style lang="scss" scoped>
.page-account-new {
  background-color: inherit;
}
</style>
