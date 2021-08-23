<template lang="pug">
.page-account-new
  h1.mb-8(data-testid="pageTitle") {{ $t('forms.personalAccounts.new.title') }}
  v-radio-group(:label="$t('accounts.typeOfAccount.whatType')" v-model="accountForm" :mandatory="true")
    v-radio(name='typeAccount' :label="$t('forms.businessAccounts.new.title')" value='BusinessAccount')
    v-radio(name='typeAccount' :label="$t('forms.subAccounts.new.title')" value='SubAccount')
    fv-flex-items
      template(v-slot:left)
        fv-secondary-button(
          data-testid="cancelBtn"
          @button:click="cancel"
        ) {{ $t('buttons.previous') }}
      template(v-slot:separator)
        v-spacer
      template(v-slot:right)
        fv-primary-button(
          @button:click="createAccount()"
        ) {{ $t('buttons.next') }}
</template>

<script>
export default {
  data() {
    return {
      accountForm: null
    }
  },
  methods: {
    createAccount() {
      this.$router.push(`/accounts/new${this.accountForm}`)
    },
    cancel() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
::v-deep .v-input--radio-group--column .v-input--radio-group__input > .v-label {
  font-size: 22px;
  color: #000000;
  font-weight: bold;
  margin-bottom: 12px;
}
::v-deep .v-label {
  color: #000000;
  margin: 12px 0;
}
::v-deep .v-radio {
  margin-left: 20px;
}
.fv-flex-items {
  margin-top: 25px;
  width: 50%;
}
</style>
