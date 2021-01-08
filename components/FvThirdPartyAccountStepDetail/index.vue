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
        v-model="address"
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
  name: 'FvNewProductForm',
  props: {
    payload: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      localThirdParty: {},
      name: null,
      address: null,
      zip: null,
      city: null,
      countryId: null,
      legalStructureId: null,
      siret: null
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.fillFieldsWithThirdPartyAccount()
  },
  methods: {
    nameChanged(name) {
      console.log('name changed: ', name)
      const payload = {
        name
      }
      const res = Object.assign(this.localThirdParty, payload)
      this.$emit('payload:changed', res)
    },
    addressChanged(address) {
      console.log('address changed: ', address)
      const payload = {
        address
      }
      const res = Object.assign(this.localThirdParty, payload)
      this.$emit('payload:changed', res)
    },
    zipChanged(zip) {
      console.log('zip changed: ', zip)
      const payload = {
        zip
      }
      const res = Object.assign(this.localThirdParty, payload)
      this.$emit('payload:changed', res)
    },
    cityChanged(city) {
      console.log('city changed: ', city)
      const payload = {
        city
      }
      const res = Object.assign(this.localThirdParty, payload)
      this.$emit('payload:changed', res)
    },
    countrySelected(v) {
      this.countryId = v
      const payload = {
        country_id: this.countryId
      }
      const res = Object.assign(this.localThirdParty, payload)
      this.$emit('payload:changed', res)
    },
    legalStructureSelected(v) {
      this.legalStructureId = v
      const payload = {
        legal_structure_id: this.legalStructureId
      }
      const res = Object.assign(this.localThirdParty, payload)
      this.$emit('payload:changed', res)
    },
    siretChanged(siret) {
      console.log('siret changed: ', siret)
      const payload = {
        siret
      }
      const res = Object.assign(this.localThirdParty, payload)
      this.$emit('payload:changed', res)
    },
    fillFieldsWithThirdPartyAccount() {
      if (!this.payload) return
      this.name = this.payload.name
      this.address = this.payload.address
      this.zip = this.payload.zip
      this.city = this.payload.city
      this.countryId = this.payload.country_id || null
      this.legalStructureId = this.payload.legal_structure_id || null
      this.siret = this.payload.siret
      this.localThirdParty = this.payload
    }
  }
}
</script>

<style scoped>
::v-deep .v-input.theme--light .v-input__slot {
  background: #ffffff;
}
</style>
