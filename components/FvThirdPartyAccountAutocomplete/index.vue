<template lang="pug">
.fv-third-party-account-autocomplete
  fv-autocomplete(
    data-testid='autocomplete'
    :element="thirdPartyAccountId"
    :items="items"
    :filter="filter"
    @autocomplete:selected="selected"
  )
    template(v-slot:label)
      div {{ $t('forms.orders.new.thirdPartyAccount') }}
    template(v-slot:item="data")
      template(v-if="data.item")
        fv-directory-entry(
          :entry="data.item"
        )
    template(v-slot:selection="data")
      template(v-if="data.item")
        v-list-item-avatar
          v-img(:src="data.item.avatar")
        v-list-item-content
          div {{ data.item.name }}
    template(v-slot:no-data)
      div Aucune donnée disponible
    template(v-slot:append-item)
      v-list-item-content
        v-btn(@click="addThirdPartyAccount" color="primary") Add new third party account
</template>

<script>
import availableThirdPartyAccounts from '../../mixins/availableThirdPartyAccounts'

export default {
  name: 'FvThirdPartyAccountAutocomplete',
  mixins: [availableThirdPartyAccounts],
  props: {
    thirdPartyAccountId: {
      type: Number,
      default() {
        return null
      }
    }
  },
  data() {
    return {
      allItems: []
    }
  },
  computed: {
    items() {
      const res = []
      if (this.allItems.localThirdParties?.length > 0) {
        res.push({ header: this.$t('third-parties.local') })
        this.allItems.localThirdParties.forEach((thirdParty) => {
          res.push(thirdParty)
        })
        res.push({ divider: true })
      }
      if (this.allItems.flexupThirdParties?.length > 0) {
        res.push({ header: this.$t('third-parties.flexup') })
        this.allItems.flexupThirdParties.forEach((thirdParty) => {
          res.push(thirdParty)
        })
        res.push({ divider: true })
      }
      if (this.allItems.flexupAccounts?.length > 0) {
        res.push({ header: this.$t('third-parties.others') })
        this.allItems.flexupAccounts.forEach((account) => {
          res.push(account)
        })
      }
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('thirdPartyAccounts/get')
    this.getAvailableThirdParties().then((data) => {
      this.allItems = data
    })
  },
  methods: {
    selected(v) {
      this.$emit('thirdPartyAccount:selected', v)
    },
    filter(item, queryText, _itemText) {
      if (Object.prototype.hasOwnProperty.call(item, 'header')) return true
      if (Object.prototype.hasOwnProperty.call(item, 'divider')) return true
      const res = item.name.toLowerCase().includes(queryText.toLowerCase())
      return res
    },
    addThirdPartyAccount() {
      console.log('Ajouter nouveau compte tiers')
    }
  }
}
</script>
