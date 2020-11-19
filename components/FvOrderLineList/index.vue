<template lang="pug">
.fv-order-line-list
  v-row
    v-col(cols="12")
      v-data-table.elevation-2(
        :headers='headers'
        :items='orderLines'
        item-key='id'
      )
        template(v-slot:item.offer="{ item }")
          div(v-to-locale="item.offer")
        template(v-slot:item.unit="{ item }")
          div(v-to-unit="item")
        template(v-slot:item.quantity="{ item }")
          div.text-right(v-if="details")
            div(class="quantity-input") {{ item.quantity }}
          div(v-else)
            fv-quantity-selector.quantity-selector-input(
              :quantity="item.quantity"
              @quantitySelector:changed="quantityChanged(arguments, item)"
            )
        template(v-slot:item.price="{ item }")
          div
            v-row.priceCol
              v-spacer
              fv-price-to-preferred-currency(
                :price="item.price"
                :currency="item.currency"
              )
              div /{{ item.unit }}
        template(v-slot:item.total="{ item }")
          div.text-right(v-to-preferred-currency="{amount: item.price * item.quantity, currency: item.currency}")
        template(v-slot:item.vat='{ item }')
          div.text-right(v-if="details")
            div(class="vat-input") {{ item.vat }} %
          div(v-else)
            fv-vat-field(
              :value="item.vat"
              :hideDetails="true"
              :dense="true"
              class="vat-selector-input"
              @vat:changed="vatChanged(arguments, item)"
            )
        template(v-slot:item.status="{ item }")
          fv-status-progress(:status="item.status")
        template(v-slot:item.actions="{ item }")
          div(v-if="details")
          div(v-else)
            fv-delete-action(
              @delete:clicked="deleteOrderLine(item)"
            )
</template>

<script>
import { translateHeaders } from '~/plugins/utils'

export default {
  name: 'FvOrderLineList',
  props: {
    orderLines: {
      type: Array,
      default() {
        return []
      }
    },
    details: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  computed: {
    headers() {
      const addAction = !this.details
      const res = this.$activeAccount.headersOrderLines(addAction)
      console.log(res)
      return translateHeaders(this.$i18n, res)
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('headers/getOrderLineHeaders')
    this.$store.dispatch('accounts/get')
    this.$store.dispatch('settings/getSettings')
  },
  methods: {
    vatChanged(values, item) {
      const vat = values[0]
      this.$emit('orderLines:vatChanged', item, vat)
    },
    quantityChanged(values, item) {
      const quantity = values[0]
      this.$emit('orderLines:quantityChanged', item, quantity)
    },
    deleteOrderLine(v) {
      this.$emit('orderLines:delete', v)
    }
  }
}
</script>

<style scoped>
.vat-input {
  width: 50px;
}
.quantity-input {
  max-width: 50px;
  margin-right: 0px;
  margin-left: auto;
}
.vat-selector-input {
  width: 100px;
  margin-right: 0px;
  margin-left: auto;
}
.quantity-selector-input {
  width: 200px;
  margin-right: 0px;
  margin-left: auto;
}
.priceCol {
  display: flex !important;
  align-items: center;
}
</style>
