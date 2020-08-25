<template lang="pug">
.fv-new-partner-form
  v-row
    v-col.md-12.sm-12.lg-12.xl-12(cols='12')
      fv-text-field(
        :value="name"
        :label="$t('forms.partners.new.name')"
        @input="nameChanged"
      )
  v-row
    v-col.md-12.sm-12.lg-12.xl-12(cols='12')
      v-textarea(
        v-model="address"
        :label="$t('forms.partners.new.address')"
        rows='3'
        outlined=''
        @input="addressChanged"
      )
  v-row
    v-col.md-4.sm-4.lg-4.xl-4(cols='4')
      fv-text-field(
        :value="zip"
        :label="$t('forms.partners.new.zip')"
        @input="zipChanged"
    )
    v-col.md-8.sm-8.lg-8.xl-8(cols='8')
      fv-text-field(
        :value="city"
        :label="$t('forms.partners.new.city')"
        @input="cityChanged"
      )
  v-row
    v-col.md-10.sm-10.lg-10.xl-10(cols='10')
      fv-country-autocomplete(
        v-model="countryId"
        :label="$t('forms.partners.new.country')"
        @country:selected="countrySelected"
      )
  v-row
    v-col.md-12.sm-12.lg-12.xl-12(cols='12')
      fv-legal-structure-autocomplete(
        v-model="legalStructureId"
        :label="$t('forms.partners.new.legalStructure')"
        @legalstructure:selected="legalStructureSelected"
      )
  v-row
    v-col.md-12.sm-12.lg-12.xl-12(cols='12')
      fv-text-field(
        :value="siret"
        :label="$t('forms.partners.new.siret')"
        @input="siretChanged"
    )
</template>

<script>
export default {
  name: 'FvNewProductForm',
  props: {
    partner: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      localPartner: {},
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
  },
  methods: {
    nameChanged(name) {
      console.log('name changed: ', name)
      const payload = {
        name
      }
      const res = Object.assign(this.localPartner, payload)
      this.$emit('partner:changed', res)
    },
    addressChanged(address) {
      console.log('address changed: ', address)
      const payload = {
        address
      }
      const res = Object.assign(this.localPartner, payload)
      this.$emit('partner:changed', res)
    },
    zipChanged(zip) {
      console.log('zip changed: ', zip)
      const payload = {
        zip
      }
      const res = Object.assign(this.localPartner, payload)
      this.$emit('partner:changed', res)
    },
    cityChanged(city) {
      console.log('city changed: ', city)
      const payload = {
        city
      }
      const res = Object.assign(this.localPartner, payload)
      this.$emit('partner:changed', res)
    },
    countrySelected(v) {
      this.countryId = v
      const payload = {
        country_id: this.countryId
      }
      const res = Object.assign(this.localPartner, payload)
      this.$emit('partner:changed', res)
    },
    legalStructureSelected(v) {
      this.legalStructureId = v
      const payload = {
        legal_structure_id: this.legalStructureId
      }
      const res = Object.assign(this.localPartner, payload)
      this.$emit('partner:changed', res)
    },
    siretChanged(siret) {
      console.log('siret changed: ', siret)
      const payload = {
        siret
      }
      const res = Object.assign(this.localPartner, payload)
      this.$emit('partner:changed', res)
    }
  }
}
</script>
