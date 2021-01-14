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
            v-select(
              :items="titres"
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
        v-btn(@click.stop="createWithAccountId" block='') {{ $t('buttons.submit') }}
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
  computed: {
    titres() {
      const res = [
        'forms.accounts.new.titles.mr',
        'forms.accounts.new.titles.ms',
        'forms.accounts.new.titles.miss'
      ]
      return res.map((v) => {
        return this.$t(v)
      })
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.account.name = this.$auth.user.preferred_username
    this.account.email = this.$auth.user.email
    this.account.lastname = this.$auth.user.family_name
    this.account.firstname = this.$auth.user.given_name
  },
  methods: {
    createWithAccountId() {
      this.$store.dispatch('accounts/add', this.account)
      this.$store.dispatch('thirdPartyAccounts/addToFlexup')
      this.$router.push('/settings/new')
    }
  }
}
</script>
