<template lang="pug">
.fv-payment-condition-selection
  v-row
    v-col(cols='12')
      fv-payment-condition-autocomplete(
        data-testid="autocomplete"
        @paymentCondition:selected="paymentConditionSelected"
      )
  v-row
    v-col(cols='12')
      fv-payment-condition-data-table(
        data-testid="table"
        v-if="paymentConditions && paymentConditions.length"
        :headers="headers"
        :items="paymentConditionsDetails"
        :hideDefaultFooter="true"
        @dataTable:portionChanged="portionChanged"
        @dataTable:delete="deleteItem"
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
      fv-text-button(
        data-testid="addNewPaymentConditionButton"
        @button:click="addNewPaymentCondition"
      )
        template(v-slot:icon)
          fv-icon(
            x-large=true
            icon="mdi-plus"
            color="#1976d2"
            @icon:clicked="addNewPaymentCondition"
          )
        template(v-slot:text)
          | {{ $t('forms.paymentStructures.new.addNewPaymentCondition') }}
</template>

<script>
import { camelToSnakeCase } from '~/plugins/utils'

export default {
  name: 'FvPaymentConditionSelection',
  props: {
    value: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      tableName: 'paymentConditionsForPaymentStructureForm'
    }
  },
  computed: {
    headers() {
      const snakeCaseTableName = camelToSnakeCase(this.tableName)
      const res = this.$activeAccount.headers(snakeCaseTableName)
      return res
    },
    paymentConditions() {
      const res = this.value || []
      return res
    },
    paymentConditionsDetails() {
      if (!this.paymentConditions) return []
      const res = []
      this.paymentConditions.forEach((paymentCondition) => {
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
    },
    globalRisk() {
      if (!this.paymentConditionsDetails) return 0
      let res = 0
      this.paymentConditionsDetails.forEach((paymentCondition) => {
        const riskForPortion = paymentCondition.risk * paymentCondition.portion
        if (res === 0) res = riskForPortion
        else res += riskForPortion
      })
      res /= 100
      const payload = {
        paymentConditions: this.paymentConditions,
        risk: res
      }
      this.$emit('payload:changed', payload)
      return res
    },
    totalPortion() {
      if (!this.paymentConditions) return 0
      let res = 0
      this.paymentConditions.forEach((paymentCondition) => {
        res += paymentCondition.portion
      })
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('paymentConditions/get')
  },
  methods: {
    paymentConditionSelected(v) {
      const paymentConditions = JSON.parse(
        JSON.stringify(this.paymentConditions)
      )
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
          paymentConditions,
          risk: this.globalRisk
        }
        this.$emit('payload:changed', payload)
      }
    },
    portionChanged(v) {
      if (!this.paymentConditions) return
      const paymentConditions = JSON.parse(
        JSON.stringify(this.paymentConditions)
      )
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
      const paymentConditions = JSON.parse(
        JSON.stringify(this.paymentConditions)
      )
      const index = paymentConditions.findIndex((paymentCondition) => {
        return paymentCondition.id === v.id
      })
      if (index >= 0) {
        paymentConditions.splice(index, 1)
        this.$emit('payload:changed', paymentConditions)
      }
    },
    addNewPaymentCondition() {
      this.$router.push('/paymentConditions/new')
    }
  }
}
</script>

<style scoped>
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
