<template lang="pug">
.fv-order-for-third-party-account
  p {{ $options.name }}
  v-card.mainCard
    v-row
      v-spacer
      v-btn(
        icon
        @click.prevent="remove"
        x-large
      )
        v-icon(data-testid="remove") mdi-close
    v-row
      v-col(cols="6")
        fv-third-party-account-autocomplete(
          data-testid="thirdPartyAccountAutocomplete"
          :thirdPartyAccountId="thirdPartyAccountId"
          @thirdPartyAccount:selected='thirdPartyAccountSelected'
        )
      v-col(cols="6")
        fv-third-party-account-card(
          data-testid="thirdPartyAccount"
          v-if="thirdPartyAccountId"
          :thirdPartyAccountId="thirdPartyAccountId"
        )
    v-row
      v-col(cols="6")
        fv-field-date(
          data-testid="date"
          :dateRef="orderDate"
          :label="$t('forms.orders.new.date')"
          @date:changed="dateChanged"
        )
      v-col(cols="6")
        fv-text-field(
          data-testid="label"
          :label="$t('forms.orders.new.label')"
          @input="labelChanged"
        )
    v-row
      v-col(cols="8")
        fv-product-autocomplete(
          data-testid="offerAutocomplete"
          :disabled="!thirdPartyAccountId"
          :thirdPartyAccountId="thirdPartyAccountId"
          :returnObject="true"
          @products:selected="productSelected"
        )
      v-col(cols="4")
        fv-structure-autocomplete(
          data-testid="paymentStructureAutocomplete"
          @structures:selected="structureSelected"
        )
    fv-order-line-list(
      data-testid="orderLines"
      :orderLines="orderLines"
      @orderLines:delete="deleteOrderLine"
      @orderLines:quantityChanged="quantityChanged"
      @orderLines:vatChanged="vatChanged"
    )
    v-row
      v-spacer
      v-col(cols="5")
        fv-order-totals(
          data-testid="total"
          :orderLines="orderLines"
        )
</template>

<script>
export default {
  name: 'FvOrderForThirdPartyAccount',
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
      localOrder: {},
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
    this.fillFieldsWithOrder()
    this.$emit('order:dateChanged', this.i, this.orderDate)
  },
  methods: {
    dateChanged(dte) {
      this.orderDate = new Date(dte)
      this.$emit('order:dateChanged', this.i, this.orderDate)
    },
    labelChanged(label) {
      this.$emit('order:labelChanged', this.i, label)
    },
    structureSelected(structureId) {
      const structure = this.$store.getters['paymentStructures/getDetailsById'](structureId)
      this.$emit('order:structureSelected', this.i, structure)
    },
    thirdPartyAccountSelected(thirdPartyAccountId) {
      if (this.thirdPartyAccountId !== thirdPartyAccountId) {
        this.thirdPartyAccountId = thirdPartyAccountId
        this.orderLines = []
      }
      this.$emit('order:thirdPartyAccountSelected', this.i, this.thirdPartyAccountId)
    },
    productSelected(product) {
      if (!product) return
      const payload = {
        id: product.id,
        name: product.name || 'absence de description',
        status: product.status,
        vat: product.vat,
        dimension: product.unit.dimension,
        unit: product.unit.unit,
        currency: product.price.currency,
        amount() {
          const res = parseFloat(this.quantity) * parseFloat(this.price)
          return res
        }
      }
      this.orderLines.push(payload)
      this.$emit('order:orderLinesChanged', this.i, this.orderLines)
    },
    deleteOrderLine(orderLine) {
      this.orderLines = this.orderLines.filter((v) => v.offer_id !== orderLine.offer_id)
      this.$emit('order:orderLinesChanged', this.i, this.orderLines)
    },
    quantityChanged(orderLine, quantity) {
      const i = this.orderLines.findIndex((element) => element.offer_id === orderLine.offer_id)
      const tmp = this.orderLines[i]
      tmp.quantity = quantity
      this.$set(this.orderLines, i, tmp)
    },
    vatChanged(orderLine, vat) {
      const i = this.orderLines.findIndex((element) => element.offer_id === orderLine.offer_id)
      const tmp = this.orderLines[i]
      tmp.vat = vat
      this.$set(this.orderLines, i, tmp)
    },
    remove() {
      this.$emit('order:remove', this.i)
    },
    fillFieldsWithOrder() {
      if (!this.order) return
      this.thirdPartyAccountId = this.order.thirdPartyAccountId
      this.orderDate = this.order.dte ? this.order.dte : new Date()
      this.orderLines = this.order.orderLines
      this.localOrder = this.order
    },
    clearOrder() {
      this.thirdPartyAccountId = null
      this.orderLines = []
      this.localOrder = {}
    }
  }
}
</script>
<style scoped>
.mainCard {
  padding: 10px;
}
</style>
