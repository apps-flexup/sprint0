<template lang="pug">
.fv-third-party-account-step-detail
  v-row
    v-col.md-12.sm-12.lg-12.xl-12(cols='12')
      fv-text-field(
        data-testid='name'
        :value="name"
        :label="$t('forms.thirdPartyAccounts.new.name')"
        @input="nameChanged"
      )
  v-row
    v-col.md-12.sm-12.lg-12.xl-12(cols='12')
      v-textarea(
        data-testid='address'
        :value="address"
        :label="$t('forms.thirdPartyAccounts.new.address')"
        rows='3'
        outlined=''
        @input="addressChanged"
      )
  v-row
    v-col.md-4.sm-4.lg-4.xl-4(cols='4')
      fv-text-field(
        data-testid='zip'
        :value="zip"
        :label="$t('forms.thirdPartyAccounts.new.zip')"
        @input="zipChanged"
    )
    v-col.md-8.sm-8.lg-8.xl-8(cols='8')
      fv-text-field(
        data-testid='city'
        :value="city"
        :label="$t('forms.thirdPartyAccounts.new.city')"
        @input="cityChanged"
      )
  v-row
    v-col.md-10.sm-10.lg-10.xl-10(cols='10')
      fv-country-autocomplete(
        data-testid='country'
        :countryId="countryId"
        :label="$t('forms.thirdPartyAccounts.new.country')"
        @country:selected="countrySelected"
      )
  v-row
    v-col.md-12.sm-12.lg-12.xl-12(cols='12')
      fv-legal-structure-autocomplete(
        data-testid='legalStructure'
        :legalStructureId="legalStructureId"
        :label="$t('forms.thirdPartyAccounts.new.legalStructure')"
        @legalstructure:selected="legalStructureSelected"
      )
  v-row
    v-col.md-12.sm-12.lg-12.xl-12(cols='12')
      fv-text-field(
        data-testid='siret'
        :value="siret"
        :label="$t('forms.thirdPartyAccounts.new.siret')"
        @input="siretChanged"
    )
</template>

<script>
export default {
  name: 'FvThirdPartyAccountStepDetail',
  props: {
    payload: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    name() {
      const res = this.payload ? this.payload.name : null
      return res
    },
    address() {
      const res = this.payload ? this.payload.address : null
      return res
    },
    zip() {
      const res = this.payload ? this.payload.zip : null
      return res
    },
    city() {
      const res = this.payload ? this.payload.city : null
      return res
    },
    countryId() {
      const res = this.payload ? this.payload.country_id : null
      return res
    },
    legalStructureId() {
      const res = this.payload ? this.payload.legal_structure_id : null
      return res
    },
    siret() {
      const res = this.payload ? this.payload.siret : null
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
    addressChanged(address) {
      const payload = {
        address
      }
      this.$emit('payload:changed', payload)
    },
    zipChanged(zip) {
      const payload = {
        zip
      }
      this.$emit('payload:changed', payload)
    },
    cityChanged(city) {
      const payload = {
        city
      }
      this.$emit('payload:changed', payload)
    },
    countrySelected(v) {
      const payload = {
        country_id: v
      }
      this.$emit('payload:changed', payload)
    },
    legalStructureSelected(v) {
      const payload = {
        legal_structure_id: v
      }
      this.$emit('payload:changed', payload)
    },
    siretChanged(siret) {
      const payload = {
        siret
      }
      this.$emit('payload:changed', payload)
    }
  }
}
</script>

<style scoped>
::v-deep .v-input.theme--light .v-input__slot {
  background: #ffffff;
}
</style>
