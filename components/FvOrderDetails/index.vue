<template lang="pug">
.fv-order-details
  p {{ $options.name }}
  v-card.mainCard
    v-row
      v-col(cols="12" class="headDetails")
        v-col(cols="8")
          fv-third-party-account-card(
            data-testid="thirdPartyAccount"
            :thirdPartyAccountId="thirdPartyAccountId"
          )
        v-col(cols="4")
          fv-field-date(
            data-testid="date"
            :dateRef="new Date(orderDate)"
            :label="$t('forms.orders.new.date')"
            :hideDetails="true"
            :readonly="true"
            class="align"
          )
          fv-text-field(
            data-testid="paymentStructure"
            v-model="structure"
            :readonly="true"
            :hideDetails="true"
          )
    fv-order-line-list(
      data-testid="orderLines"
      :details="true"
      :orderLines="orderLines"
    )
    v-row
      v-spacer
      v-col(cols="7")
        fv-order-totals(
          data-testid="total"
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
      },
    },
    order: {
      type: Object,
      default() {
        return null
      },
    },
  },
  data() {
    return {
      structure: null,
      thirdPartyAccountId: null,
      orderDate: null,
      orderLines: [],
    }
  },
  watch: {
    order() {
      if (Object.entries(this.order).length === 0) {
        this.clearOrder()
      } else {
        this.fillFieldsWithOrder()
      }
    },
  },
  mounted() {
    this.fillFieldsWithOrder()
  },
  methods: {
    fillFieldsWithOrder() {
      if (!this.order) return
      this.thirdPartyAccountId = this.order.third_party_account_id
      if (this.order.structure) this.structure = this.order.structure.label
      this.orderDate = this.order.date
      this.orderLines = this.order.order_lines
    },
    clearOrder() {
      this.structure = null
      this.thirdPartyAccountId = null
      this.orderDate = null
      this.orderLines = []
    },
  },
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
