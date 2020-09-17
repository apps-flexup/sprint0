<template lang="pug">
.fv-settings-default
  fv-currency-autocomplete(
    :currency="currency"
    @currency:selected="currencySelected"
  )
  v-divider
</template>

<script>
export default {
  name: 'FvSettingsDefault',
  props: {
    account: {
      type: Object,
      default() {
        return null
      }
    }
  },
  data() {
    return {
      currency: null
    }
  },
  watch: {
    account() {
      console.log('Account changed: ', this.account)
      if (this.account) {
        this.fillFieldsWithAccount()
      } else {
        this.clearFields()
      }
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    if (this.account) this.fillFieldsWithAccount()
  },
  methods: {
    currencySelected(v) {
      this.currency = v
      this.account.currency = this.currency
      this.$store.dispatch('accounts/update', this.account)
    },
    fillFieldsWithAccount() {
      this.currency = this.account.currency
    },
    clearFields() {
      this.currency = null
    }
  }
}
</script>
