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
            div(class="quantity-input") {{ item.quantity }}
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
            div(class="vat-input") {{ item.vat }} %
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

<style scoped>
.vat-input {
  width: 50px;
  text-align: right;
}
.quantity-input {
  max-width: 50px;
  text-align: right;
}
.vat-selector-input {
  width: 100px;
}
.quantity-selector-input {
  max-width: 120px;
}
</style>
