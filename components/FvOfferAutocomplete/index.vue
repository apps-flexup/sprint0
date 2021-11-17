<template lang="pug">
.fv-offer-autocomplete
  fv-autocomplete(
    data-testid="autocomplete"
    :items="items"
    :filter="filter"
    :disabled="disabled"
    :returnObject="returnObject"
    @autocomplete:selected="selected"
  )
    template(v-slot:label)
      div {{ $t('forms.orders.new.offer') }}
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
</template>

<script>
import { filterOfferAutocomplete } from '~/plugins/utils'
export default {
  name: 'FvOfferAutocomplete',
  props: {
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
    }
  },
  data() {
    return {
      items: []
    }
  },
  watch: {
    thirdPartyAccountId() {
      this.items = []
      if (this.thirdPartyAccountId > 0) {
        const thirdPartyAccount = this.$store.getters[
          'thirdPartyAccounts/find'
        ](this.thirdPartyAccountId)
        const accountId = thirdPartyAccount.account_id
        const res = this.$store.getters['offers/getForAccount'](accountId)
        this.items = res
      }
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('thirdPartyAccounts/getAll')
    this.$store.dispatch('offers/getAll')
    this.items = []
    if (this.thirdPartyAccountId > 0) {
      const thirdPartyAccount = this.$store.getters['thirdPartyAccounts/find'](
        this.thirdPartyAccountId
      )
      const accountId = thirdPartyAccount.account_id
      const res = this.$store.getters['offers/getForAccount'](accountId)
      this.items = res
    }
  },
  methods: {
    selected(v) {
      this.$emit('offers:selected', v)
    },
    filter(item, queryText, itemText) {
      return filterOfferAutocomplete(item, queryText, itemText)
    }
  }
}
</script>
