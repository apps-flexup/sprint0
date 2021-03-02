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
        v-icon mdi-close
    v-row
      v-col(cols="6")
        fv-third-party-account-autocomplete(
          :thirdPartyAccountId="thirdPartyAccountId"
          @thirdPartyAccount:selected='thirdPartyAccountSelected'
        )
      v-col(cols="6")
        fv-third-party-account-card(
          v-if="thirdPartyAccountId"
          :thirdPartyAccountId="thirdPartyAccountId"
        )
    v-row
      v-col(cols="6")
        fv-field-date(
          :dateRef="orderDate"
          :label="$t('forms.orders.new.date')"
          @date:changed="dateChanged"
        )
      v-col(cols="6")
        fv-text-field(
          :label="$t('forms.orders.new.label')"
          @input="labelChanged"
        )
    v-row
      v-col(cols="8")
        fv-offer-autocomplete(
          :disabled="!thirdPartyAccountId"
          :thirdPartyAccountId="thirdPartyAccountId"
          :returnObject="true"
          @offers:selected="offerSelected"
        )
      v-col(cols="4")
        fv-structure-autocomplete(
          @structures:selected="structureSelected"
        )
    fv-order-line-list(
      :orderLines="orderLines"
      @orderLines:delete="deleteOrderLine"
      @orderLines:quantityChanged="quantityChanged"
      @orderLines:vatChanged="vatChanged"
    )
    v-row
      v-spacer
      v-col(cols="5")
        fv-order-totals(
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
      console.log('Order changed: ', this.order)
      if (Object.entries(this.order).length === 0) {
        this.clearOrder()
      } else {
        this.fillFieldsWithOrder()
      }
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
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
      const structure = this.$store.getters['paymentStructures/getDetailsById'](
        structureId
      )
      this.$emit('order:structureSelected', this.i, structure)
    },
    thirdPartyAccountSelected(thirdPartyAccountId) {
      if (this.thirdPartyAccountId !== thirdPartyAccountId) {
        this.thirdPartyAccountId = thirdPartyAccountId
        this.orderLines = []
      }
      this.$emit(
        'order:thirdPartyAccountSelected',
        this.i,
        this.thirdPartyAccountId
      )
    },
    offerSelected(offer) {
      console.log('offer selected: ', offer)
      if (!offer) return
      const payload = {
        offer_id: offer.id,
        offer: offer.name || 'absence de description',
        status: 'draft',
        quantity: 1,
        pas: 1,
        vat: offer.vat,
        dimension: offer.dimension,
        unit: offer.unit,
        currency: offer.currency,
        amount() {
          const res = parseFloat(this.quantity) * parseFloat(this.price)
          return res
        },
        price: offer.price
      }
      this.orderLines.push(payload)
      this.$emit('order:orderLinesChanged', this.i, this.orderLines)
    },
    deleteOrderLine(orderLine) {
      this.orderLines = this.orderLines.filter(
        (v) => v.offer_id !== orderLine.offer_id
      )
      this.$emit('order:orderLinesChanged', this.i, this.orderLines)
    },
    quantityChanged(orderLine, quantity) {
      const i = this.orderLines.findIndex(
        (element) => element.offer_id === orderLine.offer_id
      )
      const tmp = this.orderLines[i]
      tmp.quantity = quantity
      this.$set(this.orderLines, i, tmp)
    },
    vatChanged(orderLine, vat) {
      const i = this.orderLines.findIndex(
        (element) => element.offer_id === orderLine.offer_id
      )
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
