<template lang="pug">
.fv-payment-condition-step-detail
  fv-text-field(
    :label="$t('forms.paymentConditions.new.label')"
    @input="labelChanged"
  )
  div(v-for="reference in references" :key="reference.key")
    v-row
      v-col(cols="8")
        fv-autocomplete(
          :items="reference.value"
          :filter="filter"
          @autocomplete:selected="referenceSelected(reference, ...arguments)"
        )
          template(v-slot:label)
            p {{ $t('forms.paymentConditions.new.references.' + reference.key) }}
          template(v-slot:item="data")
            v-list-item-content
              v-list-item-title {{ $t('references.' + reference.key + '.' + data.item.key) }}
          template(v-slot:selection="data")
            div {{ $t('references.' + reference.key + '.' + data.item.key) }}
        component(
          v-if="referenceHasParam(reference)"
          :is="getComponentForReference(reference)"
          @referenceParams:changed="referenceParamsChanged(reference, ...arguments)"
        )
      v-col(
        cols="1"
        align="center"
        justify="center"
      )
        v-avatar.referenceAvatar(
          color="white"
        )
          span.referenceKey {{ reference.key }}
      v-col(
        cols="1"
        align="center"
        justify="center"
      )
        v-avatar.referenceAvatar(
          color="white"
        )
          span.referenceKey {{ getValueForReference(reference) }}%
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
  data() {
    return {
      selectedReferences: {}
    }
  },
  computed: {
    references() {
      const res = this.$store.getters['references/all']
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('references/get')
  },
  methods: {
    labelChanged(v) {
      const payload = {
        label: v
      }
      this.$emit('payload:changed', payload)
    },
    referenceSelected(reference, v) {
      this.$set(this.selectedReferences, reference.key, v)
      const payload = {
        selectedReferences: this.selectedReferences
      }
      this.$emit('payload:changed', payload)
    },
    getValueForReference(reference) {
      const key = reference.key
      const selectedReference = this.selectedReferences[key]
      let res = 0
      if (selectedReference) res = selectedReference.value
      if (!res) res = 0
      return res
    },
    referenceHasParam(reference) {
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
      const key = reference.key
      const selectedReference = this.selectedReferences[key]
      if (selectedReference && this.referenceHasParam(selectedReference)) {
        const params = selectedReference.params
        res = params.key
      }
      return res
    },
    referenceParamsChanged(reference, v) {
      const key = reference.key
      const selectedReference = JSON.parse(
        JSON.stringify(this.selectedReferences[key])
      )
      if (selectedReference && this.referenceHasParam(selectedReference)) {
        const params = JSON.parse(JSON.stringify(selectedReference.params))
        params.value = v
        selectedReference.params = params
      }
      this.$set(this.selectedReferences, reference.key, selectedReference)
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
}
.referenceKey {
  color: #6b6b6b;
}
</style>
