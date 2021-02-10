<template lang="pug">
.fv-payment-condition-data-table
  fv-data-table(
    data-testid="fvDataTable"
    :headers='headers'
    :items='items'
    :hide-default-footer="hideDefaultFooter"
    :options="options"
    @dataTable:sortBy="sortBy"
    @dataTable:selected="selected"
  )
    template(v-slot:item.priority="{ item }")
      div {{ displayPriority(item) }}
    template(v-slot:item.paymentTerm="{ item }")
      div {{ displayPaymentTerm(item) }}
    template(v-slot:item.interestRate="{ item }")
      div {{ displayInterestRate(item) }}
    template(v-slot:item.risk="{ item }")
      div {{ displayRisk(item) }}
    template(v-slot:item.actions="{ item }")
      v-row
        fv-edit-action(@edit:clicked="selected(item)")
        fv-delete-action(@delete:clicked="deleteItem(item)")
</template>

<script>
export default {
  name: 'FvPaymentConditionDataTable',
  props: {
    hideDefaultFooter: {
      type: Boolean,
      default() {
        return false
      }
    },
    headers: {
      type: Array,
      default() {
        return []
      }
    },
    items: {
      type: Array,
      default() {
        return []
      }
    },
    options: {
      type: Object,
      default() {
        return null
      }
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    displayPriority(item) {
      const res = this.$displayRules.paymentConditionPriority(item)
      return res
    },
    displayPaymentTerm(item) {
      const res = this.$displayRules.paymentConditionPaymentTerm(item)
      return res
    },
    displayInterestRate(item) {
      const res = this.$displayRules.paymentConditionInterestRate(item)
      return res
    },
    displayRisk(item) {
      const res = this.$displayRules.paymentConditionRisk(item)
      return res
    },
    selected(paymentCondition) {
      this.$emit('dataTable:selected', paymentCondition)
    },
    // deleteItem(product) {
    //   this.$store.dispatch('products/remove', product)
    // },
    sortBy(v) {
      this.$emit('dataTable:sortBy', v)
    }
  }
}
</script>
