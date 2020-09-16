<template lang="pug">
.fv-order-details
  p {{ $options.name }}
  v-card.mainCard
    v-row
      v-col(cols="12" class="headDetails")
        v-col(cols="8")
          fv-partner-card(
            :partnerId="partnerId"
            @partner:selected='partnerSelected'
          )
        v-col(cols="4")
          fv-field-date(
            :dateRef="new Date(orderDate)"
            :label="$t('forms.orders.new.date')"
            :clearable = "false"
            :hideDetails="true"
            :readonly="true"
            @date:changed="dateChanged"
            class="align"
          )
          fv-text-field(
            v-model="structure"
            :clearable="false"
            :readonly="true"
            :hideDetails="true"
            @structures:selected="structureSelected"
          )
    fv-order-line-list(
      :details="true"
      :orderLines="lineOrder"
    )
    v-row
      v-spacer
      v-col(cols="7")
        fv-order-totals(
          :orderLines="lineOrder"
        )
</template>

<script>
import '@/.storybook/style/v_dialog.css'
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
      localOrder: {},
      structure: null,
      offerName: null,
      partnerId: null,
      orderDate: null,
      lineOrder: [],
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
      this.$emit('order:structureSelected', this.i, structureId)
    },
    partnerSelected(partnerId) {
      console.log('partner selected: ', partnerId)
      if (this.partnerId !== partnerId) {
        this.partnerId = partnerId
        this.orderLines = []
      }
      this.$emit('order:partnerSelected', this.i, this.partnerId)
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
    remove() {
      this.$emit('order:remove', this.i)
    },
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
      this.partnerId = this.order.partner_id
      this.structure = this.getStructureName(this.order.structure)
      this.orderDate = this.order.date
      this.lineOrder = this.order.order_lines
      this.localOrder = this.order
      console.log('LA DATE ', this.lineOrder)
    },
    clearOrder() {
      this.partnerId = null
      this.orderLines = []
      this.localOrder = {}
    }
  }
}
</script>
