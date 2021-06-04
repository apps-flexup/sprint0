<template lang="pug">
.fv-business-account-step-juridical-information
  v-row
    v-col(cols="12")
      fv-legal-structure-autocomplete(
        data-testid='legalStructure'
        :legalStructureId="legalStructureId"
        :label="$t('forms.thirdPartyAccounts.new.legalStructure')"
        @legalstructure:selected="legalStructureSelected"
      )
  v-row
    v-col(cols="12")
      fv-address-field(
          data-testid='addressField'
          :address="medias.description ? medias.description.value : null"
          @address:value:changed="valueChanged(...arguments)"
        )
  v-row
    v-col(cols="12")
      fv-text-field(
        data-testid='siret'
        :value="siret"
        :label="$t('forms.thirdPartyAccounts.new.siret')"
        @input="siretChanged"
    )
  v-row
    v-col(cols="12")
      fv-vat-field(
        data-testid="vatField"
        :value="vat"
        :label="$t('forms.offers.new.vat')"
        @vat:changed="vatChanged"
      )
</template>

<script>
export default {
  name: 'FvBusinessAccountStepJuridicalInformation',
  props: {
    payload: {
      type: Object,
      default() {
        return null
      }
    }
  },
  computed: {
    medias() {
      const medias = this.payload ? this.payload.medias : null
      const res = medias || []
      return res
    },
    legalStructureId() {
      const res = this.payload ? this.payload.legal_structure_id : null
      return res
    },
    address() {
      const res = this.medias ? this.medias.description.value : null
      return res
    },
    siret() {
      const res = this.payload ? this.payload.siret : null
      return res
    },
    vat() {
      const res = this.payload ? this.payload.vat : null
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    legalStructureSelected(v) {
      const payload = {
        legal_structure_id: v
      }
      this.$emit('payload:changed', payload)
    },
    valueChanged(address) {
      const payload = {
        address
      }
      this.$emit('payload:changed', payload)
    },
    siretChanged(siret) {
      console.log('le payload', this.payload)
      const payload = {
        siret
      }
      this.$emit('payload:changed', payload)
    },
    vatChanged(v) {
      const payload = {
        vat: v
      }
      this.$emit('payload:changed', payload)
    }
  }
}
</script>
