<template lang="pug">
.fv-order-details
  p {{ $options.name }}
  v-card.mainCard
    v-row
      v-col(cols="12" class="headDetails")
        v-col(cols="8")
          fv-third-party-account-card(
            :thirdPartyAccountId="thirdPartyAccountId"
          )
        v-col(cols="4")
          fv-field-date(
            :dateRef="new Date(orderDate)"
            :label="$t('forms.orders.new.date')"
            :clearable="false"
            :hideDetails="true"
            :readonly="true"
            class="align"
          )
          fv-text-field(
            v-model="structure"
            :clearable="false"
            :readonly="true"
            :hideDetails="true"
          )
    fv-order-line-list(
      :details="true"
      :orderLines="orderLines"
    )
    v-row
      v-spacer
      v-col(cols="7")
        fv-order-totals(
          :orderLines="orderLines"
        )
</template>

<script>
export default {
  name: 'FvOrderDetails',
  props: {
    i: {
      type: Number,
      default() {
        return null
      }
    },
    order: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      structure: null,
      offerName: null,
      thirdPartyAccountId: null,
      orderDate: null,
      orderLines: []
    }
  },
  watch: {
    order() {
      if (Object.entries(this.order).length === 0) {
        this.clearOrder()
      } else {
        this.fillFieldsWithOrder()
      }
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('contracts/getStructures')
    this.$store.dispatch('currencies/get')
    this.$store.dispatch('accounts/get')
    this.fillFieldsWithOrder()
  },
  methods: {
    getStructureName(structureId) {
      if (!structureId) {
        return null
      }
      const structure = this.$store.getters['contracts/getStructureById'](
        structureId
      )
      const res = structure.name
      return res
    },
    fillFieldsWithOrder() {
      if (!this.order) return
      this.thirdPartyAccountId = this.order.partner_id
      this.structure = this.getStructureName(this.order.structure)
      this.orderDate = this.order.date
      this.orderLines = this.order.order_lines
    },
    clearOrder() {
      this.thirdPartyAccountId = null
      this.orderLines = []
    }
  }
}
</script>

<style scoped>
.mainCard {
  padding: 10px;
}
.align {
  margin-bottom: 7px;
}
.headDetails {
  display: flex;
  align-items: center;
}
</style>
