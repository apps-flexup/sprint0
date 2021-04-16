<template lang="pug">
.fv-payment-structure-step-detail
  fv-text-field(
    data-testid="labelField"
    :value="label"
    :label="$t('forms.paymentStructures.new.label')"
    @input="labelChanged"
  )
  fv-payment-condition-autocomplete(
    data-testid="autocomplete"
    @paymentCondition:selected="paymentConditionSelected"
  )
  fv-payment-condition-data-table(
    data-testid="table"
    v-if="paymentConditions && paymentConditions.length"
    :headers="headers"
    :items="paymentConditionsDetails"
    :hideDefaultFooter="true"
    @dataTable:portionChanged="portionChanged"
    @dataTable:delete="deleteItem"
    @dataTable:selected="selected"
  )
    template(v-slot:body.prepend)
      tr(class="totalLine")
        td.text-left {{ $t('forms.paymentStructures.new.globalRisk') }}
        td
        td {{ displayGlobalRisk() }}
        td
  p.errorMsg(
    data-testid="error"
    v-if="paymentConditions && paymentConditions.length && totalPortion !== 100"
  ) {{ $t('forms.paymentStructures.new.totalPortionMustBe100') }}
</template>

<script>
import { camelToSnakeCase } from '~/plugins/utils'

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
      tableName: 'paymentConditionsForPaymentStructureForm'
    }
  },
  computed: {
    globalRisk() {
      if (!this.paymentConditionsDetails) return 0
      let res = 0
      this.paymentConditionsDetails.forEach((paymentCondition) => {
        const riskForPortion = paymentCondition.risk * paymentCondition.portion
        if (res === 0) res = riskForPortion
        else res += riskForPortion
      })
      res /= 100
      return res
    },
    totalPortion() {
      if (!this.paymentConditions) return 0
      let res = 0
      this.paymentConditions.forEach((paymentCondition) => {
        res += paymentCondition.portion
      })
      return res
    },
    label() {
      const res = this.payload ? this.payload.label : null
      return res
    },
    headers() {
      const snakeCaseTableName = camelToSnakeCase(this.tableName)
      const res = this.$activeAccount.headers(snakeCaseTableName)
      return res
    },
    paymentConditions() {
      const res = this.payload ? this.payload.paymentConditions : []
      return res
    },
    paymentConditionsDetails() {
      if (!this.payload || !this.payload.paymentConditions) return []
      const res = []
      const paymentConditions = this.payload.paymentConditions
      paymentConditions.forEach((paymentCondition) => {
        const tmp = this.$store.getters['paymentConditions/findById'](
          paymentCondition.id
        )
        const payload = {
          ...tmp,
          portion: paymentCondition.portion
        }
        res.push(payload)
      })
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('paymentConditions/get')
  },
  methods: {
    labelChanged(v) {
      const payload = {
        label: v
      }
      this.$emit('payload:changed', payload)
    },
    paymentConditionSelected(v) {
      const paymentConditions = this.paymentConditions || []
      const found = paymentConditions.find((paymentCondition) => {
        return paymentCondition.id === v
      })
      if (!found) {
        const paymentCondition = {
          id: v,
          portion: 0
        }
        paymentConditions.push(paymentCondition)
        const payload = {
          paymentConditions
        }
        this.$emit('payload:changed', payload)
      }
    },
    portionChanged(v) {
      if (!this.paymentConditions) return
      const paymentConditions = this.paymentConditions
      const index = paymentConditions.findIndex((paymentCondition) => {
        return paymentCondition.id === v.item_id
      })
      if (index >= 0) {
        paymentConditions[index].portion = v.portion
        const payload = {
          paymentConditions,
          risk: this.globalRisk
        }
        this.$emit('payload:changed', payload)
      }
    },
    displayGlobalRisk() {
      const item = {
        risk: this.globalRisk
      }
      const res = this.$displayRules.paymentConditionRisk(item)
      return res
    },
    deleteItem(v) {
      if (!this.paymentConditions) return
      const paymentConditions = this.paymentConditions
      const index = paymentConditions.findIndex((paymentCondition) => {
        return paymentCondition.id === v.id
      })
      if (index >= 0) {
        paymentConditions.splice(index, 1)
        const payload = {
          paymentConditions
        }
        this.$emit('payload:changed', payload)
      }
    },
    selected(_v) {
      // const paymentCondition = JSON.parse(JSON.stringify(v))
      // this.$router.push('/paymentConditions/' + paymentCondition.id)
    }
  }
}
</script>

<style scoped>
::v-deep .v-input.theme--light .v-input__slot {
  background: #ffffff;
  margin-bottom: initial;
}
.totalLine {
  background-color: #fff8df;
}
.errorMsg {
  margin-top: 10px;
  color: red;
}
</style>
