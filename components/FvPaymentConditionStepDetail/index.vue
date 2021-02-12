<template lang="pug">
.fv-payment-condition-step-detail
  fv-text-field.label(
    :value="label"
    :label="$t('forms.paymentConditions.new.label')"
    @input="labelChanged"
  )
  div(v-for="reference in references" :key="reference.key" :style="cssVars")
    v-row(class="align-center")
      v-col(cols="10")
        fv-reference-autocomplete(
          :element="getElementForReference(reference)"
          :reference="reference"
          @reference:selected="referenceSelected(reference, ...arguments)"
        )
      v-col.center(cols="1")
        v-avatar.center(:color="avatarColor")
          span.referenceKey {{ reference.key }}
      v-col.center(cols="1")
        v-avatar.center(:color="avatarColor")
          span.referenceKey {{ getValueForReference(reference) }}%
    v-row(v-if="referenceHasParam(reference)")
      v-col(cols="10")
        component(
          :is="getComponentForReference(reference)"
          :value="getParamValueForReference(reference)"
          @referenceParams:changed="referenceParamsChanged(reference, ...arguments)"
        )
  v-divider
  v-row(class="justify-center align-center" :style="cssVars")
    v-col(cols="10")
    v-col.center(cols="1")
      span.total {{ $t('forms.paymentConditions.new.total') }}
    v-col.center(cols="1")
      v-chip.total(:color="avatarColor") {{ total }}%
</template>

<script>
import { filterReferenceAutocomplete } from '~/plugins/utils'

export default {
  name: 'FvPaymentConditionStepDetail',
  props: {
    payload: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    label() {
      const res = this.payload ? this.payload.label : null
      return res
    },
    selectedReferences() {
      const references = this.payload ? this.payload.references : null
      const res = references || {}
      return res
    },
    references() {
      const res = this.$store.getters['references/all']
      return res
    },
    total() {
      let res = 0
      if (!this.selectedReferences) return res
      const references = this.selectedReferences
      for (const reference of Object.values(references)) {
        if (reference.value) {
          if (res === 0) {
            res = reference.value
          } else {
            res *= reference.value / 100
          }
        }
      }
      res = Math.round(res * 10) / 10
      return res
    },
    avatarColor() {
      const settings = this.$store.getters['settings/settings']
      const theme = settings.theme
      let res = 'white'
      if (theme === 'dark') res = '#4a4b4e'
      return res
    },
    cssVars() {
      const settings = this.$store.getters['settings/settings']
      const theme = settings.theme
      let color = 'black'
      if (theme === 'dark') color = 'white'
      const res = {
        '--fontColor': color
      }
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('references/get')
    this.$store.dispatch('settings/getSettings')
  },
  methods: {
    labelChanged(v) {
      const payload = {
        label: v
      }
      this.$emit('payload:changed', payload)
    },
    referenceSelected(reference, v) {
      const references = this.selectedReferences
      references[reference.key] = v
      const payload = {
        references,
        risk: this.total
      }
      this.$emit('payload:changed', payload)
    },
    getElementForReference(reference) {
      const res = this.selectedReferences[reference.key]
      if (!res) return null
      return res
    },
    getValueForReference(reference) {
      const key = reference.key
      const selectedReference = this.selectedReferences[key]
      let res = 0
      if (selectedReference) res = selectedReference.value
      if (!res) res = 0
      res = Math.round(res)
      return res
    },
    getParamValueForReference(reference) {
      const key = reference.key
      const selectedReference = this.selectedReferences[key]
      let params = null
      if (selectedReference) params = selectedReference.params
      if (!params) return null
      const res = params.value
      return res
    },
    referenceHasParam(reference) {
      if (!reference || !this.selectedReferences) return false
      const key = reference.key
      const selectedReference = this.selectedReferences[key]
      if (
        selectedReference &&
        Object.prototype.hasOwnProperty.call(selectedReference, 'params')
      )
        return true
      return false
    },
    getComponentForReference(reference) {
      let res = null
      if (this.referenceHasParam(reference)) {
        const key = reference.key
        const selectedReference = this.selectedReferences[key]
        const params = selectedReference.params
        res = params.key
      }
      return res
    },
    referenceParamsChanged(reference, v, value) {
      if (this.referenceHasParam(reference)) {
        const key = reference.key
        const selectedReference = JSON.parse(
          JSON.stringify(this.selectedReferences[key])
        )
        const params = JSON.parse(JSON.stringify(selectedReference.params))
        params.value = v
        selectedReference.params = params
        selectedReference.value = value
        this.referenceSelected(reference, selectedReference)
      }
    },
    filter(item, v, it) {
      return filterReferenceAutocomplete(item, v, it)
    }
  }
}
</script>

<style scoped>
::v-deep .v-input.theme--light .v-input__slot {
  background: #ffffff;
  margin-bottom: initial;
}
::v-deep .v-text-field__details {
  display: none;
}
::v-deep .v-divider {
  background-color: darkgray;
  margin-top: 8px;
  height: 2px;
  max-height: initial;
}
.label {
  margin-bottom: 8px;
}
.center {
  text-align: center;
}
.referenceKey {
  color: var(--fontColor);
}
.total {
  font-weight: bold;
  color: var(--fontColor);
  font-size: 1rem;
}
</style>
