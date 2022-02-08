<template lang="pug">
.fv-order-line-list-in-cart
  v-row
    v-col(cols="12")
      v-data-table.elevation-2(
        :headers='headers'
        :items='orderLines'
        item-key='id'
      )
        template(v-slot:item.product="{ item }")
          v-row.productCol
            v-col(cols="4")
              v-img.img(
                :src="item.image ? item.image : '/images/no-img.png'"
                alt="image.alt"
                max-width="150"
                :aspect-ratio="1"
              )
            v-col(cols="8")
              div.productName(v-to-locale="item.product")
        template(v-slot:item.price="{ item }")
          div(v-to-preferred-currency="{amount: item.price, currency: item.currency}")
        template(v-slot:item.quantity="{ item }")
          v-row.quantityCol
            fv-quantity-selector(
              :quantity="item.quantity"
              @quantitySelector:changed="quantityChanged(arguments, item)"
            )
            div.right(v-to-unit="item")
        template(v-slot:item.totalPrice="{ item }")
          div(v-to-preferred-currency="{amount: item.price * item.quantity, currency: item.currency}")
</template>

<script>
import { translateHeaders } from '~/plugins/utils'

export default {
  name: 'FvOrderLineListInCart',
  props: {
    orderLines: {
      type: Array,
      default() {
        return []
      },
    },
  },
  computed: {
    headers() {
      const res = this.$store.getters['headers/orderLinesCart']
      return translateHeaders(this.$i18n, res)
    },
  },
  mounted() {
    this.$store.dispatch('accounts/get')
    this.$store.dispatch('headers/getOrderLineCartHeaders')
  },
  methods: {
    quantityChanged(values, item) {
      const quantity = values[0]
      this.$emit('orderLinesInCart:quantityChanged', item, quantity)
    },
  },
}
</script>
<style scoped>
.img {
  border-radius: 10px;
}
.productName {
  font-weight: bolder;
}
.productCol {
  display: flex !important;
  align-items: center;
}
.quantityCol {
  display: flex !important;
  align-items: center;
}
.right {
  padding-left: 15px;
}
</style>
