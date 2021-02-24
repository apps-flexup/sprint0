<template lang="pug">
.fv-payment-structure-step-detail
  fv-text-field(
    :value="label"
    :label="$t('forms.paymentStructures.new.label')"
    @input="labelChanged"
  )
  fv-payment-condition-autocomplete(
    @paymentCondition:selected="paymentConditionSelected"
  )
  fv-payment-condition-data-table(
    v-if="items.length"
    :headers="headers"
    :items="items"
    @dataTable:portionChanged="portionChanged"
  )
</template>

<script>
export default {
  name: 'FvPaymentStructureStepDetail',
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
      paymentConditions: []
    }
  },
  computed: {
    label() {
      const res = this.payload ? this.payload.label : null
      return res
    },
    headers() {
      const res = this.$store.getters[
        'headers/paymentConditionsForPaymentStructureForm'
      ]
      return res
    },
    items() {
      const res = this.paymentConditions
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch(
      'headers/getPaymentConditionForPaymentStructureFormHeaders'
    )
  },
  methods: {
    labelChanged(v) {
      const payload = {
        label: v
      }
      this.$emit('payload:changed', payload)
    },
    paymentConditionSelected(v) {
      this.paymentConditions.push(v)
    },
    portionChanged(v) {
      console.log('portion: ', v)
    }
  }
}
</script>

<style scoped>
::v-deep .v-input.theme--light .v-input__slot {
  background: #ffffff;
  margin-bottom: initial;
}
</style>
