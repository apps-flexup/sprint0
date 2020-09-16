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
          div(v-if="details")
            fv-text-field(
              :value="item.quantity"
              :outlined="false"
              :readonly="true"
              :clearable="false"
              class='quantity-input'
            )
          div(v-else)
            fv-quantity-selector(
              :quantity="item.quantity"
              @quantitySelector:minus="item.quantity = item.quantity - 1"
              @quantitySelector:plus="item.quantity = item.quantity + 1"
              class='quantity-selector-input'
            )
        template(v-slot:item.price="{ item }")
          div(v-to-preferred-currency="item.price")
        template(v-slot:item.total="{ item }")
          div(v-to-currency-quantity="item")
        template(v-slot:item.vat='{ item }')
          div(v-if="details")
            fv-text-field(
            v-model="item.vat"
            :outlined="false"
            :clearable="false"
            :readonly="true"
            suffix="%"
            class="vat-input"
          )
          div(v-else)
            fv-text-field(
              v-model="item.vat"
              :outlined="true"
              :clearable="false"
              :hideDetails="true"
              :dense="true"
              suffix="%"
              class="vat-selector-input"
              @inputChanged="vatChanged"
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
      const res = this.$activeAccount.headersOrderLines()
      return translateHeaders(this.$i18n, res)
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('headers/getOrderLineHeaders')
  },
  methods: {
    vatChanged(v) {
      this.item.vat = v
    },
    deleteOrderLine(v) {
      this.$emit('orderLines:delete', v)
    }
  }
}
</script>
