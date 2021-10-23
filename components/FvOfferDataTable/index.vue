<template lang="pug">
.fv-offer-data-table
  fv-data-table(
    data-testid="dataTable"
    :headers='headers'
    :items='items'
    :hide-default-footer="hideDefaultFooter"
    :options="options"
    @dataTable:sortBy="sortBy"
    @dataTable:selected='selected'
  )
    template(v-slot:item.price='{ item }')
      fv-price-with-unit(
        :price="item.price"
        :currency="item.currency"
        :unit="item.unit"
      )
    template(v-slot:item.price_ttc='{ item }')
      fv-price-with-unit(
        :price="priceWithTax(item)"
        :currency="item.currency"
        :unit="item.unit"
      )
    template(v-slot:item.vat='{ item }')
      div {{ displayVat(item) }}
    template(v-slot:item.visibility='{ item }')
      div {{ displayVisibility(item) }}
    template(v-slot:item.status='{ item }')
      fv-offer-status-select.mx-auto(
        v-if="canEdit"
        class="status-progress"
        :value="item.status"
        @status:changed="statusChanged(item, ...arguments)"
        @click.native.stop
      )
      fv-status-readonly(
        v-else
        :value="item.status"
      )
    template(v-slot:item.actions="{ item }")
      v-row
        fv-edit-action(@edit:clicked="selected(item)")
        fv-delete-action(@delete:clicked="deleteItem(item)")
</template>

<script>
import { applyVatToAmount } from '~/plugins/utils'

export default {
  name: 'FvOfferDataTable',
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
  computed: {
    canEdit() {
      return this.$rights.canEditOffer()
    }
  },
  methods: {
    priceWithTax(item) {
      const amount = item.price.amount
      const vat = item.vat
      return {
        amount: applyVatToAmount(amount, vat),
        currency: item.price.currency
      }
    },
    displayVat(item) {
      const res = this.$displayRules.vat(item)
      return res
    },
    displayVisibility(item) {
      const res = this.$displayRules.visibility(item)
      return res
    },
    selected(offer) {
      this.$emit('dataTable:selected', offer)
    },
    deleteItem(offer) {
      this.$store.dispatch('offers/remove', offer)
    },
    sortBy(v) {
      this.$emit('dataTable:sortBy', v)
    },
    statusChanged(offer, newStatus) {
      if (!offer) return
      offer.status = newStatus
      this.$store.dispatch('offers/add', offer)
    }
  }
}
</script>

<style lang="scss" scoped>
.status-progress {
  max-width: $status-btn-width;
}
</style>
