<template lang="pug">
.fv-available-third-party-account-list
  v-menu(
    bottom
    :offset-y="true"
    :close-on-content-click="false"
  )
    template(v-slot:activator="{ on, attrs }")
      v-text-field(
        v-bind="attrs"
        v-on="on"
        :outlined="true"
        :placeholder="placeholder"
        :value="filter"
        @input="setFilter"
      )
    v-list(
      v-for="(header, index) in Object.keys(items)"
      :key="index"
    )
      v-subheader {{ header }}
      v-list-item-group
        v-list-item(
          v-for="(item) in items[header]"
          :key="item.id"
        )
          fv-directory-entry(
            :entry="item"
          )
          v-spacer
          fv-primary-button(
            v-if="item.addable && !item.added"
            @button:click="addThirdParty(item)"
          ) {{ $t('third-parties.add') }}
          div(
            v-if="item.addable && item.added"
          ) {{ $t('third-parties.added') }}
      v-divider(v-if="index < Object.keys(items).length - 1")
</template>

<script>
import availableThirdPartyAccounts from '../../mixins/availableThirdPartyAccounts'

export default {
  name: 'FvAvailableThirdPartyAccountList',
  mixins: [availableThirdPartyAccounts],
  data() {
    return {
      allItems: [],
      filter: '',
      placeholder: this.$t('third-parties.placeholder'),
    }
  },
  computed: {
    items() {
      const res = {}
      Object.keys(this.allItems).forEach((key) => {
        if (this.allItems[key]?.length) {
          const header = this.$t(`third-parties.${key}`)
          const addable = key === 'flexupAccounts'
          res[header] = this.applyFilterAndAddable(this.allItems[key], addable)
        }
      })
      return res
    },
  },
  mounted() {
    this.$store.dispatch('thirdPartyAccounts/get')
    this.getAvailableThirdParties().then((data) => {
      this.allItems = data
    })
  },
  methods: {
    addThirdParty(account) {
      const index = this.allItems.flexupAccounts.findIndex((flexupAccount) => flexupAccount.id === account.id)
      if (index > -1) {
        account.added = true
        this.$set(this.allItems.flexupAccounts, index, account)
        this.$store.dispatch('thirdPartyAccounts/addFlexupAccount', account.id)
      }
    },
    setFilter(filter) {
      this.filter = filter
    },
    applyFilterAndAddable(thirdParties, addable = false) {
      const res = []
      thirdParties.forEach((thirdParty) => {
        thirdParty.addable = addable
        if (this.filter.length) {
          const lowerCaseName = thirdParty.name.toLowerCase()
          const lowerCaseFilter = this.filter.toLowerCase()
          if (lowerCaseName.includes(lowerCaseFilter)) {
            res.push(thirdParty)
          }
        } else {
          res.push(thirdParty)
        }
      })
      return res
    },
  },
}
</script>
