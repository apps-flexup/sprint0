<template lang="pug">
.fv-order-line-list
  v-row
    v-col(cols="12")
      v-data-table.elevation-2(
        data-testid="dataTable"
        :headers='headers'
        :items='indexedItems'
        item-key='id'
      )
        template(v-slot:item.productName="{ item }")
          fv-text-field(
            v-if='item.canEditProductName'
            :value='item.productName'
            :dense='true'
            @input='orderItems[item.id].setProductName(arguments[0])'
          )
          div(v-else) {{ item.orderItem.productName }}
        template(v-slot:item.offerName="{ item }")
          fv-text-field(
            v-if='item.canEditOfferName'
            :value='item.offerName'
            :dense='true'
            @input='orderItems[item.id].setOfferName(arguments[0])'
          )
          div(v-else) {{ item.orderItem.offerName }}
        template(v-slot:item.quantity="{ item }")
          fv-quantity-selector.quantity-selector-input(
            :quantity="item.orderItem.quantity"
            @quantitySelector:changed="quantityChanged(arguments, item.id)"
          )
        template(v-slot:item.unit="{ item }")
          fv-unit-autocomplete(
            v-if='item.canEditUnit'
            :dense='true'
            @unit:selected='orderItems[item.id].setUnit(arguments[0].unit)'
          )
          div(v-else) {{ item.orderItem.unit }}
        template(v-slot:item.price="{ item }")
          fv-price-field(
            v-if='item.canEditPrice'
            :value='item.price'
            :dense='true'
            :search='{ unit: item.unit }'
            @price:changed='orderItems[item.id].setPrice(arguments[0].amount)'
          )
          fv-flex-items(v-else)
            template(v-slot:left)
              div.text-right(v-to-preferred-currency="{amount: item.orderItem.price.amount, currency: item.orderItem.price.currency }")
            template(v-slot:separator)
              div /
            template(v-slot:right)
              div {{ item.orderItem.unit }}
        template(v-slot:item.vat='{ item }')
          fv-vat-field(
            v-if='item.canEditVat'
            :value='item.orderItem.vat * 100'
            :dense='true'
            @vat:changed='orderItems[item.id].setVat(arguments[0] / 100)'
          )
          div(v-else) {{ item.orderItem.vat * 100 }}%
        template(v-slot:item.valueWithoutTax="{ item }")
          div.text-right(v-to-preferred-currency="{amount: orderItems[item.id].valueWithoutTax, currency: item.orderItem.price.currency }")
        template(v-slot:item.valueWithTax="{ item }")
          div.text-right(v-to-preferred-currency="{amount: orderItems[item.id].valueWithTax, currency: item.orderItem.price.currency }")
        template(v-slot:item.actions="{ item }")
          fv-delete-action(
            @delete:clicked="deleteOrderItem(item.id)"
          )
        template(v-slot:body.append)
          th(colspan="3")
            fv-offer-autocomplete.pl-4.py-3(
              :thirdPartyAccountId="thirdPartyId"
              :return-object="true"
              :dense="true"
              :label="$t('forms.purchases.new.selectOffer')"
              @offers:selected="orderItemSelected"
              @offers:addCustomOrderItem='addCustomOrderItem'
            )
</template>

<script>
import { translateHeaders } from '~/plugins/utils'

export default {
  name: 'FvOrderItemsSelector',
  props: {
    thirdPartyId: {
      type: Number,
      default() {
        return -1
      }
    },
    value: {
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
  data() {
    return {
      orderItems: [...this.value]
    }
  },
  computed: {
    indexedItems() {
      return this.orderItems.map((item, index) => ({
        id: index,
        ...item
      }))
    },
    headers() {
      const res = this.$store.getters['headers/orderItems']
      return translateHeaders(this.$i18n, res)
    }
  },
  watch: {
    value() {
      this.orderItems = [...this.value]
    }
  },
  mounted() {
    this.$store.dispatch('headers/getOrderItemHeaders')
    this.$store.dispatch('accounts/get')
    this.$store.dispatch('settings/getSettings')
  },
  methods: {
    vatChanged(values, item) {
      const vat = values[0]
      this.$emit('value:vatChanged', item, vat)
    },
    quantityChanged(values, index) {
      const quantity = values[0]
      this.$emit('orderItem:quantityChanged', { quantity, index })
    },
    deleteOrderItem(index) {
      this.$emit('orderItem:delete', index)
    },
    orderItemSelected(orderItem) {
      this.$emit('orderItem:selected', orderItem)
    },
    addCustomOrderItem() {
      this.$emit('orderItem:addCustom')
    }
  }
}
</script>

<style scoped>
.vat-selector-input {
  width: 100px;
  margin-right: auto;
  margin-left: 0px;
}
.quantity-selector-input {
  width: auto;
  margin-right: 10px;
  margin-left: 0px;
}
</style>
