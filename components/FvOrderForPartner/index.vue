<template lang="pug">
.fv-order-for-partner
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
        fv-partner-autocomplete(
          :partnerId="partnerId"
          @partner:selected='partnerSelected'
        )
      v-col(cols="6")
        fv-partner-card(
          v-if="partnerId"
          :partnerId="partnerId"
        )
    v-row
      v-col(cols="6")
        fv-text-field(
          :label="$t('forms.orders.new.label')"
          @input="labelChanged"
        )
    v-row
      v-col(cols="8")
        fv-offer-autocomplete(
          :disabled="!partnerId"
          :partnerId="partnerId"
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
  name: 'FvOrderForPartner',
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
      partnerId: null,
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
  },
  methods: {
    labelChanged(label) {
      this.$emit('order:labelChanged', this.i, label)
    },
    structureSelected(structureId) {
      this.order.structure_id = structureId
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
    fillFieldsWithOrder() {
      if (!this.order) return
      this.partnerId = this.order.partnerId
      this.orderLines = this.order.orderLines
      this.localOrder = this.order
    },
    clearOrder() {
      this.partnerId = null
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
