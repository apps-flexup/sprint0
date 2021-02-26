<template lang="pug">
.fv-payment-condition-autocomplete
  fv-autocomplete(
    :element="paymentConditionId"
    :items="items"
    :filter="filterList"
    @autocomplete:selected="selected"
  )
    template(v-slot:label)
      div {{ $t('forms.paymentStructures.new.paymentConditions') }}
    template(v-slot:item="data")
      v-list-item-content
        v-list-item-title(v-to-locale="data.item.label")
    template(v-slot:selection="data")
      v-list-item-content
        v-list-item-title(v-to-locale="data.item.label")
</template>

<script>
import { filterCategoryAutocomplete } from '~/plugins/utils'

export default {
  name: 'FvPaymentConditionAutocomplete',
  inheritAttrs: true,
  props: {
    paymentConditionId: {
      type: Number,
      default() {
        return null
      }
    }
  },
  computed: {
    items() {
      const res = this.$store.getters['paymentConditions/all']
      return res
    }
  },
  mounted() {
    this.$store.dispatch('paymentConditions/get')
    console.log('Composant ', this.$options.name)
  },
  methods: {
    filterList(item, v, it) {
      return filterCategoryAutocomplete(item, v, it)
    },
    selected(v) {
      this.$emit('paymentCondition:selected', v)
    }
  }
}
</script>
