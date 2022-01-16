<template lang="pug">
.fv-offer-autocomplete
  fv-autocomplete(
    data-testid="autocomplete"
    :items="items"
    :filter="filter"
    :disabled="disabled"
    :returnObject="returnObject"
    :dense="dense"
    @autocomplete:selected="selected"
  )
    template(v-slot:label)
      div {{ label }}
    template(v-slot:item="data")
      v-list-item-avatar
        v-img(:src="data.item.illustration_url")
      v-list-item-content
        v-list-item-title(v-to-locale="data.item.name")
    template(v-slot:selection="data")
        v-list-item-avatar
          v-img(:src="data.item.illustration_url")
        v-list-item-content
          v-list-item-title(v-to-locale="data.item.name")
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
import { filterOfferAutocomplete } from '~/plugins/utils'
export default {
  name: 'FvOfferAutocomplete',
  props: {
    label: {
      type: String,
      default() {
        return this.$t('forms.orders.new.offer')
      }
    },
    thirdPartyAccountId: {
      type: Number,
      default() {
        return null
      }
    },
    disabled: {
      type: Boolean,
      default() {
        return false
      }
    },
    returnObject: {
      type: Boolean,
      default() {
        return false
      }
    },
    dense: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  data() {
    return {
      items: []
    }
  },
  watch: {
    async thirdPartyAccountId() {
      this.items = []
      if (this.thirdPartyAccountId > 0) {
        const res = await this.$axios.$get(
          `offers/?account_id=${this.thirdPartyAccountId}`
        )
        this.items = res
      }
    }
  },
  async mounted() {
    await this.$store.dispatch('thirdPartyAccounts/getAll')
    this.items = []
    if (this.thirdPartyAccountId > 0) {
      const thirdPartyAccount = this.$store.getters['thirdPartyAccounts/find'](
        this.thirdPartyAccountId
      )
      const accountId = thirdPartyAccount.id
      const res = await this.$axios.$get(`offers/?account_id=${accountId}`)
      this.items = res
    }
  },
  methods: {
    async selected(v) {
      const product = await this.$repos.products.show(v.product_id)
      this.$emit('offers:selected', {
        offerName: v.name,
        productName: product.name,
        ...v
      })
    },
    filter(item, queryText, itemText) {
      return filterOfferAutocomplete(item, queryText, itemText)
    },
    addCustomOrderItem() {
      this.$emit('offers:addCustomOrderItem')
    }
  }
}
</script>
