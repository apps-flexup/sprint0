<template lang="pug">
.fv-payment-condition-references
  div(v-for="reference in references" :key="reference.key" :style="cssVars")
    v-row(class="align-center")
      v-col(cols="10")
        fv-reference-autocomplete(
          data-testid="referenceField"
          :element="getElementForReference(reference)"
          :reference="reference"
          @reference:selected="referenceSelected(reference, ...arguments)"
        )
      v-col.center(cols="1")
        v-avatar.reference(:color="avatarColor")
          span.referenceKey {{ reference.key }}
      v-col.center(cols="1")
        v-avatar.reference(:color="avatarColor")
          span.referenceKey {{ getValueForReference(reference) }}%
    v-row(v-if="referenceHasParam(reference)")
      v-col(cols="10")
        component(
          :is="getComponentForReference(reference)"
          :value="getParamValueForReference(reference)"
          @referenceParams:changed="referenceParamsChanged(reference, ...arguments)"
        )
</template>

<script>
import { filterReferenceAutocomplete } from '~/plugins/utils'

export default {
  name: 'FvPaymentConditionReferences',
  props: {
    value: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    selectedReferences() {
      const res = JSON.parse(JSON.stringify(this.value)) || {}
      return res
    },
    references() {
      const res = this.$store.getters['references/all']
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
    referenceSelected(reference, v) {
      const references = JSON.parse(JSON.stringify(this.selectedReferences))
      references[reference.key] = v
      this.$emit('payload:changed', references)
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
.label {
  margin-bottom: 8px;
}
.center {
  text-align: center;
}
.referenceKey {
  color: var(--fontColor);
}
.reference {
  border: 1px lightgrey solid !important;
  background: #f9fcff !important;
  text-align: center;
}
</style>
