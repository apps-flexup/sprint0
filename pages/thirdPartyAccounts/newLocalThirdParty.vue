<template lang="pug">
.page.new-local-third-party
  fv-radio-group(
    :title="$t('forms.thirdPartyAccounts.new.title')"
    :label="$t('accounts.typeOfAccount.whatType')"
    :availableOptions="availableOptions"
    @radio-group:validated="createThirdParty"
  )
</template>

<script>
export default {
  data() {
    return {
      thirdPartyForm: null,
      availableOptions: [
        {
          name: 'personalThirdParty',
          label: this.$t('forms.thirdPartyAccounts.new.choices.personal'),
          value: 'PersonalThirdParty',
        },
        {
          name: 'businessThirdParty',
          label: this.$t('forms.thirdPartyAccounts.new.choices.business'),
          value: 'BusinessThirdParty',
        },
        {
          name: 'subAccountThirdParty',
          label: this.$t('forms.thirdPartyAccounts.new.choices.sub'),
          value: 'SubAccountThirdParty',
        },
      ],
    }
  },
  methods: {
    createThirdParty(type) {
      this.$router.push(`/thirdPartyAccounts/new${type}`)
    },
  },
}
</script>
