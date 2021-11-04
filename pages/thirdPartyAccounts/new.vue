<template lang="pug">
.page.third-party-account-new
    fv-text-button(
        data-testid="addNewLocalThirdParty"
        @button:click="addNewLocalThirdParty"
      )
        template(v-slot:icon)
          fv-icon(
            size="small"
            icon="mdi-plus"
            color="#1976d2"
            @icon:clicked="addNewLocalThirdParty"
          )
        template(v-slot:text)
          | {{ $t('forms.thirdPartyAccounts.new.title') }}
</template>

<script>
export default {
  methods: {
    addNewLocalThirdParty() {
      this.$router.push('/thirdPartyAccounts/newLocalThirdParty')
    }
  }
}
</script>
