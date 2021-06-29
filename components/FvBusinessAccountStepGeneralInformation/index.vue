<template lang="pug">
.fv-business-account-step-general-information
  v-row
    v-col(cols='12')
      fv-text-field(
        data-testid='nameField'
        :value="name"
        :label="$t('forms.businessAccounts.new.name')"
        @input="nameChanged"
      )
  v-row
    v-col(cols="12")
      fv-text-field(
        data-testid='descriptionField'
        :value="description"
        :label="$t('forms.businessAccounts.new.description')"
        @input="descriptionChanged"
      )
  v-row
    v-col(cols="12")
      fv-country-autocomplete(
        data-testid='countryField'
        :value="country"
        :label="$t('forms.businessAccounts.new.country')"
        @country:selected="countrySelected"
      )
</template>

<script>
export default {
  name: 'FvBusinessAccountStepGeneralInformation',
  props: {
    payload: {
      type: Object,
      default() {
        return null
      }
    }
  },
  computed: {
    name() {
      const res = this.payload ? this.payload.name : null
      return res
    },
    description() {
      const res = this.payload ? this.payload.description : null
      return res
    },
    country() {
      const res = this.payload ? this.payload.country : null
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    nameChanged(name) {
      const payload = {
        name
      }
      this.$emit('payload:changed', payload)
    },
    descriptionChanged(description) {
      const payload = {
        description
      }
      this.$emit('payload:changed', payload)
    },
    countrySelected(v) {
      const payload = {
        country: v.iso3
      }
      this.$emit('payload:changed', payload)
    }
  }
}
</script>
