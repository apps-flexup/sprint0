<template lang="pug">
.fv-payment-condition-data-table
  fv-data-table(
    data-testid="dataTable"
    :headers='headers'
    :items='items'
    :hide-default-footer="hideDefaultFooter"
    :options="options"
    @dataTable:sortBy="sortBy"
    @dataTable:selected="selected"
  )
    template(v-slot:body.prepend)
      slot(name="body.prepend")
    template(v-slot:item.portion="{ item }")
      fv-number-field.portion-input(
        :hideDetails="true"
        :dense="true"
        :value="item.portion"
        @input="portionChanged(item.id, ...arguments)"
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
    portionChanged(itemId, v) {
      const payload = {
        item_id: itemId,
        portion: parseInt(v)
      }
      this.$emit('dataTable:portionChanged', payload)
    },
    selected(paymentCondition) {
      this.$emit('dataTable:selected', paymentCondition)
    },
    deleteItem(paymentCondition) {
      this.$emit('dataTable:delete', paymentCondition)
    },
    sortBy(v) {
      this.$emit('dataTable:sortBy', v)
    }
  }
}
</script>

<style scoped>
.portion-input {
  max-width: 100px;
}
</style>
