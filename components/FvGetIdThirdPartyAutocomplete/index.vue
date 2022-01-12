<template lang="pug">
.fv-get-id-third-party-autocomplete
  fv-third-party-account-autocomplete(
    :thirdPartyAccountId="value"
    @thirdPartyAccount:selected='selected'
  )
</template>

<script>
export default {
  name: 'FvGetIdThirdPartyAutocomplete',
  props: {
    value: {
      type: Number,
      default() {
        return null
      }
    }
  },
  methods: {
    selected(v) {
      if (v) {
        this.$emit('payload:changed', v.id)
      }
    }
  }
}
</script>
