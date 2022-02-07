<template lang="pug">
.page-account-new
  fv-radio-group(
    :title="$t('forms.personalAccounts.new.title')"
    :label="$t('accounts.typeOfAccount.whatType')"
    :availableOptions="availableOptions"
    @radio-group:validated="createAccount"
  )
</template>

<script>
export default {
  data() {
    return {
      accountForm: null,
      availableOptions: [
        {
          name: 'businessAccount',
          label: this.$t('forms.businessAccounts.new.title'),
          value: 'BusinessAccount',
        },
        {
          name: 'subAccount',
          label: this.$t('forms.subAccounts.new.title'),
          value: 'SubAccount',
        },
      ],
    }
  },
  methods: {
    createAccount(type) {
      this.$router.push(`/accounts/new${type}`)
    },
    cancel() {
      this.$router.go(-1)
    },
  },
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
