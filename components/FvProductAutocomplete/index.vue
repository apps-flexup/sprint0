<template lang="pug">
.fv-product-autocomplete
  fv-autocomplete(
    data-testid="autocomplete"
    :items="items"
    :filter="filter"
    :disabled="disabled"
    :returnObject="returnObject"
    @autocomplete:selected="selected"
  )
    template(v-slot:label)
      div {{ label }}
    template(v-slot:item="data")
      v-list-item-avatar
        v-img(:src="data.item.avatar")
      v-list-item-content
        .d-inline-flex.justify-space-between
          span {{ data.item.name }}
          span {{ price(data.item) }}
    template(v-slot:selection="data")
      v-list-item-avatar
        v-img(:src="data.item.avatar")
      v-list-item-content
        div {{ data.item.name }}
    template(v-slot:no-data)
      div Aucune donnée disponible
    template(v-slot:append-item)
      v-list-item-content
        fv-text-button(
          @button:click="addCustomOrderItem"
        )
          template(v-slot:icon)
            fv-icon(
              size="small"
              icon="mdi-plus"
              color="#1976d2"
              @icon:clicked="addCustomOrderItem"
            )
          template(v-slot:text)
            | {{ $t('forms.purchases.new.newCustomOrderItem') }}
</template>

<script>
import { filterProductAutocomplete } from '~/plugins/utils'

export default {
  name: 'FvProductAutocomplete',
  props: {
    label: {
      type: String,
      default() {
        return this.$t('forms.orders.new.product')
      },
    },
    thirdPartyAccountId: {
      type: Number,
      default() {
        return null
      },
    },
    disabled: {
      type: Boolean,
      default() {
        return false
      },
    },
    returnObject: {
      type: Boolean,
      default() {
        return false
      },
    },
  },
  data() {
    return {
      items: [],
    }
  },
  watch: {
    async thirdPartyAccountId() {
      this.items = []
      if (this.thirdPartyAccountId > 0) {
        const products = await this.$axios.$get(`products/?status=active&account_id=${this.thirdPartyAccountId}`)
        this.items = await Promise.all(
          products.map((o) => {
            return {
              ...o,
            }
          }),
        )
      }
    },
  },
  async mounted() {
    await this.$store.dispatch('thirdPartyAccounts/getAll')
    this.items = []
    if (this.thirdPartyAccountId > 0) {
      const thirdPartyAccount = this.$store.getters['thirdPartyAccounts/find'](this.thirdPartyAccountId)
      const accountId = thirdPartyAccount.id
      const products = await this.$axios.$get(`products/?status=active&account_id=${accountId}`)
      this.items = await Promise.all(
        products.map((o) => {
          return {
            ...o,
          }
        }),
      )
    }
    await this.$store.dispatch('products/get')
  },
  methods: {
    selected(v) {
      this.$emit('products:selected', {
        productName: v.name,
        ...v,
      })
      this.emitGenericSignalForForm(v)
    },
    filter(item, v, it) {
      return filterProductAutocomplete(item, v, it)
    },
    emitGenericSignalForForm(payload) {
      this.$emit('payload:changed', payload)
    },
    addCustomOrderItem() {
      this.$emit('products:addCustomOrderItem')
    },
    price(item) {
      const { unit, price } = item
      const { unit: unitStr } = unit
      const { amount, currency } = price
      return (
        amount.toLocaleString(this.$locale, {
          style: 'currency',
          currency,
          minimumSignificantDigits: 3,
        }) + ` ${unitStr} `
      )
    },
  },
}
</script>
