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
          fv-quantity-selector(
            :quantity="item.quantity"
            @quantitySelector:minus="$emit('orderLines:quantityMinus', item)"
            @quantitySelector:plus="$emit('orderLines:quantityPlus', item)"
          )
        template(v-slot:item.price="{ item }")
          div(v-to-preferred-currency="{amount: item.price, currency: item.currency}")
        template(v-slot:item.total="{ item }")
          div(v-to-preferred-currency="{amount: item.price * item.quantity, currency: item.currency}")
        template(v-slot:item.vat='{ item }')
          fv-text-field(
            :value="item.vat"
            :outlined="false"
            :clearable="false"
            suffix="%"
            @input="vatChanged(arguments, item)"
          )
        template(v-slot:item.status="{ item }")
          fv-status-progress(:status="item.status")
        template(v-slot:item.actions="{ item }")
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
    }
  },
  computed: {
    headers() {
      const res = this.$activeAccount.headersOrderLines()
      return translateHeaders(this.$i18n, res)
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('headers/getOrderLineHeaders')
  },
  methods: {
    vatChanged(values, item) {
      const vat = values[0]
      this.$emit('orderLines:vatChanged', item, vat)
    },
    deleteOrderLine(v) {
      this.$emit('orderLines:delete', v)
    }
  }
}
</script>
