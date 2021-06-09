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
      fv-text-field(
        data-testid='siret'
        :value="siret"
        :label="$t('forms.thirdPartyAccounts.new.siret')"
        @input="siretChanged"
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
    this.$emit('payload:changed', { type: 'Business' })
  },
  methods: {
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
