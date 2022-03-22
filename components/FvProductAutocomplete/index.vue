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
      fv-product-list-item(
        :product="data.item"
      )
    template(v-slot:selection="data")
      div
    template(v-slot:no-data)
      div Aucune donnée disponible
    template(v-slot:append-item)
      v-list-item-content
        fv-product-form-modal
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
      prices: [],
    }
  },
  computed: {
    preferredCurrency() {
      const iso = this.$activeAccount.settings().currency
      const res = this.$store.getters['currencies/findIso'](iso)
      return res
    },
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
  },
}
</script>
