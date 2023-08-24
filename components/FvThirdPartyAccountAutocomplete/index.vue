<template lang="pug">
.fv-third-party-account-autocomplete
  fv-autocomplete(
    data-testid='autocomplete'
    :element="thirdPartyAccountId"
    :items="items"
    :filter="filter"
    :returnObject="true"
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
    },
    toRemove: {
      type: Object,
      default() {
        return {}
      }
    },
    showActiveAccount: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  data() {
    return {
      allItems: {}
    }
  },
  computed: {
    items() {
      const res = []
      const allItems = this.removeAskedForRemoveItems()
      Object.keys(allItems).forEach((key, index) => {
        if (allItems[key]?.length) {
          res.push({ header: this.$t(`third-parties.${key}`) })
          allItems[key].forEach((item) => {
            res.push(item)
          })
          if (index < Object.keys(allItems).length - 1) {
            res.push({ divider: true })
          }
        }
      })
      return res
    }
  },
  mounted() {
    this.$store.dispatch('thirdPartyAccounts/get')
    this.getAvailableThirdParties().then((data) => {
      if (this.showActiveAccount) {
        const activeAccountId = this.$activeAccount.get()
        const activeAccount = this.$store.getters['accounts/findById'](activeAccountId)
        this.allItems.activeAccount = [activeAccount]
      }
      this.allItems = { ...this.allItems, ...data }
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
    },
    removeAskedForRemoveItems() {
      const res = JSON.parse(JSON.stringify(this.allItems))
      Object.keys(res).forEach((key) => {
        res[key] = res[key]?.filter((thirdParty) => {
          if (this.toRemove[key]) return !this.toRemove[key].includes(thirdParty.id)
          return true
        })
      })
      return res
    }
  }
}
</script>
