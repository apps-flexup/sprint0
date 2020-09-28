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
          v-row
            v-col(cols="4")
              v-img.img(
                :src="item.image ? item.image : '/images/no-img.png'"
                alt="image.alt"
                max-width="150"
                :aspect-ratio="1"
              )
            v-col(cols="8")
              div.productName(v-to-locale="item.offer")
        template(v-slot:item.price="{ item }")
          div(v-to-preferred-currency="{amount: item.price, currency: item.currency}")
        template(v-slot:item.quantity="{ item }")
          v-row.quantityCol
            fv-quantity-selector.quantity-selector-input(
              :quantity="item.quantity"
              @quantitySelector:minus="$emit('orderLinesInCart:quantityMinus', item)"
              @quantitySelector:plus="$emit('orderLinesInCart:quantityPlus', item)"
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
      }
    }
  },
  computed: {
    headers() {
      const res = this.$store.getters['headers/orderLinesCart']
      return translateHeaders(this.$i18n, res)
    }
  },
  mounted() {
    this.$store.dispatch('accounts/get')
    this.$store.dispatch('headers/getOrderLineCartHeaders')
    console.log('Composant ', this.$options.name)
  }
}
</script>
<style scoped>
.img {
  border-radius: 10px;
}
.productName {
  font-weight: bolder;
}
.quantityCol {
  display: flex !important;
  align-items: center;
}
.quantity-selector-input {
  max-width: 120px;
}
.right {
  padding-left: 5px;
}
</style>
